import { useSelector } from "react-redux";
import styles from "./pagination.module.css";

const Pagination = ({ handlePageChange }) => {
  const { allPokemons, myPokemons, currentPage, itemsPerPage } = useSelector(
    (state) => state
  );

  const isMyPokemonsActive = myPokemons.length !== 0;
  const activeList = isMyPokemonsActive ? myPokemons : allPokemons;
  const maxPage = Math.ceil(activeList.length / itemsPerPage);

  const renderPageNumbers = Array.from({ length: maxPage }, (_, index) => (
    <li
      key={index + 1}
      className={currentPage === index + 1 ? styles.active : styles.number}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </li>
  ));

  return (
    <div className={styles.container}>
      <div>
        <button
          className={`${currentPage === 1 ? styles.none : styles.btn} ${
            currentPage === 1 ? styles.none : styles.btnStart
          }`}
          onClick={() => handlePageChange(1)}
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

      <ul className={styles.pageNumbers}>{renderPageNumbers}</ul>

      {currentPage < maxPage && (
        <div>
          <button
            className={styles.btn}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>

          <button
            className={`${styles.btnEnd} ${styles.btn}`}
            onClick={() => handlePageChange(maxPage)}
          >
            &gt;&gt;&gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
