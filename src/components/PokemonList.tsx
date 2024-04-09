import React, { useEffect, useState } from "react";
import { getPokemon } from "../domain/services/getPokemonList";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "./SearchBar";
import { Pokemon } from "../domain/models/Pokemon";

const CANTIDAD_MAX_POKEMON = 493;

export const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | undefined>(
    undefined
  );
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const listapokemon = await getPokemon(CANTIDAD_MAX_POKEMON);
      setPokemonList(listapokemon);
    };
    fetchData();
  }, []);

  const handleSearch = (term: string) => {
    setTerm(term);
  };

  if (pokemonList === undefined) {
    return <div>Cargando...</div>;
  }

  const filteredPokemonList = pokemonList.filter((pokemon) => {
    return pokemon.name.toLocaleLowerCase().includes(term.toLowerCase());
  });

  return (
    <div>
      <hr />
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-list-container">
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
