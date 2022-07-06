import { connect } from "react-redux";
import { createSelector } from "reselect";
import ProtectedRoute from "../components/routes/ProtectedRoute";

const ProtectedRouteContainer = connect(
  createSelector(
    [(state) => state.login],

    (login) => {
      return {
        user: login.data,
      };
    }
  ),
  null
)(ProtectedRoute);

export default ProtectedRouteContainer;
