import React, {PropTypes} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`query getParliamentarian($id: ID!) {
  getParliamentarian(locale: de, id: $id) {
    name
    age
    connections {
      to {
        ... on Organisation {
          name
        }
      }
    }
  }
}`

const Detail = ({data}) => {
  if (!data || data.loading) {
    return <span>Lädt</span>
  }
  if (data.error) {
    return <span>{data.error.toString()}</span>
  }

  const {name, age, connections} = data.getParliamentarian

  return (
    <div>
      <h2>{name} {age}</h2>
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
      <h1>Interessensbindungen</h1>
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
