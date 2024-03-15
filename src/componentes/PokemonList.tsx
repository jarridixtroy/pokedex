import React, { useEffect, useState } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "../domain/services/api";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";
import { Pokemon } from "../domain/models/pokemon.model";
import { transform } from "../domain/services/transformData";

interface PropsList {
  className: string;
}
const PokemonList: React.FC<PropsList> = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonList();
      const detailsPromises = data.map((value: JSON, index: number) =>
        fetchPokemonDetails(index + 1)
      );

      // Esperar a que todas las llamadas asíncronas se completen
      const details = await Promise.all(detailsPromises);

      let listapokemon = details.map((item) => transform(item));

      setPokemonList(listapokemon);
      setFilteredPokemonList(listapokemon);
    };

    fetchData();
  }, []);

  const handleSearch = (term: string) => {
    let filteredList;

    filteredList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredPokemonList(filteredList);
  };

  return (
    <div>
      <hr />
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-list-container">
        {filteredPokemonList.map((pokemon, index) => (
          <PokemonCard className="pokemon-card" key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
