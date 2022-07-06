import { connect } from "react-redux";
import { createSelector } from "reselect";
import Login from "../components/Login";
import { login } from "../actions/login";

const LoginContainer = connect(
  createSelector(
    [(state) => state.login],

    (login) => {
      return {
        user: login.data,
      };
    }
  ),
  {
    login,
  }
)(Login);

export default LoginContainer;
