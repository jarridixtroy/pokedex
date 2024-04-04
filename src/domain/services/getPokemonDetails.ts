import PokemonDTO from "../dto/pokemonDTO";
import { Pokemon } from "../models/Pokemon";
import {
  getPokemonDescription,
  getPokemonDescriptionV2,
} from "./getPokemonDescription";
import { transform } from "../factories/buildPokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonDetails(id: number): Promise<PokemonDTO> {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();

  const details: PokemonDTO = {
    height: data.height,
    weight: data.weight,
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
  };

  return details;
}

export async function getPokemonDetailsV2(id: number): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();

  const details: PokemonDTO = {
    height: data.height,
    weight: data.weight,
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
  };
  const pokemonDetails = transform(details);

  return pokemonDetails;
}
