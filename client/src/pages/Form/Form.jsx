import { useState } from "react";
import axios from "axios";
import validateForm from "./validation.js";
import styles from "./form.module.css";
import TypesButtons from "../../components/TypesButtons/TypesButtons.jsx";

const Form = () => {
  //const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const [selectedTypes, setSelectedTypes] = useState([
    { name: "tipo1" },
    { name: "tipo2" },
  ]);
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

  const toggleType = (type) => {
    console.log("Tipo seleccionado:", type);
    // Copia el arreglo de tipos actual
    const updatedSelectedTypes = [...selectedTypes];

    // Busca si el tipo ya está seleccionado
    const index = updatedSelectedTypes.findIndex(
      (selectedType) => selectedType.name === type
    );

    if (index !== -1) {
      // Si el tipo ya está seleccionado, quítalo del arreglo
      updatedSelectedTypes.splice(index, 1);
    } else {
      // Si el tipo no está seleccionado, agrégalo al arreglo
      if (updatedSelectedTypes.length < 2) {
        updatedSelectedTypes.push({ name: type });
      }
    }

    // Actualiza el estado con el arreglo de tipos actualizado
    setSelectedTypes(updatedSelectedTypes);
  };

  async function create(pokemonData) {
    try {
      const URL = "pokemons";
      await axios.post(URL, pokemonData);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPokemonData = {
      ...pokemonData,
      types: selectedTypes.map((typeObj) => ({ name: typeObj.name })),
    };
    await create(updatedPokemonData);
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
    setSelectedTypes([{ name: "" }, { name: "" }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
