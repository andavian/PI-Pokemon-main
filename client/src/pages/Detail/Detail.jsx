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
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Id: {pokemon.id}</h2>
        <div className={styles.topSection}>
          <img
            className={styles.topSection}
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>

        <h2 className={styles.title}>{capitalizeFirstLetter(pokemon.name)}</h2>

        <h3>HP: {pokemon.hp}</h3>
        <h3>Attack: {pokemon.attack}</h3>
        <h3>Defense: {pokemon.defense}</h3>
        <h3>Speed: {pokemon.speed}</h3>
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
        <h3>Type:</h3>
        <p>{typeName[0]}</p>
        <p>{typeName[1]}</p>
        <p>{typeName[2]}</p>
        <Link to="/home">
          {" "}
          <button type="button" className={styles.flecha}>
            🢀
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
