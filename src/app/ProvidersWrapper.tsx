'use client'
import { ApolloProvider } from "@apollo/client"
import { client } from "../lib/client"

export default function ProvidersWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}