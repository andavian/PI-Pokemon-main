import {
  GET_POKEMON,
  GET_TYPES,
  ORDER,
  FILTER_TYPE,
  FILTER_ID,
  SET_CURRENT_PAGE,
  SEARCH_BY_NAME,
  POKEMON_ERROR,
  CLEAN_FILTERS,
} from "./actionTypes";

const initialState = {
  currentPage: 1,
  itemsPerPage: 12,
  totalItems: 0,
  allPokemons: [],
  myPokemons: [],
  pokemonTypes: [],
  pokemonError: null,
  filtering: false,
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

    case SEARCH_BY_NAME:
      return {
        ...state,

        myPokemons: action.payload,
        filtering: true,
      };

    case FILTER_TYPE:
      if (action.payload === "All") {
        return { ...state, myPokemons: state.allPokemons };
      } else {
        return {
          ...state,
          myPokemons: state.allPokemons.filter((pokemon) =>
            pokemon.types.find((type) => type.name === action.payload)
          ),
          filtering: true,
        };
      }

    case FILTER_ID:
      switch (action.payload) {
        case "All":
          return { ...state, myPokemons: state.allPokemons };
        case "Database":
          return {
            ...state,
            myPokemons: state.allPokemons.filter(
              (pokemon) =>
                typeof pokemon.id === "string" && pokemon.id.length === 36
            ),
            filtering: true,
          };
        case "API":
          return {
            ...state,
            myPokemons: state.allPokemons.filter(
              (pokemon) => pokemon.id.length !== 36
            ),
            filtering: true,
          };
        default:
          return { ...state };
      }

    case ORDER:
      switch (action.payload) {
        //     case "A":
        //       return {
        //         ...state,
        //         allPokemons: [...state.allPokemons].sort((a, b) => a.id - b.id),
        //         myPokemons: [...state.myPokemons].sort((a, b) => a.id - b.id),
        //       };

        //     case "D":
        //       return {
        //         ...state,
        //         allPokemons: [...state.allPokemons].sort((a, b) => b.id - a.id),
        //         myPokemons: [...state.myPokemons].sort((a, b) => b.id - a.id),
        //       };

        case "A":
          return {
            ...state,
            allPokemons: [...state.allPokemons].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
            myPokemons: [...state.myPokemons].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };

        case "D":
          return {
            ...state,
            allPokemons: [...state.allPokemons].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
            myPokemons: [...state.myPokemons].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
          };

        case "LA":
          return {
            ...state,
            allPokemons: [...state.allPokemons].sort(
              (a, b) => a.attack - b.attack
            ),
            myPokemons: [...state.myPokemons].sort(
              (a, b) => a.attack - b.attack
            ),
          };

        case "HA":
          return {
            ...state,
            allPokemons: [...state.allPokemons].sort(
              (a, b) => b.attack - a.attack
            ),
            myPokemons: [...state.myPokemons].sort(
              (a, b) => b.attack - a.attack
            ),
          };
        default:
          return {
            ...state,
          };
      }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    case CLEAN_FILTERS:
      return { ...state, filtering: false };

    case POKEMON_ERROR:
      return {
        ...state,
        pokemonError: action.payload, // Almacena el mensaje de error
      };

    default:
      return { ...state };
  }
}
