const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (): Promise<JSON[]> => {
  const response = await fetch(`${BASE_URL}/pokemon/?limit=151&offset=1`);
  const data = await response.json();
  const pokemon_list: JSON[] = data.results;
  return pokemon_list;
};

export const fetchPokemonDetails = async (id: number): Promise<JSON> => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data: JSON = await response.json();
  return data;
};
