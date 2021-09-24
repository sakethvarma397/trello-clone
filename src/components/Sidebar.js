import React from "react";
import { Link } from "react-router-dom";
import CreateBoard from "../components/CreateBoard";
import styled from "styled-components";

const SidebarContainer = styled.div`
  grid-row: 1;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 200px;
  background-color: #f1f1f1;

  overflow: auto;

  a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  }
  a:hover {
    background-color: #555;
    color: white;
  }
`;

const Sidebar = ({ boardsOrder, boards }) => {
  const links = boardsOrder.map((id) => {
    return (
      <Link key={id} to={`/boards/${id}`}>
        {boards[id].title}
      </Link>
    );
  });
  return (
    <SidebarContainer>
      <div>{links}</div>
      <CreateBoard />
    </SidebarContainer>
  );
};

export default Sidebar;
