import { GET_POKEMON, GET_TYPES, ORDER, FILTER_TYPE } from "./actions";

const initialState = {
  allPokemons: [],
  myPokemons: [],
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

    case FILTER_TYPE:
      if (action.payload === "All") {
        return { ...state, myPokemons: state.allPokemons };
      } else {
        return {
          ...state,
          myPokemons: state.allPokemons.filter((pokemon) =>
            pokemon.type.includes(action.payload)
          ),
        };
      }

    case ORDER:
      if (action.payload === "A") {
        return {
          ...state,
          myPokemons: [...state.allPokemons].sort((a, b) => a.id - b.id),
        };
      } else if (action.payload === "D") {
        return {
          ...state,
          myPokemons: [...state.allPokemons].sort((a, b) => b.id - a.id),
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return { ...state };
  }
}
