import { useSelector } from "react-redux";
import "./App.css";
import Add from "./Components/Add";
import TodoList from "./Components/TodoList";

function App() {
  const { todos } = useSelector((state) => state.todo);

  // const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="App">
      <h2>TODO LIST</h2>
      <Add />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
