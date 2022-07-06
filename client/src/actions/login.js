import {
  RICK_MORTY_LOGIN,
  RICK_MORTY_LOGIN_FAILURE,
  RICK_MORTY_LOGIN_SUCCESS,
} from "../actionTypes/login";
import { AUTH_API_URL } from "../config/data";

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
  localStorage.setItem("userData", JSON.stringify(user));
  return {
    type: RICK_MORTY_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const login = (formData) => (dispatch) => {
  dispatch(loginRickMorty());
  return fetch(AUTH_API_URL, {
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
