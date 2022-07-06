import { connect } from "react-redux";
import { createSelector } from "reselect";
import Favorites from "../components/Favorites";
import { loadFavorites } from "../actions/favorites";

const FavoritesContainer = connect(
  createSelector([(state) => state.favorites], (favorites) => ({
    favorites: favorites.data,
  })),
  {
    loadFavorites,
  }
)(Favorites);

export default FavoritesContainer;
