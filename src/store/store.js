import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log("New state", store.getState());
});

export default store;
