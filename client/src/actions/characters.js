import {
  RICK_MORTY_CHARACTER_LOAD,
  RICK_MORTY_CHARACTER_LOAD_FAILURE,
  RICK_MORTY_CHARACTER_LOAD_SUCCESS,
} from "../actionTypes/characters";
import { CHARACTERS_API_URL } from "../config/data";

export const loadRickMortyCharacter = () => {
  return {
    type: RICK_MORTY_CHARACTER_LOAD,
  };
};

export const loadRickMortyCharacterFailure = (error) => {
  return {
    type: RICK_MORTY_CHARACTER_LOAD_FAILURE,
    payload: {
      error,
    },
  };
};

export const loadRickMortyCharacterSuccess = (characters) => {
  return {
    type: RICK_MORTY_CHARACTER_LOAD_SUCCESS,
    payload: {
      characters,
    },
  };
};

export const loadCharacter = () => (dispatch) => {
  dispatch(loadRickMortyCharacter());
  return fetch(CHARACTERS_API_URL)
    .then((res) => res.json())
    .then((result) => dispatch(loadRickMortyCharacterSuccess(result)))
    .catch((error) => dispatch(loadRickMortyCharacterFailure(error)));
};
