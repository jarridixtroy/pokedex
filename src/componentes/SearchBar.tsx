// SearchBar.js
import React, { ChangeEvent, useState } from "react";
import { act } from "react-dom/test-utils";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    act(() => {
      setSearchTerm(term);
    });

    onSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Buscar Pokémon por nombre"
      value={searchTerm}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
