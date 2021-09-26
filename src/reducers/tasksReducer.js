import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_DESCRIPTION,
  TOGGLE_TASK,
} from "../utils/constants";

const initialState = {
  "task-1": {
    text: "Sample text",
    id: `task-1`,
    list: "list-1",
    description: "",
    isPending: false,
  },
  "task-2": {
    text: "Sample text",
    id: `task-2`,
    list: "list-2",
    description: "",
    isPending: false,
  },
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { text, listId, id } = action.payload;
      const newTask = {
        text,
        id: `task-${id}`,
        list: listId,
        description: "",
        isPending: false,
      };

      return { ...state, [`task-${id}`]: newTask };
    }

    case EDIT_DESCRIPTION: {
      const { description, taskId } = action.payload;
      const task = state[taskId];
      task.description = description;
      return { ...state, [taskId]: task };
    }

    case DELETE_TASK: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }

    case TOGGLE_TASK: {
      const { isPending, taskId } = action.payload;
      const task = state[taskId];
      task.isPending = isPending;
      return { ...state, [taskId]: task };
    }

    default:
      return state;
  }
};
export default taskReducer;
