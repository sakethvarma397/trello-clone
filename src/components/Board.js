import React from "react";
import { useParams } from "react-router";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import List from "./List";
import Create from "./Create";
import { sort } from "../actions/listActions";

const Board = ({ lists, boards, tasks, dispatch }) => {
  const { boardId } = useParams();
  const board = boards[boardId];
  const listOrder = board.lists;
  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    // When dropped outside the droppable
    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        type,
        boardId
      )
    );
  };

  return (
    <div className="content">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          <h1>{board.title}</h1>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                className="list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listOrder.map((listId, index) => {
                  const list = lists[listId];
                  if (list) {
                    //Pass in the corresponding tasks
                    const listTasks = list.tasks.map((taskId) => tasks[taskId]);

                    return (
                      <List
                        listId={list.id}
                        key={list.id}
                        title={list.title}
                        tasks={listTasks}
                        index={index}
                        boardId={boardId}
                      />
                    );
                  }
                  return null;
                })}
                {provided.placeholder}
                <Create list boardId={boardId} />
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    boards: state.boards,
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(Board);
