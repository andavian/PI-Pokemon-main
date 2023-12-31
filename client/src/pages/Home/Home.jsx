import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemons, getTypes } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import styles from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Home;
