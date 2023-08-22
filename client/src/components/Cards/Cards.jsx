import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./cards.module.css";

const Cards = ({ pokemons, types }) => {
  const dispatch = useDispatch();

  return (
    <section className={styles.sectionCards}>
      {pokemons.map((pokemon) => (
        <Card
          className={styles.item}
          key={pokemon.id}
          pokemon={pokemon}
          types={types}
        />
      ))}
    </section>
  );
};

export default Cards;
