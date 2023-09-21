import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import validateForm from "./validation.js";
import styles from "./form.module.css";
import TypesButtons from "../../components/TypesButtons/TypesButtons.jsx";
import {
  createPokemon,
  deletePokemonAction,
  updatePokemonByName,
} from "../../redux/actions.js";

const Form = () => {
  const dispatch = useDispatch();
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [errors, setErrors] = useState({});
  const [deleted, setDeleted] = useState(false);
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemonData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(
      validateForm(
        {
          ...pokemonData,
          [name]: value,
        },
        selectedTypes
      )
    );
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleDelete = () => {
    setDeleted(!deleted);
  };

  //Se crea un Objeto que matchee nombres de tipos con ids.
  const mappingTypes = {};
  let id = 1;

  pokemonTypes.forEach((type) => {
    mappingTypes[type.name] = id++;
  });

  const toggleType = (type) => {
    const typeId = mappingTypes[type];

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
  const create = async (pokemonData) => {
    try {
      const URL = "pokemons";
      await axios.post(URL, pokemonData);
      dispatch(createPokemon(pokemonData));
      alert("pokemon successfully created");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  //Modificar un pokemon
  const update = async (pokemonData) => {
    try {
      const URL = `pokemons/${pokemonData.name}`;
      await axios.put(URL, pokemonData);
      dispatch(updatePokemonByName);
      alert("pokemon successfully updated");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  //borrar un pokemon
  const deletePokemon = async (pokemonData) => {
    try {
      const URL = `pokemons/delete?name=${pokemonData.name}`;
      await axios.delete(URL);
      dispatch(deletePokemonAction);
      alert("pokemon successfully deleted");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

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
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    setSelectedTypes([]);
  };

  const handleSubmitDel = async (event) => {
    event.preventDefault();
    await deletePokemon(pokemonData);
  };

  return (
    <div className={styles.supraContainer}>
      <div className={styles.checkboxLabelDel}>
        <label className={styles.switch}>
          <input
            className={styles.inputCheckDel}
            type="checkbox"
            onClick={handleDelete}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div>
        {deleted ? (
          <form onSubmit={handleSubmitDel} className={styles.containerDel}>
            <div className={styles.inputLabel}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className={styles.input}
                value={pokemonData.name}
                onChange={handleChange}
              />
              <span>{errors.name}</span>
            </div>
            {pokemonData.name ? (
              <button className={styles.btn}>Delete</button>
            ) : (
              <div></div>
            )}
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={!check ? styles.container : styles.containerUp}
          >
            <div className={styles.containerGrid}>
              <div className={styles.checkboxLabel}>
                <label className={styles.switch}>
                  <input
                    className={styles.inputCheck}
                    type="checkbox"
                    onClick={handleCheck}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.inputLabel}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  value={pokemonData.name}
                  onChange={handleChange}
                />

                <span>{errors.name}</span>
              </div>
              <div className={styles.inputLabel}>
                <input
                  name="image"
                  type="text"
                  placeholder="image"
                  className={styles.input}
                  value={pokemonData.image}
                  onChange={handleChange}
                />
                <span>{errors.image}</span>
              </div>
              <div>
                <input
                  type="text"
                  name="hp"
                  placeholder="HP"
                  className={styles.smallInput}
                  value={pokemonData.hp}
                  onChange={handleChange}
                />
                <span>{errors.hp}</span>
              </div>
              <div>
                <input
                  type="text"
                  name="attack"
                  placeholder="Attack"
                  className={styles.smallInput}
                  value={pokemonData.attack}
                  onChange={handleChange}
                />
                <span>{errors.attack}</span>
              </div>
              <div>
                <input
                  type="text"
                  name="defense"
                  placeholder="Defense"
                  className={styles.smallInput}
                  value={pokemonData.defense}
                  onChange={handleChange}
                />
                <span>{errors.defense}</span>
              </div>
              <div>
                <input
                  name="speed"
                  type="text"
                  placeholder="Speed"
                  className={styles.smallInput}
                  value={pokemonData.speed}
                  onChange={handleChange}
                />
                <span>{errors.speed}</span>
              </div>
              <div>
                <input
                  name="height"
                  type="text"
                  placeholder="Height"
                  className={styles.smallInput}
                  value={pokemonData.height}
                  onChange={handleChange}
                />
                <span>{errors.height}</span>
              </div>
              <div>
                <input
                  name="weight"
                  type="text"
                  placeholder="Weight"
                  className={styles.smallInput}
                  value={pokemonData.weight}
                  onChange={handleChange}
                />
                <span>{errors.weight}</span>
              </div>
            </div>
            <div className={styles.typeLabel}>
              <h3>Select types</h3>
              <TypesButtons onClick={toggleType} />
            </div>
            {Object.keys(errors).length === 0 && pokemonData.name ? (
              <button className={styles.btn}>Submit</button>
            ) : (
              <div></div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
