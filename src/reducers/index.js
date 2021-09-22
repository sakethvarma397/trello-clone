import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import tasksReducer from "./tasksReducer";
import boardsReducer from "./boardsReducer";
import boardsOrderReducer from "./boardsOrderReducer";

const rootReducer = combineReducers({
  lists: listsReducer,
  tasks: tasksReducer,
  boards: boardsReducer,
  boardsOrder: boardsOrderReducer,
});

export default rootReducer;
