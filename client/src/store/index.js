import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
import reducers from "../reducers";

const toolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/*const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  enhancer
)(createStore);
const store = createStoreWithMiddleware(reducers);*/

const middlewareEnhancer = applyMiddleware(reduxThunk);
const composedEnhancers = compose(middlewareEnhancer);

const store = createStore(reducers, undefined, composedEnhancers);

export default store;
