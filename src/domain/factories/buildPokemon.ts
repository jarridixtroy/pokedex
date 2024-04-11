import PokemonDTO from "../dto/pokemonDTO";
import { PokemonTypeDTO } from "../dto/pokemonTypesDTO";
import { Pokemon } from "../models/Pokemon";
import { PokemonType } from "../models/PokemonType";

export function transform(
  pokemon: PokemonDTO,
  descriptionEsp: string
): Pokemon {
  const poke: Pokemon = {
    height: pokemon.height / 10,
    id: pokemon.id,
    name: pokemon.name,
    sprite: pokemon.sprites.other["official-artwork"].front_default,
    types: transformType(pokemon.types),
    weight: pokemon.weight / 10,
    description: descriptionEsp,
  };
  return poke;
}

function transformType(types: PokemonTypeDTO[]): PokemonType[] {
  return types.map((tipo) => tipo.type.name as PokemonType);
}
