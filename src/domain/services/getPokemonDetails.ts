import PokemonDTO from "../dto/pokemonDTO";

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
