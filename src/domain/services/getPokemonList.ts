import { Pokemon } from "../models/Pokemon";
import { getPokemonDetails, getPokemonDetailsV2 } from "./getPokemonDetails";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(): Promise<JSON[]> {
  const response = await fetch(`${BASE_URL}/pokemon/?limit=151&offset=1`);
  const data = await response.json();
  const pokemon_list = data.results;
  return pokemon_list;
}

export async function getPokemonListV2(cuantos: number): Promise<Pokemon[]> {
  const pokemon_list: Pokemon[] = new Array(cuantos);
  for (let i = 0; i < cuantos; i++) {
    pokemon_list[i] = await getPokemonDetailsV2(i + 1);
  }
  return pokemon_list;
}
