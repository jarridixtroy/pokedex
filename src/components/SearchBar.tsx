import React, { ChangeEvent } from "react";
import styled from "styled-components";
import busquedaIcono from "../iconos/busquedaIcono.png";
interface SearchBarProp {
  onSearch: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProp> = ({ onSearch }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    onSearch(term);
  };

  return <Barra type="text" onChange={handleSearch}></Barra>;
};

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
