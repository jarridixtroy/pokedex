import styled from "styled-components";
import { Pokemon } from "../domain/models/Pokemon.ts";
import Tag from "./Tags.tsx";
import pesoIcono from "../iconos/pesopokemon.png";
import alturaIcono from "../iconos/altura.png";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { name, id, types, height, weight, sprite, description } = pokemon;
  const typeClass = types[0];

  const get3DigitsName = () => {
    if (id < 10) return "#00" + id;

    if (id < 100) return "#0" + id;

    return "#" + id;
  };

  const propperName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={`pokemon-card ${typeClass}`}>
      <CardHeader>
        <Nombre>{propperName}</Nombre>
        <Id>{get3DigitsName()}</Id>
      </CardHeader>

      <Imagen src={sprite} alt={propperName} />

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
              <img src={pesoIcono} width="18px" height="20px" alt="peso" />
              {weight / 10} Kg
            </SeccionPesoAltura>
            <SeccionPesoAltura>Weight</SeccionPesoAltura>
          </PesoAltura>
          <section className="vl"></section>
          <PesoAltura>
            <SeccionPesoAltura>
              <img src={alturaIcono} width="8px" height="16px" alt="altura" />
              {height / 10} m
            </SeccionPesoAltura>
            <SeccionPesoAltura>Height</SeccionPesoAltura>
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
  font-family: "Poppins-bold", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 0px;
  height: auto;
  width: auto;
`;
const Id = styled.span`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 17px;
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
`;
const PesoAltura = styled.div`
  display: flex;
  flex-direction: column;
`;
const SeccionPesoAltura = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6px;
`;
const Imagen = styled.img`
  width: 150px;
  height: auto;
  position: relative;
`;
const Description = styled.p`
  margin: 0px;
  padding: 6px;
`;
export default PokemonCard;
