import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache({});

export const client: any = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors }) => {
      if (graphQLErrors) {
        // eslint-disable-next-line no-console
        console.log(graphQLErrors);
      }
    }),
    new HttpLink({
      uri: 'https://graphql.anilist.co/',
    }),
  ]),
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        cache.writeData({ data: { isConnected } });
        return null;
      },
    },
  },
});

cache.writeData({
  data: {
    isConnected: true,
  },
});
