import { connect } from "react-redux";
import { createSelector } from "reselect";
import Character from "../components/Characters";
import { loadCharacter } from "../actions/characters";
import { addToFavorites, resetFavoriteAlert } from "../actions/favorites";

const AdministrationBusinessPageContainer = connect(
  createSelector(
    [(state) => state.character, (state) => state.favorites],

    (character, favorites) => {
      console.log("-----", favorites);
      return {
        characters: character.data,
        favoritesLoading: favorites.isLoading,
        favoriteAddedSucceeded: favorites.succeeded,
      };
    }
  ),
  {
    loadCharacter,
    addToFavorites,
    resetFavoriteAlert,
  }
)(Character);

export default AdministrationBusinessPageContainer;
