import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`query parliamentarian {
  parliamentarians(locale: de) {
    name
  }
}`

const List = ({data}) => {
  if (!data || data.loading) {
    return <span>Lädt</span>
  }
  if (data.error) {
    return <span>{data.error.toString()}</span>
  }

  return (
    <div>
      <h1>MPs</h1>
      <ul>
        {data.parliamentarians.map(({name}, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default graphql(query)(List)
