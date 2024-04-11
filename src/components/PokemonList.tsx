import React, { useEffect, useState } from "react";
import { getPokemons } from "../domain/services/getPokemons";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "./SearchBar";
import { Pokemon } from "../domain/models/Pokemon";

const CANTIDAD_MAX_POKEMON = 151;

export const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | undefined>(
    undefined
  );
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const listapokemon = await getPokemons(CANTIDAD_MAX_POKEMON);
      setPokemonList(listapokemon);
    };
    fetchData();
  }, []);

  const handleSearch = (term: string) => {
    console.log("filtrado");
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
