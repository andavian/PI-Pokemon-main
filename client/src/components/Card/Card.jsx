const Card = ({ pokemon }) => {
  return (
    <article className="product">
      <img src={pokemon.image} alt={pokemon.name} width="100" />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.types}</p>
    </article>
  );
};

export default Card;
