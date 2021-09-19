import React from "react";
import List from "./components/List";
import { connect } from "react-redux";
import Create from "./components/Create";

function App({ lists }) {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="list-container">
        {lists.map((list) => {
          return (
            <List
              listId={list.id}
              key={list.id}
              title={list.title}
              tasks={list.tasks}
            />
          );
        })}
        <Create list />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps)(App);
