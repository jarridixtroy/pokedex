import { Pokemon } from "../models/Pokemon";
import { Direcciones } from "../dto/pokemonEndpointDTO.ts";
import { getPokemonDetails, getPokemonDetailsV2 } from "./getPokemonDetails";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(): Promise<JSON[]> {
  const response = await fetch(`${BASE_URL}/pokemon/?limit=151&offset=1`);
  const data = await response.json();
  const pokemon_list = data.results;
  return pokemon_list;
}

export async function getPokemon(cuantos: number): Promise<Pokemon[]> {
  const urls: Direcciones = await (
    await fetch(`${BASE_URL}/pokemon/?limit=${cuantos}&offset=0`)
  ).json();

  const pokemonPromises = urls.results.map<Promise<Pokemon>>(async (value) => {
    return getPokemonDetailsV2(value.url);
  });
  const pokemon_list: Pokemon[] = await Promise.all(pokemonPromises);
  //for (let i = 0; i < cuantos; i++) {
  //pokemon_list[i] = await getPokemonDetailsV2(i + 1);
  //}
  return pokemon_list;
}
