import { connect } from "react-redux";
import { createSelector } from "reselect";
import Favorites from "../components/Favorites";

const AdministrationBusinessPageContainer = connect(
  createSelector([(state) => state.favorites], (favorites) => ({
    favorites: favorites.data,
  }))
)(Favorites);

export default AdministrationBusinessPageContainer;
