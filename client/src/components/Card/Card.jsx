import PokemonTypes from "../PokemonTypes/PokemonTypes";
import styles from "./card.module.css";

const Card = ({ pokemon, types }) => {
  return (
    <article className={styles.container}>
      <img src={pokemon.image} alt={pokemon.name} width="100" />
      <h2>{pokemon.name.toUpperCase()}</h2>
      <PokemonTypes pokemon={pokemon} types={types} />
    </article>
  );
};

export default Card;
