import React from "react";
import Create from "./Create";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const List = ({ title, tasks, listId }) => {
  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <div
          className="list"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className="list-title">{title}</div>
          {tasks.map((task, index) => {
            return (
              <Task key={task.id} text={task.text} id={task.id} index={index} />
            );
          })}
          {provided.placeholder}
          <Create listId={listId} />
        </div>
      )}
    </Droppable>
  );
};
export default List;
