import {
  RICK_MORTY_LOGIN,
  RICK_MORTY_LOGIN_FAILURE,
  RICK_MORTY_LOGIN_SUCCESS,
} from "../actionTypes/login";

export const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const LoginReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case RICK_MORTY_LOGIN_SUCCESS:
      return {
        ...state,
        data: payload.user.data,
        isLoading: false,
        error: null,
      };
    case RICK_MORTY_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case RICK_MORTY_LOGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default LoginReducer;
