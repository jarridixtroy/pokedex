import { PokemonType } from "../domain/models/pokemonType.model";
import "./Tags.css";

interface TagsProps {
  tipo: PokemonType;
}
const Tags: React.FC<TagsProps> = ({ tipo }) => {
  return <p className={`tag ${tipo}`}>{tipo}</p>;
};
export default Tags;
