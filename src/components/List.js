import React from "react";
import Create from "./Create";
import Task from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { editTitle, deleteList } from "../actions/listActions";
import { connect } from "react-redux";
import { Icon } from "@material-ui/core";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  width: 300px;
  padding: 10px;
  height: fit-content;
  margin: 0 8px 0 0;
  cursor: default;
`;

const ListDetails = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const ListTitle = styled.div`
  font-size: larger;
  font-weight: bold;
  cursor: pointer;
`;
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
              <ListContainer>
                {isEditing ? (
                  renderForm()
                ) : (
                  <ListDetails onClick={() => setIsEditing(true)}>
                    <ListTitle>{listTitle}</ListTitle>
                    <Icon className="list-delete" onClick={handleDeleteList}>
                      delete_outline
                    </Icon>
                  </ListDetails>
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
                        listId={listId}
                      />
                    );
                  })}
                  {provided.placeholder}
                  <Create listId={listId} boardId={boardId} />
                </div>
              </ListContainer>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
export default connect()(List);
