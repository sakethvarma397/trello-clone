import React from "react";
import List from "./components/List";
import { connect } from "react-redux";
import Create from "./components/Create";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "./actions/listActions";

function App({ lists, dispatch }) {
  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        type
      )
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1>Welcome</h1>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => {
                return (
                  <List
                    listId={list.id}
                    key={list.id}
                    title={list.title}
                    tasks={list.tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
              <Create list />
            </div>
          )}
        </Droppable>
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
