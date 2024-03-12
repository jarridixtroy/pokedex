import { Pokemon } from "../models/pokemon.model.ts";
import Tag from "./Tags.tsx";

const Card: React.FC<Pokemon> = (pokemon: Pokemon) => {
  const { name, id, types, height, weight, sprite } = pokemon;
  const typeClass = types[0];

  let ceros = null;
  if (id < 10) {
    ceros = "00";
  } else if (id < 100) {
    ceros = "0";
  }

  let propperName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={`pokemon-card ${typeClass}`}>
      <div className="col">
        <span text-align="center" className="poppins-bold">
          <h2>{propperName}</h2>
          <h4>
            {" "}
            #{ceros}
            {id}
          </h4>
        </span>

        <img src={sprite} alt={name} className="pokemon-image" />
        <br></br>
        <div className="details">
          <br></br>
          {types.map((tipo) => (
            <Tag tipo={tipo}></Tag>
          ))}

          <br></br>

          <p className={`poppins-bold ${typeClass}`} color={typeClass}>
            About
          </p>
          <div className="col" text-align="left">
            <span>
              <img
                src="./iconos/altura.png"
                width="10px"
                height="16px"
                alt=""
              />
              {height / 10} m <br /> Altura
            </span>
          </div>
          <div className="col" text-align="center">
            <span className="vl"></span>
          </div>
          <div className="col" align-self="right">
            <span>
              <img
                src="./iconos/pesopokemon.png"
                width="16px"
                height="16px"
                alt=""
              />
              {weight / 10} Kg <br /> Peso
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
