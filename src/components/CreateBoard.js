import { useState } from "react";
import { Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { addBoard } from "../actions/boardActions";
import styled from "styled-components";

const FormError = styled.div`
  color: red;
  opacity: 0.9;
  padding-left: 6px;
  padding-bottom: 1px;
`;

const AddButton = styled.button`
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  width: 100%;
`;
const CreateBoard = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const letterNumber = /^[0-9a-zA-Z]+$/;
  const renderCreateBoard = () => {
    return (
      <div>
        {error !== "" ? <FormError>{error}</FormError> : null}
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
    <div>
      {isEditing ? (
        renderCreateBoard()
      ) : (
        <AddButton onClick={() => setIsEditing(true)}>
          <Icon>add</Icon>
          <p>Add new board..</p>
        </AddButton>
      )}
    </div>
  );
};

export default connect()(CreateBoard);
