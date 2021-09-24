import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Board from "../components/Board";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import styled from "styled-components";

const Workspace = styled.div`
  display: grid;
  grid-template-columns: 200px 100%;
  grid-template-rows: auto;
  height: 96vh;
  width: max-content;
  font-family: "Roboto";
  font-size: medium;
`;
const AppRouter = ({ boardsOrder, boards }) => {
  return (
    <Workspace>
      <BrowserRouter>
        <Sidebar boardsOrder={boardsOrder} boards={boards} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/boards/:boardId" component={Board} />
        </Switch>
      </BrowserRouter>
    </Workspace>
  );
};

const mapStateToProps = (state) => {
  return {
    boards: state.boards,
    boardsOrder: state.boardsOrder,
  };
};

export default connect(mapStateToProps)(AppRouter);
