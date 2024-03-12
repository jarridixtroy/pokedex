import { PokemonType } from "./pokemonType.model";

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  sprite: string;
}
