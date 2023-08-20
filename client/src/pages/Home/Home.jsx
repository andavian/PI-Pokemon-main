import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemons } from "../../redux/actions";
import Card from "../../components/Card/Card";

// async function onSearchByName(charName) {
//   try {
//     const { data } = await axios(
//       `pokemons/search?charName=${encodeURIComponent(charName)}`
//     );

//     if (!data.charName) {
//       alert("¡No se encontró el pokemon!");
//     } else {
//       setPokemons((characters) => [...characters, ...data]);
//     }
//   } catch (error) {
//     alert(error.response.data.error);
//   }
// }

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  console.log("state", pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <section>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </div>
  );
};

export default Home;
