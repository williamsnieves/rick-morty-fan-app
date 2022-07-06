import {
  RICK_MORTY_CHARACTER_LOAD,
  RICK_MORTY_CHARACTER_LOAD_SUCCESS,
  RICK_MORTY_CHARACTER_LOAD_FAILURE,
} from "../actionTypes/characters";

export const initialState = {
  data: null,
  favoritesIds: null,
  isLoading: false,
  error: null,
};

const CharactersReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case RICK_MORTY_CHARACTER_LOAD_SUCCESS:
      return {
        ...state,
        data: payload.characters.data,
        favoritesIds: payload.characters.favoritesIds,
        isLoading: false,
        error: null,
      };
    case RICK_MORTY_CHARACTER_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case RICK_MORTY_CHARACTER_LOAD:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default CharactersReducer;
