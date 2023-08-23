import styles from "./lateralBar.module.css";

const LateralBar = ({
  types,
  handleFilterById,
  handleFilterByType,
  handleOrder,
  handlePageChange,
}) => {
  const typesNames = types.map((type) => (
    <option key={type.id} value={type.name}>
      <img src={type.image} alt={type.name} width="40" />
    </option>
  ));

  return (
    <>
      <section>
        <span>Filter by Type</span>
        <button onClick={() => handleFilterByType("All")}>All</button>
        {typesNames.map((type) => (
          <button
            key={type.props.value}
            title={type.props.value}
            onClick={() => {
              handleFilterByType(type.props.value);
              handlePageChange(1);
            }}
          >
            {type.props.children}
          </button>
        ))}
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

export default LateralBar;
