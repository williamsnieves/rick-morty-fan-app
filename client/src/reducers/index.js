import { combineReducers } from "redux";
import CharactersReducer from "./characters-reducer";
import FavoritesReducer from "./favorites-reducer";

const rootReducer = combineReducers({
  character: CharactersReducer,
  favorites: FavoritesReducer,
});

export default rootReducer;
