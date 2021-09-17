import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPH_API,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// mutations -> quando quisemos criar uma mutação, por exemplo criar um usuario

// queries -> buscar dados, por exemplo listar usuarios

// dentro do graphql
// types -> dentro do grapql (API) você tem os types, onde você cria um contrato, como se fosse a entidade. por exemplo quais atributos o usuario tem

// graphql tem duas abordagem -> schema first & code first
