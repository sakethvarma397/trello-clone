import { useState } from "react";
import { Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { addBoard } from "../actions/boardActions";

const CreateBoard = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const letterNumber = /^[0-9a-zA-Z]+$/;
  const renderCreateBoard = () => {
    return (
      <div>
        {error !== "" ? <div className="form-error">{error}</div> : null}
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <input
            onChange={handleChange}
            value={title}
            placeholder="Your boards title..."
            type="text"
            autoFocus
          />
        </form>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.match(letterNumber)) {
      setTitle("");
      setIsEditing(false);
      dispatch(addBoard(title));
    } else {
      setError("Invalid board name..");
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="add-board">
      {isEditing ? (
        renderCreateBoard()
      ) : (
        <button onClick={() => setIsEditing(true)}>
          <Icon>add</Icon>
          <p>Add new board..</p>
        </button>
      )}
    </div>
  );
};

export default connect()(CreateBoard);
