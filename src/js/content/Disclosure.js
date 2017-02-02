import React, {PropTypes} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { css } from 'glamor'

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

const query = gql`query getParliamentarian($id: ID!) {
  getParliamentarian(locale: de, id: $id) {
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
      to {
        ... on Organisation {
          name
        }
      }
    }
  }
}`

const bezeichnung = (council, gender) => {
  let bezeichnung = council == 'SR' ? "Ständerat" : "Nationalrat"
  return gender == 'F' ? bezeichnung.replace('rat','rätin') : bezeichnung
}

const Detail = ({data}) => {
  if (!data || data.loading) {
    return <span>Lädt</span>
  }
  if (data.error) {
    return <span>{data.error.toString()}</span>
  }

  const {name, portrait, council, gender, partyMembership, canton, connections} = data.getParliamentarian

  return (
    <div className='alert alert-info'>
      <img src={portrait} className={`${pullRight}`} />
      <h1 className={`${h1}`}>{name}</h1>
      <h2 className={`${h2}`}>{bezeichnung(council, gender)} {partyMembership.party.abbr} {canton}</h2>
      <ul>
        {connections.map(({to}, i) => (
          <li key={i}>{to.name}</li>
        ))}
      </ul>
    </div>
  )
}

const DetailFromId = graphql(query)(Detail)

const List = ({parliamentarianIds}) => {
  return (
    <div>
      <h2>In diesem Artikel kommen folgende Parlamentarier vor:</h2>
      {parliamentarianIds.map(id => (
        <DetailFromId key={id} id={id} />
      ))}
    </div>
  )
}

List.propTypes = {
  parliamentarianIds: PropTypes.arrayOf(PropTypes.string)
}

export default List
