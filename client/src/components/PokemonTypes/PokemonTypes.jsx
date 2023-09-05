import styles from "./pokemonTypes.module.css";

const PokemonTypes = ({ pokemon, types }) => {
  const listImage = pokemon.types.map((typeObj) => {
    const findType = types.find((stateType) => stateType.name === typeObj.name);

    if (findType) return findType.image;
    return null;
  });

  return (
    <article className={styles.container}>
      {listImage.map(
        (image, index) =>
          image && (
            <img
              key={index}
              src={image}
              alt={pokemon.types[index]}
              width="35"
            />
          )
      )}
    </article>
  );
};

export default PokemonTypes;
