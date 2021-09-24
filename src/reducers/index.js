import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import tasksReducer from "./tasksReducer";
import boardsReducer from "./boardsReducer";
import boardsOrderReducer from "./boardsOrderReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["lists", "tasks", "boards", "boardsOrder"],
};

const rootReducer = combineReducers({
  lists: listsReducer,
  tasks: tasksReducer,
  boards: boardsReducer,
  boardsOrder: boardsOrderReducer,
});

export default persistReducer(persistConfig, rootReducer);
