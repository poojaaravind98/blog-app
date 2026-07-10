import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// The backend GraphQL endpoint. Override with REACT_APP_GRAPHQL_URI
// in a .env file if your backend runs somewhere other than localhost:4000.
const GRAPHQL_URI =
  process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_URI }),
  cache: new InMemoryCache(),
});

export default client;
