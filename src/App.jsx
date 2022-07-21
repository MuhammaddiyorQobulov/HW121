import Todos from "./components/todos/todos";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="container">
        <Todos />
      </div>
    </div>
  );
}

export default App;
