import React from "react";
import { useDispatch } from "react-redux";
import { Completetodo, Deletetodo, Edittodo } from "../Redux/TodoSlice";
import UpdateForm from "./UpdateForm";

function Todo({ todo }) {
  let dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(Deletetodo(todo.id));
  };

  const completeHandler = () => {
    dispatch(Completetodo(todo.id));
  };

  const editHandler = () => {
    dispatch(Edittodo(todo.id));
  };

  return (
    <div>
      {todo.isDone ? (
        <div style={{ color: "green" }}>{todo.task} </div>
      ) : (
        <div style={{ color: "red" }}> {todo.task} </div>
      )}
      <div>
        {todo.isEdited && <UpdateForm todotask={todo.task} todoid={todo.id} />}
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={completeHandler}>
          {todo.isDone ? "Undone" : "Done"}
        </button>
        <button onClick={editHandler}>Edit</button>
      </div>
    </div>
  );
}

export default Todo;
