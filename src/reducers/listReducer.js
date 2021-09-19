import { ADD_LIST, ADD_TASK } from "../utils/constants";
let task_Id = 5;
let list_Id = 3;
const initialState = {
  lists: [
    {
      id: "list-1",
      title: "Hello",
      tasks: [
        { id: "task-1", text: "First card", listId: "list-1" },
        { id: "task-2", text: "Second Card", listId: "list-1" },
      ],
    },
    {
      id: "list-2",
      title: "There",
      tasks: [
        { id: "task-3", text: "First card", listId: "list-2" },
        { id: "task-4", text: "Second Card", listId: "list-2" },
      ],
    },
  ],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        id: `list-${list_Id}}`,
        tasks: [],
        title: action.title,
      };
      list_Id += 1;
      return { lists: [...state.lists, newList] };

    case ADD_TASK:
      const { listId, text } = action.details;
      const newTask = {
        text,
        listId,
        id: `task-${task_Id}`,
      };
      task_Id += 1;
      const newState = state.lists.map((list) => {
        if (list.id === newTask.listId) {
          return { ...list, tasks: [...list.tasks, newTask] };
        } else {
          return list;
        }
      });
      return { lists: newState };
    default:
      return state;
  }
};
