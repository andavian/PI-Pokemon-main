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
  return (
    <div className={styles.container}>
      {" "}
      {currentPage === 1 ? (
        <></>
      ) : (
        <div>
          <button
            onClick={() => {
              handlePageChange(1);
            }}
          >
            &lt;&lt;&lt;
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)}>
            &lt;
          </button>
        </div>
      )}
      <ul className={styles.pageNumbers}>{renderAllPagesNumbers}</ul>
      {currentPage === maxPageMyPokemons ||
      currentPage === maxPageAllPokemons ? (
        <></>
      ) : (
        <div>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            &gt;
          </button>

          <button
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
