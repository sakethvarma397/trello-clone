import {
  ADD_LIST,
  ON_DRAG,
  EDIT_LIST_TITLE,
  DELETE_LIST,
} from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

export const addList = (title, boardId) => {
  const id = uuidv4();
  return {
    type: ADD_LIST,
    payload: {
      title,
      id,
      boardId,
    },
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  type,
  boardId
) => {
  return {
    type: ON_DRAG,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      type,
      boardId,
    },
  };
};

export const editTitle = (listId, listTitle) => {
  return {
    type: EDIT_LIST_TITLE,
    payload: {
      listId: listId,
      listTitle: listTitle,
    },
  };
};

export const deleteList = (listId, boardId) => {
  return {
    type: DELETE_LIST,
    payload: {
      listId,
      boardId,
    },
  };
};
