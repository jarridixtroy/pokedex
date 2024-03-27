import "./App.css";
import PokemonList from "./componentes/PokemonList.tsx";

import ExPokemon from "./componentes/ejemploPokemon.tsx";

function App() {
  return (
    <div className="App">
      <h1>
        <img
          src="./iconos/iconoPokeball.png"
          width="20px"
          height="20px"
          alt=""
        />{" "}
        Pokédex
      </h1>
      <PokemonList></PokemonList>
    </div>
  );
}

export default App;
