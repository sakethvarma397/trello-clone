import {
  ADD_LIST,
  ADD_TASK,
  DELETE_TASK,
  DELETE_LIST,
  EDIT_LIST_TITLE,
  ON_DRAG,
} from "../utils/constants";

const initialState = {
  "list-1": {
    id: "list-1",
    title: "Hello",
    tasks: ["task-1"],
  },
  "list-2": {
    id: "list-2",
    title: "There",
    tasks: ["task-2"],
  },
};
const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const { title, id } = action.payload;
      const newList = {
        title: title,
        id: `list-${id}`,
        tasks: [],
      };

      const newLists = { ...state, [`list-${id}`]: newList };

      return newLists;
    }

    case DELETE_LIST: {
      const { listId } = action.payload;
      const newState = state;
      delete newState[listId];
      return newState;
    }

    case EDIT_LIST_TITLE: {
      const newLists = state;
      const { listId, listTitle } = action.payload;
      const list = newLists[listId];
      list.title = listTitle;
      return { ...state, [listId]: list };
    }

    case ADD_TASK: {
      const { listId, id } = action.payload;
      const list = { ...state[listId] };
      list.tasks.push(`task-${id}`);
      return { ...state, [listId]: list };
    }

    case ON_DRAG: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type,
      } = action.payload;

      //Changing list order wouldn't be handled here
      if (type !== "list") {
        // Moving tasks within a list
        if (droppableIdStart === droppableIdEnd) {
          const list = state[droppableIdStart];
          const task = list.tasks.splice(droppableIndexStart, 1);
          list.tasks.splice(droppableIndexEnd, 0, ...task);
          return { ...state, [droppableIdStart]: list };
        } else {
          // Moving tasks across the lists
          // first find the list where the drag happened
          const listStart = state[droppableIdStart];
          // pull out the card from this list
          const task = listStart.tasks.splice(droppableIndexStart, 1);
          // find the list where the drag ended
          const listEnd = state[droppableIdEnd];

          // put the card in the new list
          listEnd.tasks.splice(droppableIndexEnd, 0, ...task);
          return {
            ...state,
            [droppableIdStart]: listStart,
            [droppableIdEnd]: listEnd,
          };
        }
      }
      return { ...state };
    }

    case DELETE_TASK: {
      const { listId, id } = action.payload;
      const list = { ...state[listId] };
      const newTasks = list.tasks.filter((task) => task.id !== id);
      return { ...state, [listId]: { ...list, tasks: newTasks } };
    }

    default:
      return state;
  }
};

export default listsReducer;
