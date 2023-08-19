import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemon, getPokemons } from "../../redux/actions";

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

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <section>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.image}
            {pokemon.name}
          </li>
        ))}
      </section>
    </div>
  );
};

export default Home;
