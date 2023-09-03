import { useSelector } from "react-redux";
import styles from "./pagination.module.css";

const Pagination = ({ handlePageChange }) => {
  const { allPokemons, myPokemons, currentPage, itemsPerPage } = useSelector(
    (state) => state
  );
  const handleClick = (pageNumber) => {
    handlePageChange(pageNumber);
  };

  const maxPageAllPokemons = Math.ceil(allPokemons.length / itemsPerPage);

  const maxPageMyPokemons = Math.ceil(myPokemons.length / itemsPerPage);

  const allPages = [];
  const filteredPages = [];

  for (let i = 1; i <= maxPageAllPokemons; i++) {
    allPages.push(i);
  }

  for (let i = 1; i <= maxPageMyPokemons; i++) {
    filteredPages.push(i);
  }

  const renderAllPagesNumbers = allPages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        className={
          Number(currentPage) === number ? styles.active : styles.number
        }
        onClick={() => handleClick(number)}
      >
        {number}
      </li>
    );
  });

  const renderFilteredPagesNumbers = filteredPages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        className={
          Number(currentPage) === number ? styles.active : styles.number
        }
        onClick={() => handleClick(number)}
      >
        {number}
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <div>
        <button
          className={`${currentPage === 1 ? styles.none : styles.btn} ${
            currentPage === 1 ? styles.none : styles.btnStart
          }`}
          onClick={() => {
            handlePageChange(1);
          }}
        >
          &lt;&lt;&lt;
        </button>
        <button
          className={`${currentPage === 1 ? styles.none : styles.btn}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>
      </div>

      <ul className={styles.pageNumbers}>
        {filteredPages.lenght === 0
          ? renderAllPagesNumbers
          : renderFilteredPagesNumbers}
      </ul>
      {currentPage === maxPageMyPokemons ||
      currentPage === maxPageAllPokemons ||
      filteredPages.length === 0 ? (
        <></>
      ) : (
        <div>
          <button
            className={styles.btn}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>

          <button
            className={`${styles.btnEnd} ${styles.btn}`}
            onClick={() => {
              myPokemons.length !== 0
                ? handlePageChange(maxPageMyPokemons)
                : handlePageChange(maxPageAllPokemons);
            }}
          >
            &gt;&gt;&gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
