import { Button, Card, TextareaAutosize } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import { addList } from "../actions/listActions";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";
import styled from "styled-components";

const CreateList = styled.div`
  background-color: #3c3d3d;
  border-radius: 3px;
  padding-left: 10px;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 300px;
  min-width: 300px;
  align-items: center;
  cursor: pointer;
`;
const CreateTask = styled.div`
  opacity: 0.5;
  color: #3c3d3d;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 50px;
  cursor: pointer;
`;

const FormInput = styled.div`
  min-height: 80px;
  min-width: 272px;
  padding: 8px;
  textarea {
    border: none;
    width: 95%;
    resize: none;
    outline: none;
    overflow: hidden;
  }
`;
const FormSubmit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  button {
    background-color: #5aac44;
    color: white;
  }
`;

const Create = ({ list, listId, dispatch, boardId }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [text, setText] = useState("");

  const renderForm = () => {
    const buttonTitle = list ? "Add list" : "Add task";
    const placeholder = list
      ? "Enter list title.."
      : "Enter name for the task..";
    return (
      <div>
        <Card>
          <FormInput>
            <TextareaAutosize
              onChange={(e) => setText(e.target.value)}
              placeholder={placeholder}
              value={text}
              onBlur={closeForm}
              autoFocus
              maxLength={list ? 60 : 160}
            ></TextareaAutosize>
          </FormInput>
        </Card>
        <FormSubmit>
          <Button
            variant="contained"
            onMouseDown={list ? handleAddList : handleAddTask}
          >
            {buttonTitle}
          </Button>
          <Icon>close</Icon>
        </FormSubmit>
      </div>
    );
  };

  const handleAddList = (e) => {
    if (text.match(/^[0-9a-zA-Z]+$/)) {
      setText("");
      dispatch(addList(text, boardId));
    }
  };

  const handleAddTask = () => {
    if (text) {
      setText("");
      dispatch(addTask(text, listId));
    }
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const renderAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another task";
    return (
      <>
        {list ? (
          <CreateList onClick={openForm}>
            <Icon>add</Icon>
            <p>{buttonText}</p>
          </CreateList>
        ) : (
          <CreateTask onClick={openForm}>
            <Icon>add</Icon>
            <p>{buttonText}</p>
          </CreateTask>
        )}
      </>
    );
  };

  return isFormOpen ? renderForm() : renderAddButton();
};

export default connect()(Create);
