import { Link } from "react-router-dom";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import styles from "./card.module.css";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}

const Card = ({ pokemon, types }) => {
  return (
    <Link to={`/detail/${pokemon.id}`}>
      <article className={styles.container}>
        <PokemonTypes pokemon={pokemon} types={types} />
        <img src={pokemon.image} alt={pokemon.name} width="200" />
        <h2> {capitalizeFirstLetter(pokemon.name)}</h2>
      </article>
    </Link>
  );
};

export default Card;
