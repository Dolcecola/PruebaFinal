import { Collection } from "mongodb";
import { APICock, cocktailModel } from "./tps.ts";
import { GraphQLError } from "graphql";

export const resolvers = {
    Query: {
        getCocktails: async(_: unknown, __: unknown, c: {cocktails: Collection<cocktailModel>}):Promise<cocktailModel[]> => {
            return await c.cocktails.find().toArray();
        }
    },

    Cocktail: {
        id: async(parent: cocktailModel):Promise<string> => { return await parent._id!.toString(); },
        ingredients: async(parent: cocktailModel):Promise<string[]> => {
            const n = parent.name;
            const API_KEY = Deno.env.get("API_KEY");
            if(!API_KEY) throw new GraphQLError("API key invalid.");
            
            const url = `https://api.api-ninjas.com/v1/cocktail?name=${n}`;
            const data = await fetch(url, {
                headers: {
                    'X-Api-Key': API_KEY
                },
            });

            const res: APICock[] = await data.json(); //Importante definir res como un ARRAY de tipo APICock por como es la respuesta json
            return res[0].ingredients //Si pongo res[1] da error (tiene sentido)
            
        }
    }
}