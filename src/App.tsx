import "./App.css";
import PokemonList from "./componentes/PokemonList.tsx";
import "./componentes/PokemonList.css";
//import PokemonList from "./componentes/PokemonList.tsx";
//import PokemonCard from "./componentes/PokemonCard.tsx";

function App() {
  return (
    <div className="App">
      <PokemonList className="pokemon-list-container"></PokemonList>
    </div>
  );
}

export default App;
