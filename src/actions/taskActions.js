import { ADD_TASK, TOGGLE_TASK } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

export const addTask = (text, listId) => {
  const id = uuidv4();
  return {
    type: ADD_TASK,
    payload: { text, listId, id },
  };
};

export const toggleTask = (taskId, isPending) => {
  return {
    type: TOGGLE_TASK,
    payload: { taskId, isPending },
  };
};
