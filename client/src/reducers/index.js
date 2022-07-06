import { combineReducers } from "redux";
import CharactersReducer from "./characters-reducer";
import FavoritesReducer from "./favorites-reducer";
import LoginReducer from "./login-reducer";

const rootReducer = combineReducers({
  character: CharactersReducer,
  favorites: FavoritesReducer,
  login: LoginReducer,
});

export default rootReducer;
