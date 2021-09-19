import { ADD_LIST, ADD_TASK, ON_DRAG } from "../utils/constants";
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
    case ADD_LIST: {
      const newList = {
        id: `list-${list_Id}}`,
        tasks: [],
        title: action.title,
      };
      list_Id += 1;
      return { lists: [...state.lists, newList] };
    }
    case ADD_TASK: {
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
    }
    case ON_DRAG: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type,
      } = action.payload;
      const newLists = state.lists.slice();

      if (type === "list") {
        const list = newLists.splice(droppableIndexStart, 1);
        newLists.splice(droppableIndexEnd, 0, ...list);
      }

      if (droppableIdStart === droppableIdEnd && type !== "list") {
        const list = newLists.find((list) => list.id === droppableIdStart);
        const task = list.tasks.splice(droppableIndexStart, 1);
        list.tasks.splice(droppableIndexEnd, 0, ...task);
      }
      if (droppableIdStart !== droppableIdEnd) {
        const sourceList = newLists.find(
          (list) => list.id === droppableIdStart
        );
        const destlist = newLists.find((list) => list.id === droppableIdEnd);
        const task = sourceList.tasks.splice(droppableIndexStart, 1);
        destlist.tasks.splice(droppableIndexEnd, 0, ...task);
      }

      return { lists: newLists };
    }
    default:
      return state;
  }
};
