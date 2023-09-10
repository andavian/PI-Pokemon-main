import TypesButtons from "../TypesButtons/TypesButtons";
import styles from "./sideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cleanFilters } from "../../redux/actions";

const SideBar = ({ handleFilterById, handleFilterByType, handleOrder }) => {
  const dispatch = useDispatch();
  const filtering = useSelector((state) => state.filtering);

  const handleClick = () => {
    dispatch(cleanFilters(!filtering));
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.oredering}>
          <p className={styles.text}>Sort by</p>
          <select onChange={handleOrder} className={styles.order}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
            <option value="HA">Highest Attack</option>
            <option value="LA">Lowest Attack</option>
          </select>
        </div>
        <hr />
        <button onClick={handleClick} className={styles.btn}>
          Clean Filters
        </button>
        <hr />
        <h2>Filter by Type</h2>

        <TypesButtons onClick={handleFilterByType} />
        <hr />
        <h2>Filter by Origin</h2>
        <select onChange={handleFilterById} className={styles.input}>
          <option value="All">All</option>
          <option value="Database">Database</option>
          <option value="API">API REST</option>
        </select>
      </section>
    </>
  );
};

export default SideBar;
