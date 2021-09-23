import { useState } from "react";
import { Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { addBoard } from "../actions/boardActions";

const CreateBoard = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <input
          onChange={handleChange}
          value={title}
          placeholder="Your boards title..."
          type="text"
          autoFocus
        />
      </form>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setIsEditing(false);
    dispatch(addBoard(title));
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="add-board">
      {isEditing ? (
        renderCreateBoard()
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <Icon>add</Icon>
          <p>Add new board..</p>
        </div>
      )}
    </div>
  );
};

export default connect()(CreateBoard);
