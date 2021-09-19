import { createStore } from "redux";
import { listReducer } from "../reducers/listReducer";

const store = createStore(listReducer);
store.subscribe(() => {
  console.log("New state", store.getState());
});

export default store;
