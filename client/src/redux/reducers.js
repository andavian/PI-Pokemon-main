import {
  GET_POKEMON,
  GET_TYPES,
  ORDER,
  FILTER_TYPE,
  FILTER_ID,
} from "./actions";

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
            pokemon.types.includes(action.payload)
          ),
        };
      }

    case FILTER_ID:
      if (action.payload === "All") {
        return { ...state, myPokemons: state.allPokemons };
      } else if (
        typeof action.payload === "string" &&
        action.payload.length === 36
      ) {
        return {
          ...state,
          myPokemons: state.allPokemons.filter(
            (pokemon) => pokemon.id === action.payload
          ),
        };
      } else {
        return {
          ...state,
          myPokemons: state.allPokemons.filter(
            (pokemon) => pokemon.id === action.payload
          ),
        };
      }

    case ORDER:
      switch (action.payload) {
        case "A":
          return {
            ...state,
            myPokemons: [...state.allPokemons].sort((a, b) => a.id - b.id),
          };

        case "D":
          return {
            ...state,
            myPokemons: [...state.allPokemons].sort((a, b) => b.id - a.id),
          };

        case "LA":
          return {
            ...state,
            myPokemons: [...state.allPokemons].sort(
              (a, b) => a.attack - b.attack
            ),
          };

        case "HA":
          return {
            ...state,
            myPokemons: [...state.allPokemons].sort(
              (a, b) => b.attack - a.attack
            ),
          };
        default:
          return {
            ...state,
          };
      }

    default:
      return { ...state };
  }
}
