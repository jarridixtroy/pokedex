import "./App.css";
import { PokemonList } from "./components/PokemonList.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="./iconos/iconoPokeball.png"
          width="40px"
          height="40px"
          alt=""
        />
        <h2 className="App-header">Pokédex</h2>
      </header>
      <PokemonList />
    </div>
  );
}

export default App;
