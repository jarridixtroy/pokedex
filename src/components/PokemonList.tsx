import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../domain/services/getPokemonDetails";
import {
  getPokemonList,
  getPokemonListV2,
} from "../domain/services/getPokemonList";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";
import { Pokemon } from "../domain/models/Pokemon";
import { transform } from "../domain/factories/buildPokemon";
import { act } from "react-dom/test-utils";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const listapokemonV2 = await getPokemonListV2(400);

      setPokemonList(listapokemonV2);

      setFilteredPokemonList(listapokemonV2);
    };

    fetchData();
  }, []);

  const handleSearch = (term: string) => {
    let filteredList: Pokemon[];

    filteredList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );

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

export default PokemonList;
