import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemonByName, setCurrentPage } from "../../redux/actions";
import styles from "./searchbar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = async (name) => {
    await dispatch(searchPokemonByName(name));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className={styles.inputGroup}>
      <input
        type="search"
        className={styles.input}
        onChange={handleChange}
        placeholder="search by name"
      />

      <button
        className={styles.buttonSearch}
        onClick={() => handleSearch(name)}
      >
        Search
      </button>
    </div>
  );
}
