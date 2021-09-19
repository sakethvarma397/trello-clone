import { ADD_LIST, ON_DRAG } from "../utils/constants";

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
  draggableId
) => {
  return {
    type: ON_DRAG,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
