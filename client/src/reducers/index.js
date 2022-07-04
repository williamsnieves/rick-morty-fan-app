import { combineReducers } from "redux";
import CharactersReducer from "./characters-reducer";


const rootReducer = combineReducers({
  character: CharactersReducer
});

export default rootReducer;