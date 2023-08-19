import { GET_POKEMON } from "./actions";

const initialState = {
  myPokemons: [],
  allPokemons: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    default:
      return { ...state };
  }
}
