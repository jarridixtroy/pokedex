import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../domain/services/getPokemonDetails";
import { getPokemonList } from "../domain/services/getPokemonList";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";
import { Pokemon } from "../domain/models/pokemon.model";
import { transform } from "../domain/services/transformData";
import { act } from "react-dom/test-utils";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      const detailsPromises = data.map((value: JSON, index: number) =>
        getPokemonDetails(index + 1)
      );

      // Esperar a que todas las llamadas asíncronas se completen
      const details = await Promise.all(detailsPromises);

      let listapokemon = details.map((item) => transform(item));

      setPokemonList(listapokemon);
      act(() => {
        setFilteredPokemonList(listapokemon);
      });
    };

    fetchData();
  }, []);

  const handleSearch = (term: string) => {
    let filteredList: Pokemon[];

    filteredList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    act(() => {
      setFilteredPokemonList(filteredList);
    });
  };

  return (
    <div>
      <hr />
      <SearchBar className="search-bar" onSearch={handleSearch} />
      <div className="pokemon-list-container">
        {filteredPokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
