import React, { useEffect, useState } from "react";
import { getPokemon } from "../domain/services/getPokemonList";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "./SearchBar";
import { Pokemon } from "../domain/models/Pokemon";

const CANTIDAD_MAX_POKEMON = 150;

export const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const listapokemon = await getPokemon(CANTIDAD_MAX_POKEMON);
      setPokemonList(listapokemon);
      setFilteredPokemonList(listapokemon);
    };
    fetchData();
  }, []);

  const handleSearch = (term: string) => {
    let filteredList = pokemonList.filter((pokemon) => {
      pokemon.name.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredPokemonList(filteredList);
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
