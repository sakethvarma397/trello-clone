import React from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Icon,
  Typography,
} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import {
  deleteTask,
  editDescription,
  toggleTask,
} from "../actions/taskActions";
import styled from "styled-components";
import Details from "./Details";

const TaskContainer = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const TaskMainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TaskStatus = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const TaskTitle = styled.div`
  overflow-wrap: anywhere;
`;
const Task = ({
  text,
  id,
  index,
  description,
  dispatch,
  isPending,
  listId,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleStatusChange = (e) => {
    dispatch(toggleTask(id, !isPending));
    e.stopPropagation();
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleModalClose = (newText) => {
    setShowModal(false);
    if (newText !== description) {
      dispatch(editDescription(id, newText));
    }
  };

  const handleDelete = () => {
    setShowModal(false);
    dispatch(deleteTask(id, listId));
  };
  return (
    <Draggable draggableId={id} index={index} id={id}>
      {(provided) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card onClick={handleClick}>
            <CardContent className={isPending ? "done" : "todo"}>
              <TaskMainContent>
                <TaskTitle>
                  <Typography>{text}</Typography>
                </TaskTitle>
                <TaskStatus>
                  <Icon onClick={handleDelete}>delete_outline</Icon>
                  <Checkbox onClick={handleStatusChange} checked={isPending} />
                </TaskStatus>
              </TaskMainContent>
              {description ? <Icon>subject</Icon> : null}
            </CardContent>
          </Card>
          {showModal ? (
            <Details
              handleClose={handleModalClose}
              handleDelete={handleDelete}
              open={showModal}
              description={description}
            >
              <div>{text}</div>
            </Details>
          ) : null}
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default connect()(Task);
