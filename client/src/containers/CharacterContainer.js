import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import Character from '../components/Characters';
import {loadCharacter} from '../actions/characters'

const AdministrationBusinessPageContainer = connect(
  createSelector(
    [
      (state) => state.character
    ],
    (character) => ({
      characters: character.data
    })
  ),
  {
    loadCharacter
  }
)(Character);

export default AdministrationBusinessPageContainer;
