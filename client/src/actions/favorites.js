import {
  RICK_MORTY_CHARACTER_FAVORITES_ADD,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_FAILURE,
  RICK_MORTY_CHARACTER_FAVORITES_ADD_SUCCESS,
  RICK_MORTY_CHARACTER_FAVORITES_RESET_ALERT,
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
