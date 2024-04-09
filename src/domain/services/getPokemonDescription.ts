import PokemonDescriptionDTO from "../dto/pokemonDescriptionDTO";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonDescription(id: number): Promise<string> {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  const data: PokemonDescriptionDTO = await response.json();
  const description: string = data.flavor_text_entries[0].flavor_text;

  return description;
}

export async function getSpanishDescription(id: number): Promise<string> {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  const data: PokemonDescriptionDTO = await response.json();

  const flavor_text_entrie = data.flavor_text_entries.find(
    (flavor_text_entri) => {
      return flavor_text_entri.language.name === "es";
    }
  );
  if (flavor_text_entrie === undefined) {
    return "indefinido";
  }
  return flavor_text_entrie.flavor_text;
}
