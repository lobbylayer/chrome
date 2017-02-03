import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { nest } from 'd3-collection'
import { css } from 'glamor'
import { getLocale, t } from '../utils'

let h1 = css({
  color: 'black',
  marginBottom: '0px',
  marginTop: '3px'
})
let h2 = css({
  marginBottom: '10px'
})

let pullRight = css({
  float: 'right'
})

const query = gql`query getParliamentarian($locale: Locale!, $id: ID!) {
  getParliamentarian(locale: $locale, id: $id) {
    name
    portrait
    council
    gender
    partyMembership {
      party {
        abbr
      }
    }
    canton
    connections {
      group
      function
      to {
        ... on Organisation {
          name
        }
      }
    }
  }
}`

function ascending (a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
}

class Connections extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const {data} = this.props
    const moreKey = '$more$'
    let groups = nest()
      .key(connection => connection.group || moreKey)
      .entries(data)

    let moreGroup = groups.filter(g => g.key === moreKey)[0]

    groups = groups.filter(g => g.key !== moreKey)
    groups.sort((a, b) => ascending(a.values.length, b.values.length))

    const moreGroups = groups.slice(5)
    groups = groups.slice(0, 5)

    if (moreGroups && moreGroups.length) {
      if (!moreGroup) {
        moreGroup = {
          key: moreKey,
          values: []
        }
      }
      moreGroups.forEach(({values}) => {
        moreGroup.values = moreGroup.values.concat(values)
      })
    }
    if (moreGroup) {
      groups.push(moreGroup)
    }

    return (
      <ul>
        {groups.map(({key, values}, i) => {
          const isOpen = !!this.state[key]
          return (
            <li key={i}>
              <a style={{cursor: 'pointer'}} onClick={(e) => { e.preventDefault(); this.setState({[key]: !isOpen}) }}>
                {values.length}
                &nbsp;
                {key === moreKey ? t(`Connections/more/${values.length === 1 ? 'singular' : 'plural'}`) : key}
              </a>
              {isOpen && (<ul>
                {values.map((value, i) => <li key={i}>{value.to.name} {value.function}</li>)}
              </ul>)}
            </li>
          )
        })}
      </ul>
    )
  }
}

const Detail = ({data}) => {
  if (data.loading) {
    return <span>{t('loading')}</span>
  }
  if (data.error) {
    return <span>{data.error.toString()}</span>
  }

  const {name, portrait, council, gender, partyMembership, canton, connections} = data.getParliamentarian

  return (
    <div className='alert alert-info'>
      <img src={portrait} className={`${pullRight}`} />
      <h1 className={`${h1}`}>{name}</h1>
      <h2 className={`${h2}`}>{t(`Detail/${council}-${gender}`)} {partyMembership.party.abbr} {canton}</h2>
      <Connections data={connections.filter(connection => !connection.via)} />
    </div>
  )
}

const DetailFromId = graphql(query)(Detail)

const List = ({parliamentarianIds}) => {
  return (
    <div>
      <h2>{t('List/title')}</h2>
      {parliamentarianIds.map(id => (
        <DetailFromId key={id} id={id} locale={getLocale()} />
      ))}
    </div>
  )
}

List.propTypes = {
  parliamentarianIds: PropTypes.arrayOf(PropTypes.string)
}

export default List
