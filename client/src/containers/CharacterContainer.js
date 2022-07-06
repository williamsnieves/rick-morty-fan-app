import { connect } from "react-redux";
import { createSelector } from "reselect";
import Character from "../components/Characters";
import { loadCharacter } from "../actions/characters";
import { addToFavorites, resetFavoriteAlert } from "../actions/favorites";

const CharacterContainer = connect(
  createSelector(
    [(state) => state.character, (state) => state.favorites],

    (character, favorites) => {
      return {
        characters: character.data,
        favoritesIds: character.favoritesIds,
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

export default CharacterContainer;
