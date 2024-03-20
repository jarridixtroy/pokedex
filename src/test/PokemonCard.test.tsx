import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importar para tener acceso a los matchers de Jest

import PokemonCard from "../componentes/PokemonCard";
import { Pokemon } from "../domain/models/pokemon.model";
import { PokemonType } from "../domain/models/pokemonType.model";

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
    };

    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("#025")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("electric")).toBeInTheDocument();
    expect(screen.getByText("4 m Altura")).toBeInTheDocument();
    expect(screen.getByText("6 Kg Peso")).toBeInTheDocument();
  });
});
