import { Link } from "react-router-dom";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import styles from "./card.module.css";

const Card = ({ pokemon, types }) => {
  return (
    <Link to={`/detail/${pokemon.id}`}>
      <article className={styles.container}>
        <PokemonTypes pokemon={pokemon} types={types} />
        <img src={pokemon.image} alt={pokemon.name} width="200" />
        <h2>{pokemon.name.toUpperCase()}</h2>
      </article>
    </Link>
  );
};

export default Card;
