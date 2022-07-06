import {
  RICK_MORTY_CHARACTER_FAVORITES_ADD,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_FAILURE,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_SUCCESS,
  RICK_MORTY_CHARACTER_FAVORITES_RESET_ALERT,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD_FAILURE,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD_SUCCESS,
} from "../actionTypes/favorites";

export const initialState = {
  data: null,
  isLoading: false,
  succeeded: null,
  error: null,
};

const FavoritesReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case RICK_MORTY_CHARACTER_FAVORITES_ADD_SUCCESS:
      return {
        ...state,
        succeeded: true,
        isLoading: false,
        error: null,
      };
    case RICK_MORTY_CHARACTER_FAVORITES_ADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case RICK_MORTY_CHARACTER_FAVORITES_ADD:
      return {
        ...state,
        isLoading: true,
        error: null,
        succeeded: null,
      };
    case RICK_MORTY_CHARACTER_FAVORITES_RESET_ALERT:
      return {
        ...state,
        succeeded: null,
      };
    case RICK_MORTY_CHARACTER_FAVORITES_LOAD_SUCCESS:
      return {
        ...state,
        data: payload.characters.data,
        isLoading: false,
        error: null,
      };
    case RICK_MORTY_CHARACTER_FAVORITES_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case RICK_MORTY_CHARACTER_FAVORITES_LOAD:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    default:
      return state;
  }
};

export default FavoritesReducer;
