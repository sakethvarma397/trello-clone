import React from "react";
import { useParams } from "react-router";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import List from "./List";
import Create from "./Create";
import { sort } from "../actions/listActions";
import { deleteBoard, editTitle } from "../actions/boardActions";
import { Icon } from "@material-ui/core";
import { useHistory } from "react-router";
import styled from "styled-components";

const BoardHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgb(156, 156, 156);
  border-radius: 3px;
  margin-bottom: 10px;
`;

const BoardTitle = styled.div`
  padding: 5px;
  margin-left: 10px;
  font-size: 30px;
`;

const BoardContainer = styled.div`
  padding-left: 20px;
  width: 100%;
  height: 100%;
`;

const BoardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.div`
  grid-row: 1;
  grid-column: 2/3;
`;

const Board = ({ lists, boards, tasks, dispatch }) => {
  const { boardId } = useParams();
  const board = boards[boardId];
  const listOrder = board.lists;
  const history = useHistory();

  const [isEditing, setIsEditing] = React.useState(false);
  const [boardTitle, setBoardTitle] = React.useState(board.title);

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    // When dropped outside the droppable
    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        type,
        boardId
      )
    );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          value={boardTitle}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
          autoFocus
        ></input>
      </form>
    );
  };

  const handleBoardDelete = () => {
    dispatch(deleteBoard(boardId));
    history.push("/");
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBoardTitle(e.target.value);
  };

  const handleFinishEditing = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(editTitle(boardId, boardTitle));
  };

  return (
    <MainContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardContainer>
          <BoardHeader>
            {isEditing ? (
              renderForm()
            ) : (
              <>
                <BoardTitle onClick={() => setIsEditing(true)}>
                  {board.title}
                </BoardTitle>
                <div className="board-delete" onClick={handleBoardDelete}>
                  <Icon>delete_outline</Icon>
                </div>
              </>
            )}
          </BoardHeader>

          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <BoardContent
                className="board-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listOrder.map((listId, index) => {
                  const list = lists[listId];
                  if (list) {
                    //Pass in the corresponding tasks
                    const listTasks = list.tasks.map((taskId) => tasks[taskId]);

                    return (
                      <List
                        listId={list.id}
                        key={list.id}
                        title={list.title}
                        tasks={listTasks}
                        index={index}
                        boardId={boardId}
                      />
                    );
                  }
                  return null;
                })}
                {provided.placeholder}
                <Create list boardId={boardId} />
              </BoardContent>
            )}
          </Droppable>
        </BoardContainer>
      </DragDropContext>
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    boards: state.boards,
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(Board);
