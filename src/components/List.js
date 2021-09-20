import React from "react";
import Create from "./Create";
import Task from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { editTitle, deleteList } from "../actions/listActions";
import { connect } from "react-redux";
const List = ({ title, tasks, listId, index, dispatch }) => {
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
    dispatch(deleteList(listId));
  };

  return (
    <Draggable draggableId={String(listId)} index={index}>
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
                  <div onClick={() => setIsEditing(true)}>
                    <div className="list-title">{listTitle}</div>
                    <button onClick={handleDeleteList}>Delete</button>
                  </div>
                )}

                <div></div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map((task, index) => {
                    return (
                      <Task
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        index={index}
                        listId={listId}
                        description={task.description}
                        isPending={task.isPending}
                      />
                    );
                  })}
                  {provided.placeholder}
                  <Create listId={listId} />
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
