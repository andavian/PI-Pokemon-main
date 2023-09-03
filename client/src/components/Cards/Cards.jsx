import { useState } from "react";
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
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const { allPokemons, myPokemons, pokemonTypes, currentPage, itemsPerPage } =
    useSelector((state) => state);

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
    setAux(true);
  };

  const handleFilterById = (event) => {
    dispatch(filterCardsById(event.target.value));
    setAux(true);
  };

  const handleFilterByType = (type) => {
    dispatch(filterCardsByType(type));
    handlePageChange(1);
    setAux(true);
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
        <ul className={styles.content}>
          {!aux ? listAllPokemons : listMyPokemons}
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
