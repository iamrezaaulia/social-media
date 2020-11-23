import React from 'react';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import App from './App';
import { GlobalStyles } from './styles/global';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>
);