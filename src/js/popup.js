import "../css/popup.css";
import Greeting from "./popup/greeting_component";
import ParliamentarianList from "./popup/ParliamentarianList";
import React from "react";
import { render } from "react-dom";
import client from './graphql'
import { ApolloProvider } from 'react-apollo';

render(
  (
    <ApolloProvider client={client}>
      <ParliamentarianList />
    </ApolloProvider>
  ),
  window.document.getElementById("app-container")
);
