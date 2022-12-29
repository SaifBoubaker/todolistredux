import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: Math.random(), task: "Learn Redux Toolkit", isDone: false },
      { id: Math.random(), task: "Learn NodeJs", isDone: false },
    ],
  },
  reducers: {
    Addtodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export default TodoSlice.reducer;
export const { Addtodo } = TodoSlice.actions;
