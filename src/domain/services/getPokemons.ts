import { Pokemon } from "../models/Pokemon.ts";
import { DireccionesDTO } from "../dto/direccionesDTO.ts";
import { getPokemon } from "./getPokemonDetails.ts";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemons(cuantos: number): Promise<Pokemon[]> {
  const urls: DireccionesDTO = await (
    await fetch(`${BASE_URL}/pokemon?limit=${cuantos}&offset=0`)
  ).json();

  const pokemonPromises = urls.results.map<Promise<Pokemon>>(async (value) => {
    return getPokemon(value.url);
  });
  const pokemon_list: Pokemon[] = await Promise.all(pokemonPromises);

  return pokemon_list;
}
