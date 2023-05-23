import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://eletro-pecas-valente.saleor.cloud/graphql/',
    cache: new InMemoryCache(),
});