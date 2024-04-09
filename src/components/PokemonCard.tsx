import styled from "styled-components";
import { Pokemon } from "../domain/models/Pokemon.ts";
import Tag from "./Tags.tsx";
import pesoIcono from "../iconos/pesopokemon.png";
import alturaIcono from "../iconos/altura.png";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { name, id, types, height, weight, sprite, description } = pokemon;
  const [typeClass] = types;

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const formattedId = `#${id.toString().padStart(3, "0")}`;

  return (
    <div className={`pokemon-card ${typeClass}`}>
      <CardHeader>
        <Nombre>{formattedName}</Nombre>
        <Id>{formattedId}</Id>
      </CardHeader>

      <Imagen src={sprite} alt={formattedName} />

      <div className="card__details">
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
      </div>
    </div>
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
const About = styled.section`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
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
