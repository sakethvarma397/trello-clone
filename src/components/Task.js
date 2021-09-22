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

const Task = ({ text, id, index, description, dispatch, isPending }) => {
  const handleStatusChange = () => {
    dispatch(toggleTask(id, !isPending));
  };
  return (
    <Draggable draggableId={id} index={index} id={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card className="task">
            <CardContent className={isPending ? "done" : "todo"}>
              <div className="task-main-content">
                <div className="task-title">
                  <Typography>{text}</Typography>
                </div>
                <div className="task-status">
                  <Checkbox onClick={handleStatusChange} checked={isPending} />
                </div>
              </div>
              {description === "" ? <Icon>subject</Icon> : null}
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(Task);
