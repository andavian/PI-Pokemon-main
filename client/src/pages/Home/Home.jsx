import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemons, getTypes } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
//import styles from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const pokemonTypes = useSelector((state) => state.pokemonTypes);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <Cards pokemons={pokemons} types={pokemonTypes} />
    </div>
  );
};

export default Home;
