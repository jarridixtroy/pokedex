import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Pokemon } from "../domain/models/Pokemon";
import { PokemonCard } from "../components/PokemonCard";
import { getPokemonList } from "../domain/services/getPokemonList";
import { getPokemonDetails } from "../domain/services/getPokemonDetails";
import { transform } from "../domain/factories/buildPokemon";
import PokemonDTO from "../domain/dto/pokemonDTO";

// Mockeo de las funciones para conseguir la lista de pokemon y los detalles de cada uno
jest.mock("../domain/services/getPokemonList", () => ({
  getPokemon: jest.fn().mockResolvedValue([
    { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
    { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  ]),
}));
jest.mock("../domain/services/getPokemonDetails", () => ({
  getPokeDetails: jest.fn(),
}));
describe("PokemonList", () => {
  it("muestra la lista de Pokemon", async () => {
    const pokemones = await getPokemonList();
    const detailsPromises = pokemones.map(
      async (_value: JSON, index: number) => {
        const pokemonDTO = await getPokemonDetails(index + 1);
        return transform(pokemonDTO);
      }
    );
    const listapokemon: Pokemon[] = await Promise.all(detailsPromises);

    listapokemon.map((pokemon, index) =>
      render(<PokemonCard key={index} pokemon={pokemon} />)
    );

    expect(await screen.findByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });
});
