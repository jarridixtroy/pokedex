import styled from "styled-components";
import { Pokemon } from "../domain/models/Pokemon.ts";
import Tag from "./Tags.tsx";
import pesoIcono from "../iconos/pesopokemon.png";
import alturaIcono from "../iconos/altura.png";
import { PokemonType } from "../domain/models/PokemonType.ts";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { name, id, types, height, weight, sprite, description } = pokemon;
  const [typeClass] = types;

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const formattedId = `#${id.toString().padStart(3, "0")}`;

  const getColorTheme = () => {
    switch (typeClass) {
      case "fire":
        return "#ffa200";
      case "water":
        return "#2196f3";
      case "grass":
        return "#74cb48";
      case "flying":
        return "#a891ec";
      case "electric":
        return "#ffde0a";
      case "ice":
        return "#9ad6df";
      case "psychic":
        return "#fb5584";
      case "fighting":
        return "#c12239";
      case "ground":
        return "#dec16b";
      case "rock":
        return "#b69e31";
      case "fairy":
        return "#e69eac";
      case "dragon":
        return "#7037ff";
      case "steel":
        return "#b7b9d0";
      case "bug":
        return "#a7b723";
      case "dark":
        return "#75574c";
      case "normal":
        return "#aaa67f";
      case "poison":
        return "#a43e9e";
      case "ghost":
        return "#70559b";
      default:
        return "gray";
    }
  };

  const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px; /* Bordes redondeados */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    width: 320px;
    padding: 6px;
    padding-top: 10px;
    margin-bottom: 30px;
    color: white;
    background-color: ${getColorTheme()};
  `;

  const About = styled.section`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: ${getColorTheme()};
  `;

  return (
    <Card>
      <CardHeader>
        <Nombre>{formattedName}</Nombre>
        <Id>{formattedId}</Id>
      </CardHeader>

      <Imagen src={sprite} alt={formattedName} />

      <CardDetails>
        <Tipos>
          {types.map((tipo, index) => (
            <Tag key={index} tipo={tipo}></Tag>
          ))}
        </Tipos>
        <About className={`about-${typeClass}`}>About</About>
        <Size>
          <PesoAltura>
            <SeccionPesoAltura>
              <img src={pesoIcono} width="20px" height="20px" alt="peso" />
              {weight / 10} Kg
            </SeccionPesoAltura>
            <HeightWeight>Weight</HeightWeight>
          </PesoAltura>
          <section className="vl"></section>
          <PesoAltura>
            <SeccionPesoAltura>
              <img src={alturaIcono} width="8px" height="16px" alt="altura" />
              {height / 10} m
            </SeccionPesoAltura>
            <HeightWeight>Height</HeightWeight>
          </PesoAltura>
        </Size>
        <Description>{description}</Description>
      </CardDetails>
    </Card>
  );
};

const Nombre = styled.h2`
  display: flex;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  margin: 0px;
  height: auto;
  width: auto;
`;
const Id = styled.span`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 12px;
`;

const Tipos = styled.div`
  font-family: "Poppins-bold", sans-serif;
  font-weight: 700;
  padding: 4px;
  width: auto;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  align-content: center;
`;

const Size = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
const PesoAltura = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: auto;
`;
const SeccionPesoAltura = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6px;
  width: auto;
`;
const Imagen = styled.img`
  width: 150px;
  height: auto;
  position: relative;
`;
const HeightWeight = styled.span`
  font-family: Poppins;
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  color: #666666;
`;
const Description = styled.p`
  margin: 0px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: justify;
  width: auto;
  height: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: space-evenly;
  border-radius: 8px;
  border-color: white;
  width: 100%;
  height: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;
