import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Task = ({ text }) => {
  return (
    <Card className="task">
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
