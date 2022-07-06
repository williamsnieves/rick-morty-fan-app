import {
  RICK_MORTY_CHARACTER_FAVORITES_ADD,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_FAILURE,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_SUCCESS,
  RICK_MORTY_CHARACTER_FAVORITES_RESET_ALERT,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD_FAILURE,
  RICK_MORTY_CHARACTER_FAVORITES_LOAD_SUCCESS,
} from "../actionTypes/favorites";

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

export const addToFavorites = (characterData) => (dispatch, getState) => {
  const favoritesURL = `http://localhost:4000/favorites`;

  dispatch(addToFavoritesRickMortyCharacter());

  return fetch(favoritesURL, {
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
  const favoritesURL = `http://localhost:4000/favorites`;

  dispatch(loadRickMortyFavoritesCharacter());
  return fetch(favoritesURL)
    .then((res) => res.json())
    .then((result) => dispatch(loadRickMortyFavoritesCharacterSuccess(result)))
    .catch((error) => dispatch(loadRickMortyFavoritesCharacterFailure(error)));
};
