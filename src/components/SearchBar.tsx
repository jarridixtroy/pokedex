import React, { ChangeEvent, useState } from "react";
import { act } from "react-dom/test-utils";
import styled from "styled-components";
import busquedaIcono from "../iconos/busquedaIcono.png";
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
      value={searchTerm}
      onChange={handleSearch}
      className="search-bar"
    ></Barra>
  );
};

export default SearchBar;

const Barra = styled.input`
  width: 40%;
  padding-left: 30px;
  margin: 0 auto; /* Centra el elemento horizontalmente */
  display: block;
  border-width: 2px;
  height: 20px;
  border-radius: 10px;
  background-image: url(${busquedaIcono});
  background-size: 20px;
  background-position: left 10px center;
  background-repeat: no-repeat;
  padding-right: 30px;
`;
