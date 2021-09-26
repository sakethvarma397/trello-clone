import listsReducer from "../reducers/listsReducer";
import { initialState } from "../reducers/listsReducer";
import {
  ADD_LIST,
  ADD_TASK,
  DELETE_LIST,
  EDIT_LIST_TITLE,
  DELETE_TASK,
} from "../utils/constants";
describe("Lists reducer", () => {
  it("should return the initial state", () => {
    expect(listsReducer(undefined, {})).toMatchSnapshot();
  });

  it("should handle DELETE_LIST", () => {
    expect(
      listsReducer(initialState, {
        type: DELETE_LIST,
        payload: {
          listId: "list-1",
        },
      })
    ).toMatchSnapshot();
  });

  it("should handle ADD_LIST", () => {
    expect(
      listsReducer(initialState, {
        type: ADD_LIST,
        payload: {
          title: "Hello",
          id: "12",
        },
      })
    ).toMatchSnapshot();
  });

  it("should handle EDIT_LIST_TITLE", () => {
    expect(
      listsReducer(initialState, {
        type: EDIT_LIST_TITLE,
        payload: {
          listId: "list-1",
          listTitle: "New Title",
        },
      })
    ).toMatchSnapshot();
  });

  it("should handle ADD_TASK", () => {
    expect(
      listsReducer(initialState, {
        type: ADD_TASK,
        payload: {
          listId: "list-1",
          id: "4",
        },
      })
    ).toMatchSnapshot();
  });

  it("should handle DELETE_TASK", () => {
    expect(
      listsReducer(initialState, {
        type: DELETE_TASK,
        payload: {
          listId: "list-1",
          id: "task-1",
        },
      })
    ).toMatchSnapshot();
  });
});
