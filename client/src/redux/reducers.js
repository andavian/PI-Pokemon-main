import { GET_POKEMON, GET_TYPES } from "./actions";

const initialState = {
  allPokemons: [],
  pokemonTypes: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,

        allPokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };

    default:
      return { ...state };
  }
}
