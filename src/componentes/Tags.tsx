import { PokemonType } from "../domain/models/pokemonType.model";

interface TagsProps {
  tipo: PokemonType;
}
const Tags: React.FC<TagsProps> = ({ tipo }) => {
  const propperType = tipo.charAt(0).toUpperCase() + tipo.slice(1);
  return <span className={`tag ${tipo}`}>{propperType}</span>;
};
export default Tags;
