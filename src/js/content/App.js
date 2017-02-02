import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Disclosure from './Disclosure';
import extractor from '../extractor';


const query = gql`query parliamentarian {
  parliamentarians(locale: de) {
    name
  }
}`;

class App extends Component {
  render() {
    const {data, content} = this.props;
    if (data.loading) {
      return <span>Lädt</span>;
    }
    if (data.error) {
      return <span>{data.error.toString()}</span>;
    }

    return (
      <div>
        <h1>MPs</h1>
        <Disclosure parliamentarianIds={extractor(content, data.parliamentarians)} />
      </div>
    )
  }
}

export default graphql(query)(App);
