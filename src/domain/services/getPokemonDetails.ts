import PokemonDTO from "../dto/pokemonDTO";
import { Pokemon } from "../models/Pokemon";
import { transform } from "../factories/buildPokemon";
import { getSpanishDescription } from "./getPokemonDescription";



export async function getPokemon(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  const data = await response.json();
  const description = await getSpanishDescription(data.id);

  const details: PokemonDTO = {
    height: data.height,
    weight: data.weight,
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
  };
  const pokemonDetails = transform(details, description);

  return pokemonDetails;
}
