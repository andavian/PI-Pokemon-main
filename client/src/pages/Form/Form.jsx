import { useState } from "react";
import validateForm from "./validation.js";
import styles from "./form.module.css";

const Form = () => {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: null,
    height: null,
    weight: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemonData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(
      validateForm({
        ...pokemonData,
        [name]: value,
      })
    );
  };

  return (
    <div>
      <form className={styles.container}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          className={styles.input}
          value={pokemonData.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span>
        <label>Image</label>
        <input
          name="image"
          type="text"
          className={styles.input}
          value={pokemonData.image}
          onChange={handleChange}
        />
        <span>{errors.image}</span>
        <label>HP</label>
        <input
          type="number"
          min="0"
          step="1"
          name="hp"
          className={styles.input}
          value={pokemonData.hp}
          onChange={handleChange}
        />
        <span>{errors.hp}</span>
        <label>Attack</label>
        <input
          type="number"
          min="0"
          step="1"
          name="attack"
          className={styles.input}
          value={pokemonData.attack}
          onChange={handleChange}
        />
        <span>{errors.attack}</span>
        <label>Defense</label>
        <input
          type="number"
          min="0"
          step="1"
          name="defense"
          className={styles.input}
          value={pokemonData.defense}
          onChange={handleChange}
        />
        <span>{errors.defense}</span>
        <label>Speed</label>
        <input
          name="speed"
          type="text"
          className={styles.input}
          value={pokemonData.speed}
          onChange={handleChange}
        />
        <span>{errors.speed}</span>
        <label>Height</label>
        <input
          name="height"
          type="text"
          className={styles.input}
          value={pokemonData.height}
          onChange={handleChange}
        />
        <span>{errors.height}</span>
        <label>Weight</label>
        <input
          name="weight"
          type="text"
          className={styles.input}
          value={pokemonData.weight}
          onChange={handleChange}
        />
        <span>{errors.weight}</span>
      </form>
    </div>
  );
};

export default Form;
