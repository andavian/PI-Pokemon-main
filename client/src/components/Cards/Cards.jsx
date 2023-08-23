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
import LateralBar from "../LateralBar/LateralBar";

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

  const handleFilterByType = (value) => {
    dispatch(filterCardsByType(value));
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
    <>
      <LateralBar
        types={pokemonTypes}
        handleFilterById={handleFilterById}
        handleFilterByType={handleFilterByType}
        handleOrder={handleOrder}
        handlePageChange={handlePageChange}
      />
      <ul className={styles.unorderedList}>
        {!aux ? [listAllPokemons] : [listMyPokemons]}
      </ul>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={
          myPokemons.length !== 0
            ? currentPage === Math.ceil(myPokemons.length / itemsPerPage)
            : currentPage === Math.ceil(allPokemons.length / itemsPerPage)
        }
      >
        Siguiente
      </button>
    </>
  );
};

export default Cards;
