import { ADD_BOARD, ADD_LIST, DELETE_LIST, ON_DRAG } from "../utils/constants";
const initialState = {
  "board-1": {
    id: "board-1",
    title: "First board",
    lists: ["list-1"],
  },
  "board-2": {
    id: "board-2",
    title: "Second board",
    lists: ["list-2"],
  },
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const { title, id } = action.payload;
      const newId = `board-${id}`;
      const newBoard = {
        id: newId,
        title,
        lists: [],
      };

      return { ...state, [newId]: newBoard };
    }

    case ADD_LIST: {
      const { boardId, id } = action.payload;
      const board = state[boardId];
      const newListId = `list-${id}`;
      const newLists = [...board.lists, newListId];
      board.lists = newLists;
      return { ...state, [boardId]: board };
    }

    case DELETE_LIST: {
      const { listId, boardId } = action.payload;
      const board = state[boardId];
      const lists = board.lists;
      const newLists = lists.filter((id) => id !== listId);
      board.lists = newLists;
      return { ...state, [boardId]: board };
    }

    //TODO: Implement this case
    case ON_DRAG: {
      const { boardId } = action.payload;
      const board = state[boardId];
      const lists = board.lists;
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type,
      } = action.payload;

      // Only handles the drag between lists
      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.lists = lists;

        return { ...state, [boardId]: board };
      }
      return state;
    }

    default:
      return state;
  }
};

export default boardReducer;
