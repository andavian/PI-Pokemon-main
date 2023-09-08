import { useSelector } from "react-redux";
import styles from "./typesButtons.module.css";

const TypesButtons = ({ onClick }) => {
  const pokemonTypes = useSelector((state) => state.pokemonTypes);

  const typesButton = pokemonTypes.map((type) => (
    <button
      className={styles.item}
      key={type.name}
      type="button"
      title={type.name}
      onClick={() => onClick(type.name)}
    >
      <img src={type.image} alt={type.name} width="35" />
    </button>
  ));
  return <div className={styles.container}>{typesButton}</div>;
};

export default TypesButtons;
