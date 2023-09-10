import { useSelector, useDispatch } from "react-redux";
import {
  filterCardsById,
  filterCardsByType,
  orderCards,
  setCurrentPage,
} from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./cards.module.css";
import SideBar from "../SideBar/SideBar";
import Pagination from "../Pagination/Pagination";

const Cards = () => {
  const dispatch = useDispatch();
  const {
    allPokemons,
    myPokemons,
    pokemonTypes,
    currentPage,
    itemsPerPage,
    filtering,
  } = useSelector((state) => state);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const paginatedItems = allPokemons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginatedFilter = myPokemons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterById = (event) => {
    dispatch(filterCardsById(event.target.value));
    handlePageChange(1);
  };

  const handleFilterByType = (type) => {
    dispatch(filterCardsByType(type));
    handlePageChange(1);
  };

  const listAllPokemons = paginatedItems.map((pokemon) => (
    <li className={styles.item} key={pokemon.id}>
      <Card pokemon={pokemon} types={pokemonTypes} />
    </li>
  ));

  const listMyPokemons = paginatedFilter.map((pokemon) => (
    <li className={styles.item} key={pokemon.id}>
      <Card pokemon={pokemon} types={pokemonTypes} />
    </li>
  ));

  return (
    <div className={styles.container}>
      <SideBar
        className={styles.sidebar}
        handleFilterById={handleFilterById}
        handleFilterByType={handleFilterByType}
        handleOrder={handleOrder}
      />
      <main>
        <Pagination
          className={styles.pagination}
          handlePageChange={handlePageChange}
        />
        <ul className={styles.content}>
          {!filtering ? listAllPokemons : listMyPokemons}
        </ul>
        <Pagination
          className={styles.pagination}
          handlePageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default Cards;
