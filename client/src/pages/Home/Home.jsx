import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemons, getTypes } from "../../redux/actions";
import Card from "../../components/Card/Card";
import styles from "./home.module.css";
import PokemonTypes from "../../components/PokemonTypes/PokemonTypes";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  console.log("state", pokemons);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <section className={styles.sectionCards}>
        {pokemons.map((pokemon) => (
          <Card
            className={styles.item}
            key={pokemon.id}
            pokemon={pokemon}
            types={pokemonTypes}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
