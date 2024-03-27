// SearchBar.js
import React, { ChangeEvent, useState } from "react";
import { act } from "react-dom/test-utils";
import styled from "styled-components";
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
    <Barra
      type="text"
      placeholder="Buscar Pokémon por nombre"
      value={searchTerm}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;

const Barra = styled.input`
  width: 40%;
  padding: 8px;
  margin: 0 auto; /* Centra el elemento horizontalmente */
  display: block;
  border-radius: 10px;
`;
