import React from "react";
import Create from "./Create";
import Task from "./Task";

const List = ({ title, tasks, listId }) => {
  return (
    <div className="list">
      <div className="list-title">{title}</div>
      {tasks.map((task) => {
        return <Task key={task.id} text={task.text} />;
      })}
      <Create listId={listId} />
    </div>
  );
};
export default List;
