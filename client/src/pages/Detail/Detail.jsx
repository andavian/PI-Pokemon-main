import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios(`pokemons/${id}`);

        if (data.name) {
          setPokemon(data);
        } else {
          setPokemon(null);
        }
      } catch (error) {
        alert("Error al obtener el personaje:", error);
        setPokemon(null);
      }
    };
    fetchPokemon();
  }, [id]);

  const typeName = pokemon?.types.map((type) => {
    const { name } = type;
    return name;
  });

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  }

  if (!pokemon) {
    return (
      <div>
        <h2>Cargando</h2>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img
            className={styles.cardImg}
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>
        <h2 className={styles.cardId}>Id {pokemon.id}</h2>

        <h2 className={styles.cardName}>
          {capitalizeFirstLetter(pokemon.name)}
        </h2>
        <div className={styles.cardTypes}>
          {" "}
          <span>{typeName[0]}</span>
          <span>{typeName[1]}</span>
          <span>{typeName[2]}</span>
        </div>
        <div className={styles.cardStats}>
          <div className={styles.oneThird}>
            <div className={styles.stats}>{pokemon.hp}</div>
            <div className={styles.statValue}>HP</div>
          </div>
          <div className={styles.oneThird}>
            <div className={styles.stats}>{pokemon.attack}</div>
            <div className={styles.statValue}>Attack</div>
          </div>
          <div className={`${styles.oneThird} ${styles.noBorder}`}>
            <div className={styles.stats}>{pokemon.defense}</div>
            <div className={styles.statValue}>Defense</div>
          </div>
          <div className={styles.oneThird}>
            <div className={styles.stats}>{pokemon.speed}</div>
            <div className={styles.statValue}>Speed</div>
          </div>
          <div className={styles.oneThird}>
            <div className={styles.stats}>{pokemon.height}</div>
            <div className={styles.statValue}>Height</div>
          </div>
          <div className={`${styles.oneThird} ${styles.noBorder}`}>
            <div className={styles.stats}>{pokemon.weight}</div>
            <div className={styles.statValue}>Weight</div>
          </div>

          <Link to="/home">
            {" "}
            <button type="button" className={styles.btn}>
              🢀
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
