import {
  ADD_LIST,
  ON_DRAG,
  EDIT_LIST_TITLE,
  DELETE_LIST,
} from "../utils/constants";

export const addList = (title) => {
  return {
    type: ADD_LIST,
    title,
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  type
) => {
  return {
    type: ON_DRAG,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      type,
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

export const deleteList = (listId) => {
  return {
    type: DELETE_LIST,
    payload: {
      listId: listId,
    },
  };
};
