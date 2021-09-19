import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ text, id, index }) => {
  return (
    <Draggable draggableId={id} index={index} id={id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card className="task">
            <CardContent>
              <Typography>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
