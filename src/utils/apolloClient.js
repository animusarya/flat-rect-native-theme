import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import config from './config';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: config.debug ? config.graphQlUriDev : config.graphQlUri,
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link,
  cache,
});

export default client;
