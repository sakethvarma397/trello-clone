import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Board from "../components/Board";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
const AppRouter = ({ boardsOrder, boards }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar boardsOrder={boardsOrder} boards={boards} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/boards/:boardId" component={Board} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    boards: state.boards,
    boardsOrder: state.boardsOrder,
  };
};

export default connect(mapStateToProps)(AppRouter);
