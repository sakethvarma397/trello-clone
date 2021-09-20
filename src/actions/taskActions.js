import { ADD_TASK, TOGGLE_TASK } from "../utils/constants";

export const addTask = (text, listId) => {
  return {
    type: ADD_TASK,
    details: { text, listId },
  };
};

export const toggleTask = (listId, taskId, isPending, index) => {
  return {
    type: TOGGLE_TASK,
    details: { listId, taskId, isPending, index },
  };
};
