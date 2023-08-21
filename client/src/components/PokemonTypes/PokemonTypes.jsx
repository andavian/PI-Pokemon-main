const PokemonTypes = ({ pokemon, types }) => {
  const listImage = pokemon.types.map((typeName) => {
    const findType = types.find((stateType) => stateType.name === typeName);

    if (findType) return findType.image;
    return null;
  });

  return (
    <article>
      {listImage.map(
        (image, index) =>
          image && (
            <img
              key={index}
              src={image}
              alt={pokemon.types[index]}
              width="40"
            />
          )
      )}
    </article>
  );
};

export default PokemonTypes;
