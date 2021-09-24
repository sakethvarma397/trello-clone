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
import { toggleTask } from "../actions/taskActions";
import styled from "styled-components";

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
`;
const TaskTitle = styled.div`
  overflow-wrap: anywhere;
`;
const Task = ({ text, id, index, description, dispatch, isPending }) => {
  const handleStatusChange = () => {
    dispatch(toggleTask(id, !isPending));
  };
  return (
    <Draggable draggableId={id} index={index} id={id}>
      {(provided) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card>
            <CardContent className={isPending ? "done" : "todo"}>
              <TaskMainContent>
                <TaskTitle>
                  <Typography>{text}</Typography>
                </TaskTitle>
                <TaskStatus>
                  <Checkbox onClick={handleStatusChange} checked={isPending} />
                </TaskStatus>
              </TaskMainContent>
              {description === "" ? <Icon>subject</Icon> : null}
            </CardContent>
          </Card>
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default connect()(Task);
