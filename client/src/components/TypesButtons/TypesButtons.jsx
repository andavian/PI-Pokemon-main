import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./typesButtons.module.css";

const TypesButtons = ({ onClick }) => {
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeClick = (type) => {
    // Verifica si el tipo ya está seleccionado
    if (selectedTypes.includes(type)) {
      // Si está seleccionado, quítalo de la lista
      setSelectedTypes(
        selectedTypes.filter((selectedType) => selectedType !== type)
      );
    } else {
      // Si no está seleccionado, agrégalo a la lista
      setSelectedTypes([...selectedTypes, type]);
    }

    if (typeof onClick === "function") {
      onClick(type);
    }
  };

  const typesButton = pokemonTypes.map((type) => (
    <button
      className={`${styles.item} ${
        selectedTypes.includes(type.name) ? styles.active : ""
      }`}
      key={type.name}
      type="button"
      title={type.name}
      onClick={() => handleTypeClick(type.name)}
    >
      <img src={type.image} alt={type.name} width="35" />
    </button>
  ));
  return <div className={styles.container}>{typesButton}</div>;
};

export default TypesButtons;
