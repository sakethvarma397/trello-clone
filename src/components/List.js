import React from "react";
import Create from "./Create";
import Task from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { editTitle, deleteList } from "../actions/listActions";
import { connect } from "react-redux";
import { Icon } from "@material-ui/core";
const List = ({ title, tasks, listId, index, dispatch, boardId }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [listTitle, setListTitle] = React.useState(title);

  const renderForm = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          value={listTitle}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
          autoFocus
        ></input>
      </form>
    );
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(editTitle(listId, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listId, boardId));
  };

  return (
    <Draggable draggableId={listId} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={listId}>
            {(provided) => (
              <div className="list">
                {isEditing ? (
                  renderForm()
                ) : (
                  <div className="list-main" onClick={() => setIsEditing(true)}>
                    <div className="list-title">{listTitle}</div>
                    <Icon className="list-delete" onClick={handleDeleteList}>
                      delete_outline
                    </Icon>
                  </div>
                )}
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map((task, index) => {
                    return (
                      <Task
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        index={index}
                        description={task.description}
                        isPending={task.isPending}
                      />
                    );
                  })}
                  {provided.placeholder}
                  <Create listId={listId} boardId={boardId} />
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
export default connect()(List);
