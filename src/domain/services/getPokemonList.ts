import { Pokemon } from "../models/Pokemon";
import { DireccionesDTO } from "../dto/direccionesDTO.ts";
import { getPokeDetails } from "./getPokemonDetails";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(): Promise<JSON[]> {
  const response = await fetch(`${BASE_URL}/pokemon/?limit=151&offset=1`);
  const data = await response.json();
  const pokemon_list = data.results;
  return pokemon_list;
}

export async function getPokemon(cuantos: number): Promise<Pokemon[]> {
  const urls: DireccionesDTO = await (
    await fetch(`${BASE_URL}/pokemon?limit=${cuantos}&offset=0`)
  ).json();

  const pokemonPromises = urls.results.map<Promise<Pokemon>>(async (value) => {
    return getPokeDetails(value.url);
  });
  const pokemon_list: Pokemon[] = await Promise.all(pokemonPromises);

  return pokemon_list;
}
