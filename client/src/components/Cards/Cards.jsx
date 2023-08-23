import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterCardsById,
  filterCardsByType,
  orderCards,
} from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./cards.module.css";

const Cards = () => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const myPokemons = useSelector((state) => state.myPokemons);
  const pokemonTypes = useSelector((state) => state.pokemonTypes);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilterById = (event) => {
    dispatch(filterCardsById(event.target.value));
    setAux(true);
  };

  const handleFilterByType = (value) => {
    dispatch(filterCardsByType(value));
    setAux(true);
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  }
  const typesNames = pokemonTypes.map((type) => (
    <option key={type.id} value={type.name}>
      <img
        src={
          //capitalizeFirstLetter(type.name)
          type.image
        }
        alt={type.name}
        width="40"
      />
    </option>
  ));

  const listAllPokemons = allPokemons.map((pokemon) => (
    <li className={styles.item} key={pokemon.id}>
      <Card pokemon={pokemon} types={pokemonTypes} />
    </li>
  ));

  const listMyPokemons = myPokemons.map((pokemon) => (
    <li className={styles.item} key={pokemon.id}>
      <Card pokemon={pokemon} types={pokemonTypes} />
    </li>
  ));

  return (
    <>
      <section>
        <span>Filter by Type</span>
        <button onClick={() => handleFilterByType("All")}>All</button>
        {typesNames.map((type) => (
          <button
            key={type.props.value}
            title={type.props.value}
            onClick={() => handleFilterByType(type.props.value)}
          >
            {type.props.children}
          </button>
        ))}
        <span>Filter by Origin</span>
        <select onChange={handleFilterById} className={styles.input}>
          <option value="All">All</option>
          <option value="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx">Database</option>
          <option value="API">API REST</option>
        </select>
        <span>Order by</span>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
          <option value="HA">Highest Attack</option>
          <option value="LA">Lowest Attack</option>
        </select>
      </section>

      <ul className={styles.unorderedList}>
        {!aux ? [listAllPokemons] : [listMyPokemons]}
      </ul>
    </>
  );
};

export default Cards;
