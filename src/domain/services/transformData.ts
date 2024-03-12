import PokemonDTO from "../dto/pokemonDTO";
import { PokemonTypeDTO } from "../dto/pokemonTypesDTO";
import { Pokemon } from "../models/pokemon.model";
import { PokemonType } from "../models/pokemonType.model";

export function transform(pokemon: PokemonDTO): Pokemon {
  let poke: Pokemon = {
    height: pokemon.height,
    id: pokemon.id,
    name: pokemon.name,
    sprite: pokemon.sprites.other["official-artwork"].front_default,
    types: transformType(pokemon.types),
    weight: pokemon.weight,
  };
  return poke;
}

function transformType(types: PokemonTypeDTO[]): PokemonType[] {
  return types.map((tipo) => tipo.type.name as PokemonType);
}
