import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importar para tener acceso a los matchers de Jest

import { PokemonCard } from "../components/PokemonCard";
import { Pokemon } from "../domain/models/Pokemon";
import { PokemonType } from "../domain/models/PokemonType";

describe("La PokemonCard", () => {
  it("muestra los detalles del pokemon", () => {
    const mockType: PokemonType = "electric";
    const mockPokemon: Pokemon = {
      name: "pikachu",
      id: 25,
      types: [mockType],
      height: 40,
      weight: 60,
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      description: "",
    };

    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("#025")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Electric")).toBeInTheDocument();
    expect(screen.getByText("4 m")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("6 Kg")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
  });
});
