import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ boardsOrder, boards }) => {
  const links = boardsOrder.map((id) => {
    return (
      <Link key={id} to={`/boards/${id}`}>
        {boards[id].title}
      </Link>
    );
  });
  return <div className="sidebar">{links}</div>;
};

export default Sidebar;
