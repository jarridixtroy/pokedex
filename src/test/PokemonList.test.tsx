import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PokemonList from "../componentes/PokemonList";
import userEvent from "@testing-library/user-event";

describe("PokemonList", () => {
  jest.mock("../domain/services/api");

  test("muestra la lista de Pokemon", async () => {
    const mockPokemonList = [
      {
        name: "Pikachu",
        id: 25,
        types: ["electric"],
        height: 40,
        weight: 60,
        sprite: "https://example.com/pikachu.png",
      },
      {
        name: "Bulbasaur",
        id: 1,
        types: ["grass"],
        height: 70,
        weight: 69,
        sprite: "https://example.com/bulbasaur.png",
      },
    ];

    // Verificar que se muestran los Pokémon en la lista

    expect(await screen.findByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });
});
