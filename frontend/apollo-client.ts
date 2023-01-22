import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client =  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://127.0.0.1:8000/graphql/',
    }),
    cache: new InMemoryCache(),
  });

export default client;