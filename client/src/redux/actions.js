import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
const endpoint = "pokemons";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_POKEMON,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};
