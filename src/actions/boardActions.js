import { ADD_BOARD } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

export const addBoard = (title) => {
  const id = uuidv4();
  return {
    type: ADD_BOARD,
    payload: {
      title,
      id,
    },
  };
};
