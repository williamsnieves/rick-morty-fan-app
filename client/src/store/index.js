import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
import reducers from "../reducers";

const middlewareEnhancer = applyMiddleware(reduxThunk);
const composedEnhancers = compose(middlewareEnhancer);

const store = createStore(reducers, undefined, composedEnhancers);

export default store;
