import { ADD_TASK } from "../utils/constants";

export const addTask = (text, listId) => {
  return {
    type: ADD_TASK,
    details: { text, listId },
  };
};
