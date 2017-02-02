import React, {Component, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Disclosure from './Disclosure'
import extractor from '../extractor'
import { t } from '../utils'

const query = gql`query parliamentarian($locale: Locale!) {
  parliamentarians(locale: $locale) {
    name
    lastName
    id
  }
}`

class App extends Component {
  render () {
    const {data, content} = this.props
    if (data.loading) {
      return <span>{t('loading')}</span>
    }
    if (data.error) {
      return <span>{data.error.toString()}</span>
    }
    return (
      <div>
        <Disclosure parliamentarianIds={extractor({content, parliamentarians: data.parliamentarians})} />
      </div>
    )
  }
}

App.PropTypes = {
  content: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
}

export default graphql(query)(App)
