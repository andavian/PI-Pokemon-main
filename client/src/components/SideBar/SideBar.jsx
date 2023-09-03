import TypesButtons from "../TypesButtons/TypesButtons";
import styles from "./sideBar.module.css";

const SideBar = ({ handleFilterById, handleFilterByType, handleOrder }) => {
  return (
    <>
      <section className={styles.container}>
        <span>Filter by Type</span>

        <button onClick={() => handleFilterByType("All")}>All</button>
        <TypesButtons onClick={handleFilterByType} />

        <span>Filter by Origin</span>
        <select onChange={handleFilterById} className={styles.input}>
          <option value="All">All</option>
          <option value="Database">Database</option>
          <option value="API">API REST</option>
        </select>
        <span>Order by</span>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
          <option value="HA">Highest Attack</option>
          <option value="LA">Lowest Attack</option>
        </select>
      </section>
    </>
  );
};

export default SideBar;
