import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPE = "FILTER_TYPE";
export const ORDER = "ORDER";

const endpoints = ["pokemons", "types"];

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoints[0]);

      return dispatch({
        type: GET_POKEMON,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoints[1]);
      return dispatch({
        type: GET_TYPES,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export function filterCards(type) {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
