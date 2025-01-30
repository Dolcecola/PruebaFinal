export const schema = `#graphql

type Contact{
    id: ID!
    nombre: String!
    telefono: String!
    pais: String!
}

type Query{
    getContacts: [Contact!]!
}

type Mutation{
    addContact(nombre: String!, telefono: String!): Contact!
}

`