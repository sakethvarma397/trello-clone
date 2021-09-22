import { Button, Card, TextareaAutosize } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import { addList } from "../actions/listActions";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";

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
        <Card className="form-input">
          <TextareaAutosize
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            value={text}
            onBlur={closeForm}
            autoFocus
          ></TextareaAutosize>
        </Card>
        <div className="form-submit">
          <Button
            variant="contained"
            onMouseDown={list ? handleAddList : handleAddTask}
          >
            {buttonTitle}
          </Button>
          <Icon>close</Icon>
        </div>
      </div>
    );
  };

  const handleAddList = () => {
    if (text) {
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
      <div className={list ? "create-list" : "create-task"} onClick={openForm}>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  return isFormOpen ? renderForm() : renderAddButton();
};

export default connect()(Create);
