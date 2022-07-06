import {
  RICK_MORTY_LOGIN,
  RICK_MORTY_LOGIN_FAILURE,
  RICK_MORTY_LOGIN_SUCCESS,
} from "../actionTypes/login";

export const loginRickMorty = () => {
  return {
    type: RICK_MORTY_LOGIN,
  };
};

export const loginRickMortyFailure = (error) => {
  return {
    type: RICK_MORTY_LOGIN_FAILURE,
    payload: {
      error,
    },
  };
};

export const loginRickMortySuccess = (user) => {
  return {
    type: RICK_MORTY_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const login = (formData) => (dispatch, getState) => {
  const loginURL = `http://localhost:4000/login`;

  dispatch(loginRickMorty());
  return fetch(loginURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  })
    .then((res) => res.json())
    .then((result) => dispatch(loginRickMortySuccess(result)))
    .catch((error) => dispatch(loginRickMortyFailure(error)));
};
