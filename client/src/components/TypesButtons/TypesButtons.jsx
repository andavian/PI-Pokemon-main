import { useSelector } from "react-redux";

const TypesButtons = ({ onClick }) => {
  const pokemonTypes = useSelector((state) => state.pokemonTypes);

  const typesButton = pokemonTypes.map((type) => (
    <button
      key={type.id}
      type="button"
      title={type.name}
      onClick={() => onClick(type.name)}
    >
      <img src={type.image} alt={type.name} width="40" />
    </button>
  ));
  return typesButton;
};

export default TypesButtons;
