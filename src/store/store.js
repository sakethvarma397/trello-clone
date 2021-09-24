import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { persistStore } from "redux-persist";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

store.subscribe(() => {
  console.log("New state", store.getState());
});

const storeObj = { store, persistor };
export default storeObj;
