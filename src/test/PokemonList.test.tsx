import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Pokemon } from "../domain/models/Pokemon";
import { PokemonCard } from "../components/PokemonCard";
import * as getPokemonList from "../domain/services/getPokemonList";
import { PokemonList } from "../components/PokemonList";
import userEvent from "@testing-library/user-event";

describe("PokemonList", () => {
  it("muestra la lista de Pokemon", async () => {
    jest.spyOn(getPokemonList, "getPokemon").mockResolvedValue([
      {
        name: "pikachu",
        id: 25,
        types: ["electric"],
        height: 40,
        weight: 60,
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        description: "",
      },
      {
        name: "bulbasaur",
        id: 1,
        types: ["grass", "poison"],
        height: 30,
        weight: 70,
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        description: "",
      },
    ]);

    render(<PokemonList />);

    expect(await screen.findByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("#025")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Electric")).toBeInTheDocument();
    expect(screen.getByText("4 m")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("6 Kg")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("#001")).toBeInTheDocument();
    expect(screen.getByAltText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("Grass")).toBeInTheDocument();
    expect(screen.getByText("Poison")).toBeInTheDocument();
    expect(screen.getByText("3 m")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("7 Kg")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
  });
  it("filtra la lista de pokemon", async () => {
    jest.spyOn(getPokemonList, "getPokemon").mockResolvedValue([
      {
        name: "pikachu",
        id: 25,
        types: ["electric"],
        height: 40,
        weight: 60,
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        description: "",
      },
      {
        name: "bulbasaur",
        id: 1,
        types: ["grass", "poison"],
        height: 3,
        weight: 7,
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        description: "",
      },
    ]);

    render(<PokemonList />);

    const input = await screen.findByAltText("searchbar");
    userEvent.type(input, "Pika");

    expect(await screen.findByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("#025")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Electric")).toBeInTheDocument();
    expect(screen.getByText("4 m")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("6 Kg")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.queryByText("Bulbasaur")).not.toBeInTheDocument();
  });
});
