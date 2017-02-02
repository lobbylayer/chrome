import React, {Component, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Disclosure from './Disclosure'
import extractor from '../extractor'

const query = gql`query parliamentarian {
  parliamentarians(locale: de) {
    name
    lastName
    id
  }
}`

class App extends Component {
  render () {
    const {data, content} = this.props
    if (data.loading) {
      return <span>Lädt</span>
    }
    if (data.error) {
      return <span>{data.error.toString()}</span>
    }
    return (
      <div>
        <h1>Interessenbindungen in diesem Artikel</h1>
        <Disclosure parliamentarianIds={extractor({content, parliamentarians: data.parliamentarians})} />
      </div>
    )
  }
}

App.PropTypes = {
  content: PropTypes.string.isRequired
}

export default graphql(query)(App)
