import styles from "./searchbar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearchByName }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
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
        onClick={() => onSearchByName(name)}
      >
        Search
      </button>
    </div>
  );
}
