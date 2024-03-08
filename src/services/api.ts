const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async () => {
  const response = await fetch(`${BASE_URL}/pokemon/?limit=151&offset=1`);
  const data = await response.json();
  return data.results;
};

export const fetchPokemonDetails = async (id: number) => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();
  return data;
};
