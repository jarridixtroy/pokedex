import PokemonDTO from "../dto/pokemonDTO";
import { PokemonTypeDTO } from "../dto/pokemonTypesDTO";
import { Pokemon } from "../models/Pokemon";
import { PokemonType } from "../models/PokemonType";
import { getPokemonDescriptionV2 } from "../services/getPokemonDescription";

export async function transform(pokemon: PokemonDTO): Promise<Pokemon> {
  const poke: Pokemon = {
    height: pokemon.height,
    id: pokemon.id,
    name: pokemon.name,
    sprite: pokemon.sprites.other["official-artwork"].front_default,
    types: transformType(pokemon.types),
    weight: pokemon.weight,
    description: await getPokemonDescriptionV2(pokemon.id),
  };
  return poke;
}

function transformType(types: PokemonTypeDTO[]): PokemonType[] {
  return types.map((tipo) => tipo.type.name as PokemonType);
}
