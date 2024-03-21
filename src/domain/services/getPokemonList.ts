const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(): Promise<JSON[]> {
  const response = await fetch(`${BASE_URL}/pokemon/?limit=151&offset=1`);
  const data = await response.json();
  const pokemon_list = data.results;
  return pokemon_list;
}
