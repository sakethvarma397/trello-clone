import { ADD_BOARD, DELETE_BOARD } from "../utils/constants";
const boardsOrderReducer = (state = ["board-1", "board-2"], action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const { id } = action.payload;
      const newState = state.slice();
      newState.push(`board-${id}`);

      return newState;
    }

    case DELETE_BOARD: {
      const { boardId } = action.payload;
      const newState = state.filter((id) => id !== boardId);
      return newState;
    }

    default:
      return state;
  }
};

export default boardsOrderReducer;
