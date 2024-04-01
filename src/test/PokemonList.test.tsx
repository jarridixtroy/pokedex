import React from "react";
import { render,  screen,  } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokemonCard from "../componentes/PokemonCard";
import { Pokemon } from "../domain/models/pokemon.model";

describe("PokemonList", () => {
  jest.mock("../domain/services/api");

  test("muestra la lista de Pokemon", async () => {
    const mockPokemonList: Pokemon[] = [
      {
        name: "Pikachu",
        id: 25,
        types: ["electric"],
        height: 40,
        weight: 60,
        sprite: "https://example.com/pikachu.png",
        description: ""
      },
      {
        name: "Bulbasaur",
        id: 1,
        types: ["grass"],
        height: 70,
        weight: 69,
        sprite: "https://example.com/bulbasaur.png",
        description:""
      },
    ];

    // Verificar que se muestran los Pokémon en la lista
    render(<div className="pokemon-list-container">
    {mockPokemonList.map((pokemon, index) => (
      <PokemonCard key={index} pokemon={pokemon} />
    ))}
  </div>)

    expect(await screen.findByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });
});
