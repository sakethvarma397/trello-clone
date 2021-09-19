import { ADD_LIST } from "../utils/constants";

export const addList = (title) => {
  return {
    type: ADD_LIST,
    title,
  };
};
