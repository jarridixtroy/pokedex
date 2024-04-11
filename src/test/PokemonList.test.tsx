import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as getPokemonList from "../domain/services/getPokemons";
import { PokemonList } from "../components/PokemonList";
import userEvent from "@testing-library/user-event";

describe("PokemonList", () => {
  it("muestra la lista de Pokemon", async () => {
    jest.spyOn(getPokemonList, "getPokemons").mockResolvedValue([
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
    ]);

    render(<PokemonList />);

    expect(await screen.findByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("#025")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Electric")).toBeInTheDocument();
    expect(screen.getByText("4 m")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("6 Kg")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
  });

  it("filtra la lista de pokemon", async () => {
    jest.spyOn(getPokemonList, "getPokemons").mockResolvedValue([
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
    expect(screen.queryByText("Bulbasaur")).not.toBeInTheDocument();
  });
});
