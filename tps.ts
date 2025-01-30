import { OptionalId } from "mongodb";

export type cocktailModel = OptionalId<{
    name: string
}>

export type cocktail = {
    id: string,
    name: string
}

export type APICock = {
    ingredients: string[]
}