import { createStore, applyMiddleware } from "redux";
import createSagaMiddle from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer.js";
import rootSaga from "./sagas/rootSaga.js";

const sagaMiddle = createSagaMiddle();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddle)
    // other store enhancers if any
  )
);

sagaMiddle.run(rootSaga);

export default store;
