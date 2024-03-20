import PokemonDTO from "../dto/pokemonDTO";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(): Promise<JSON[]> {
  const response = await fetch(`${BASE_URL}/pokemon/?limit=151&offset=1`);
  const data = await response.json();
  const pokemon_list = data.results;
  return pokemon_list;
}

export async function fetchPokemonDetails(id: number): Promise<PokemonDTO> {
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
