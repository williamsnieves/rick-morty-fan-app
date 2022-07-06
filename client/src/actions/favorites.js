import {
  RICK_MORTY_CHARACTER_FAVORITES_ADD,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_FAILURE,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_SUCCESS,
  RICK_MORTY_CHARACTER_FAVORITES_RESET_ALERT,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD_FAILURE,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD_SUCCESS,
} from "../actionTypes/favorites";
import { FAVORITES_API_URL } from "../config/data";

export const addToFavoritesRickMortyCharacter = () => {
  return {
    type: RICK_MORTY_CHARACTER_FAVORITES_ADD,
  };
};

export const addToFavoritesRickMortyCharacterFailure = (error) => {
  return {
    type: RICK_MORTY_CHARACTER_FAVORITES_ADD_FAILURE,
    payload: {
      error,
    },
  };
};

export const addToFavoritesRickMortyCharacterSuccess = (characters) => {
  return {
    type: RICK_MORTY_CHARACTER_FAVORITES_ADD_SUCCESS,
    payload: {
      characters,
    },
  };
};

export const addToFavorites = (characterData) => (dispatch) => {
  dispatch(addToFavoritesRickMortyCharacter());

  return fetch(FAVORITES_API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ characterData }),
  })
    .then((res) => res.json())
    .then((result) => dispatch(addToFavoritesRickMortyCharacterSuccess(result)))
    .catch((error) => dispatch(addToFavoritesRickMortyCharacterFailure(error)));
};

export const resetFavoriteAlert = () => ({
  type: RICK_MORTY_CHARACTER_FAVORITES_RESET_ALERT,
});

export const loadRickMortyFavoritesCharacter = () => {
  return {
    type: RICK_MORTY_CHARACTER_FAVORITES_LOAD,
  };
};

export const loadRickMortyFavoritesCharacterFailure = (error) => {
  return {
    type: RICK_MORTY_CHARACTER_FAVORITES_LOAD_FAILURE,
    payload: {
      error,
    },
  };
};

export const loadRickMortyFavoritesCharacterSuccess = (characters) => {
  return {
    type: RICK_MORTY_CHARACTER_FAVORITES_LOAD_SUCCESS,
    payload: {
      characters,
    },
  };
};

export const loadFavorites = () => (dispatch, getState) => {
  dispatch(loadRickMortyFavoritesCharacter());
  return fetch(FAVORITES_API_URL)
    .then((res) => res.json())
    .then((result) => dispatch(loadRickMortyFavoritesCharacterSuccess(result)))
    .catch((error) => dispatch(loadRickMortyFavoritesCharacterFailure(error)));
};
