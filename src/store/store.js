import { createStore } from "redux";
import { listReducer } from "../reducers/listReducer";

const store = createStore(
  listReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log("New state", store.getState());
});

export default store;
