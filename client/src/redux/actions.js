import axios from "axios";

import {
  GET_POKEMON,
  GET_TYPES,
  FILTER_TYPE,
  ORDER,
  FILTER_ID,
  SET_CURRENT_PAGE,
  SEARCH_BY_NAME,
  CLEAN_FILTERS,
  CLEAR_ERROR,
  CREATE_POKEMON,
  DELETE_POKEMON,
  UPDATE_POKEMON_BY_NAME,
} from "./actionTypes";

const endpoints = ["pokemons", "types", "pokemons/search?charName="];

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoints[0]);

      return dispatch({
        type: GET_POKEMON,
        payload: data,
      });
    } catch (error) {
      console.error("error", error);
      error.response
        ? alert(error.response.data)
        : alert(
            "El servidor no está disponible en este momento. Inténtalo más tarde."
          );
      // dispatch({
      //   type: POKEMON_ERROR,
      //   payload: error.response.data.message,
      // });
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
      error.response
        ? alert(error.response.data)
        : alert(
            "El servidor no está disponible en este momento. Inténtalo más tarde."
            //     );
            // dispatch({
            //   type: POKEMON_ERROR,
            //   payload: error.response.data.message,
            // });
          );
    }
  };
};

export function searchPokemonByName(charName) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${endpoints[2]}${encodeURIComponent(charName)}`
      );

      return dispatch({
        type: SEARCH_BY_NAME,
        payload: data,
      });
    } catch (error) {
      error.response
        ? alert(error.response.data)
        : alert(
            "El servidor no está disponible en este momento. Inténtalo más tarde."
          );
      // dispatch({
      //   type: POKEMON_ERROR,
      //   payload: error.response.data.message,
      // });
    }
  };
}

export function filterCardsByType(type) {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
}

export function filterCardsById(id) {
  return {
    type: FILTER_ID,
    payload: id,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const cleanFilters = () => ({
  type: CLEAN_FILTERS,
});

export const createPokemon = (newPokemon) => ({
  type: CREATE_POKEMON,
  payload: newPokemon,
});

export const updatePokemonByName = (name, updatedData) => {
  return {
    type: UPDATE_POKEMON_BY_NAME,
    payload: { name, updatedData },
  };
};

export const deletePokemonAction = (pokemonName) => {
  return {
    type: DELETE_POKEMON,
    payload: pokemonName,
  };
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});
