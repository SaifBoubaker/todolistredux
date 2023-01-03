import { useSelector } from "react-redux";
import "./App.css";
import Add from "./Components/Add";
import Filter from "./Components/Filter";
import TodoList from "./Components/TodoList";

function App() {
  const { todos } = useSelector((state) => state.todo);
  // const todos = useSelector((state) => state.todo.todos);

  const { FilterItems } = useSelector((state) => state.todo);

  return (
    <div className="App">
      <h2>TODO LIST</h2>
      <Filter />
      <br />
      <Add />
      <br />
      <TodoList
        todos={
          FilterItems === "Done"
            ? todos.filter((el) => el.isDone === true)
            : FilterItems === "Undone"
            ? todos.filter((el) => el.isDone === false)
            : todos
        }
      />
    </div>
  );
}

export default App;
