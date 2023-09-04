import { Link } from "react-router-dom";
import PokemonTypes from "../PokemonTypes/PokemonTypes";
import styles from "./card.module.css";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}

const Card = ({ pokemon, types }) => {
  return (
    <Link to={`/detail/${pokemon.id}`}>
      <article className={styles.card}>
        <div className={styles.wrapper}>
          <img src={pokemon.image} alt={pokemon.name} width="200" />
        </div>

        <h2 className={styles.title}> {capitalizeFirstLetter(pokemon.name)}</h2>

        <img
          className={styles.character}
          src={pokemon.image2}
          alt={pokemon.name}
          width="200"
        />
        <div className={styles.type}>
          <PokemonTypes pokemon={pokemon} types={types} />
        </div>
      </article>
    </Link>
  );
};

export default Card;
