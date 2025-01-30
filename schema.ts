export const schema = `#graphql

type Cocktail{
    id: ID!
    name: String!
    ingredients: [String!]!
}

type Query{
    getCocktails: [Cocktail!]!
}
`