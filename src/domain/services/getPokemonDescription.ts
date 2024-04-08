import PokemonDescriptionDTO from "../dto/pokemonDescriptionDTO";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonDescription(id: number): Promise<string> {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  const data: PokemonDescriptionDTO = await response.json();
  const description: string = data.flavor_text_entries[0].flavor_text;

  return description;
}

export async function getPokemonDescriptionEsp(id: number): Promise<string> {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  const data: PokemonDescriptionDTO = await response.json();

  for (let i = 0; i < 100; i++) {
    if (data.flavor_text_entries[i].language.name === "es") {
      return data.flavor_text_entries[i].flavor_text;
    }
  }
  return "";
}
