import React from "react";
import { Link } from "react-router-dom";
import CreateBoard from "../components/CreateBoard";

const Sidebar = ({ boardsOrder, boards }) => {
  const links = boardsOrder.map((id) => {
    return (
      <Link key={id} to={`/boards/${id}`}>
        {boards[id].title}
      </Link>
    );
  });
  return (
    <div className="sidebar">
      <div>{links}</div>
      <CreateBoard />
    </div>
  );
};

export default Sidebar;
