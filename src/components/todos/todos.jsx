import React, { Component } from "react";
import Completed from "../completed/completed";
import "./todos.scss";

class Todos extends Completed {
  state = {
    todos: [
      { name: "I feel Good" },
      { name: "Hello World" },
      { name: "My name is Muhammaddiyor" },
      { name: "GO HOME" },
      { name: "Nothing" },
    ],
  };

  handleRemove = (delTodoIdx) => {
    const todos = this.state.todos.filter((todo, idx) => delTodoIdx !== idx);
    this.setState({ todos });
  };

  renderTodo = (event) => {
    const todos = this.state.todos;
    if (event.key === "Enter" && event.target.value != "") {
      const todo = { name: event.target.value };
      todos.push(todo);
      event.target.value = "";
    }
    this.setState({ todos });
  };

  completeTodo(array, index) {
    this.handleRemove(index);
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="todos">
          <h2>Todo List</h2>
          {todos.map((todo, idx) => (
            <div key={todo.name} className="todo">
              <p>{todo.name}</p>
              <div className="btn">
                <button
                  className="btn-complete"
                  onClick={() => this.completeTodo(todo, idx)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  onClick={() => this.handleRemove(idx)}
                  className="btn-del"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          ))}
          <div className="input-section">
            <input
              onKeyPress={this.renderTodo}
              placeholder="Add Todo ..."
              type="text"
            />
          </div>
        </div>
        <Completed />
      </div>
    );
  }
}

export default Todos;
