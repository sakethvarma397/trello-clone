import { ADD_BOARD, DELETE_BOARD, EDIT_BOARD_TITLE } from "../utils/constants";
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

export const editTitle = (boardId, title) => {
  return {
    type: EDIT_BOARD_TITLE,
    payload: {
      title,
      boardId,
    },
  };
};

export const deleteBoard = (boardId) => {
  return {
    type: DELETE_BOARD,
    payload: {
      boardId,
    },
  };
};
