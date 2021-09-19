import React from "react";
import List from "./components/List";
import { connect } from "react-redux";
import Create from "./components/Create";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "./actions/listActions";

function App({ lists, dispatch }) {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1>Welcome</h1>
        <div className="list-container">
          {lists.map((list) => {
            return (
              <List
                listId={list.id}
                key={list.id}
                title={list.title}
                tasks={list.tasks}
              />
            );
          })}
          <Create list />
        </div>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps)(App);
