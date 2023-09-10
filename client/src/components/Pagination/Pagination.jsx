import { useSelector } from "react-redux";
import styles from "./pagination.module.css";

const Pagination = ({ handlePageChange }) => {
  const { allPokemons, myPokemons, currentPage, itemsPerPage, filtering } =
    useSelector((state) => state);

  const isMyPokemonsActive = myPokemons.length !== 0 && filtering;

  const activeList = isMyPokemonsActive ? myPokemons : allPokemons;
  const maxPage = Math.ceil(activeList.length / itemsPerPage);

  // Ajusta el número máximo de páginas a mostrar a la vez
  const pagesToShow = 5;
  const halfPagesToShow = Math.floor(pagesToShow / 2);

  let startPage = Math.max(currentPage - halfPagesToShow, 1);
  let endPage = Math.min(startPage + pagesToShow - 1, maxPage);

  if (!isMyPokemonsActive && filtering) {
    return null;
  }

  // Ajusta el inicio y el final si el rango se desborda
  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(endPage - pagesToShow + 1, 1);
  }

  const renderPageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => (
      <li
        key={startPage + index}
        className={
          currentPage === startPage + index ? styles.active : styles.number
        }
        onClick={() => handlePageChange(startPage + index)}
      >
        {startPage + index}
      </li>
    )
  );

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        <button
          className={`${currentPage === 1 ? styles.none : styles.btn}`}
          onClick={() => handlePageChange(1)}
        >
          &lt;&lt;
        </button>
        <button
          className={`${currentPage === 1 ? styles.none : styles.btn}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>
      </div>
      <div>
        <ul className={styles.pageNumbers}>{renderPageNumbers}</ul>
      </div>

      {currentPage < maxPage && (
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>

          <button
            className={styles.btn}
            onClick={() => handlePageChange(maxPage)}
          >
            &gt;&gt;
          </button>
        </div>
      )}
    </div>
  );
};
export default Pagination;
