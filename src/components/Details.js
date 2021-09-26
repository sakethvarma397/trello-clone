import {
  Typography,
  Box,
  Modal,
  Card,
  TextareaAutosize,
} from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Details = ({ children, open, handleClose, description }) => {
  const [text, setText] = useState(description ? description : "");
  return (
    <Modal
      open={open}
      onClose={(e) => handleClose(text)}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {children}
        </Typography>
        <Card>
          <FormInput>
            <TextareaAutosize
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter the description here.."
              value={text}
              autoFocus
              maxLength={800}
            ></TextareaAutosize>
          </FormInput>
        </Card>
      </Box>
    </Modal>
  );
};

export default Details;
