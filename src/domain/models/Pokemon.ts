import { PokemonType } from "./PokemonType";

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  sprite: string;
  description: string;
}
