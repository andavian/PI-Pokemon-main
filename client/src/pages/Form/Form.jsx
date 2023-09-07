import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import validateForm from "./validation.js";
import styles from "./form.module.css";
import TypesButtons from "../../components/TypesButtons/TypesButtons.jsx";

const Form = () => {
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: null,
    height: null,
    weight: null,
    types: [],
  });
  const [errors, setErrors] = useState({});
  const [check, setCheck] = useState(false);

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

  const handleCheck = () => {
    !check ? setCheck(true) : setCheck(false);
  };

  //Se crea un Objeto que matchee nombres de tipos con ids.
  const mappingTypes = {};
  let id = 1;

  pokemonTypes.forEach((type) => {
    mappingTypes[type.name] = id++;
  });
  console.log(mappingTypes);

  const toggleType = (type) => {
    const typeId = mappingTypes[type];
    console.log("id", typeId);

    if (typeId) {
      // Verifica si la ID del tipo es válida
      if (selectedTypes.includes(typeId)) {
        // Si la ID ya está seleccionada, quítala del arreglo
        setSelectedTypes(selectedTypes.filter((id) => id !== typeId));
      } else {
        // Si la ID no está seleccionada, agrégala al arreglo
        setSelectedTypes([...selectedTypes, typeId]);
      }
    }
  };

  //Crear un pokemon
  async function create(pokemonData) {
    try {
      const URL = "pokemons";
      await axios.post(URL, pokemonData);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  }

  //Modificar un pokemon
  async function update(pokemonData) {
    try {
      const URL = `pokemons/${pokemonData.name}`;
      await axios.put(URL, pokemonData);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPokemonData = {
      ...pokemonData,
      types: selectedTypes,
    };
    !check
      ? await create(updatedPokemonData)
      : await update(updatedPokemonData);
    setPokemonData({
      name: "",
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: null,
      height: null,
      weight: null,
      types: [],
    });
    setSelectedTypes([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <label className={styles.switch}>
          <input
            className={styles.inputCheck}
            type="checkbox"
            onClick={handleCheck}
          />
          <span className={styles.slider}></span>
        </label>
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
        <h3>Select types</h3>
        <TypesButtons onClick={toggleType} />
        {!errors ? <button>Submit</button> : <div></div>}
      </form>
    </div>
  );
};

export default Form;
