interface Details {
  name: string;
  id: number;
  types: PokemonType[];
  height: number;
  weight: number;
  sprite: string;
}

interface Card {
  detalles: Details;
}

type PokemonType =
  | "fire"
  | "water"
  | "grass"
  | "flying"
  | "electric"
  | "fighting"
  | "psychic"
  | "dark"
  | "ghost"
  | "dragon"
  | "fairy"
  | "bug"
  | "ground"
  | "ice"
  | "rock"
  | "normal"
  | "steel";

const PokemonCard: React.FC<Card> = ({ detalles }) => {
  const { name, id, types, height, weight, sprite } = detalles;
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
            <span className={`type ${tipo}`} key={tipo}>
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </span>
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

export default PokemonCard;