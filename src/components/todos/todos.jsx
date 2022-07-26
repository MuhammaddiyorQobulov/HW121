import React, { Component } from "react";
import Completed from "../completed/_completed";
import "./todos.scss";

const genID = () => Math.random().toString().substring(2, 8);
class Todos extends Completed {
  state = {
    todos: [
      { id: genID(), title: "I feel Good", isDone: false, isEdit: false },
      { id: genID(), title: "Hello World", isDone: false, isEdit: false },
      { id: genID(), title: "My Cat", isDone: false, isEdit: false },
    ],
    isEditStatus: false,
    selectedIdx: null,
    key: "first",
  };

  handleDelete = (selectedTodo) => {
    const todos = this.state.todos.filter((todo) => todo !== selectedTodo);
    this.setState({ todos });
  };

  handleAddTodo = (title) => {
    const todo = { title, id: genID(), isDone: false, isEdit: false };
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  handleDone(selectedTodo) {
    const selectedIdx = this.state.todos.findIndex(
      (todo) => todo === selectedTodo
    );
    const todos = [...this.state.todos];
    todos[selectedIdx].isDone = true;
    this.setState({ todos });
  }

  handleEdit(todo) {
    const { todos } = this.state;
    const selectedIdx = todos.findIndex((t) => t === todo);
    todos[selectedIdx].isEdit = true; // update

    this.setState({ todos, isEditStatus: true, selectedIdx });

    document.getElementById("title_input").value = todo.title; // input value change
  }

  handleEditTodo(title) {
    const { todos, selectedIdx } = this.state;

    const todo = { ...todos[selectedIdx], title, isEdit: false }; // update todo
    todos[selectedIdx] = todo;
    this.setState({ todos, isEditStatus: false, currentIdx: null });
  }

  render() {
    const { todos, key } = this.state;
    let notDoneTodos = [];
    const doneTodos = todos.filter((todo) => {
      if (todo.isDone) return true;
      notDoneTodos.push(todo);
    });

    return (
      <div>
        <div className='container'>
          <div className='todos'>
            <h2>Todo List</h2>
            {notDoneTodos.map((item) => (
              <div key={item.id} className='todo'>
                <p>{item.title}</p>
                <div className='btn'>
                  <button
                    disabled={item.isEdit}
                    className='btn-complete'
                    onClick={() => this.handleEdit(item)}>
                    <i className='fa-solid fa-highlighter' />
                  </button>
                  <button
                    disabled={item.isEdit}
                    className='btn-complete'
                    onClick={() => this.handleDone(item)}>
                    <i className='fa-solid fa-check' />
                  </button>
                  <button
                    disabled={item.isEdit}
                    className='btn-del'
                    onClick={() => this.handleDelete(item)}>
                    <i className='fa-solid fa-xmark' />
                  </button>
                </div>
              </div>
            ))}
            <div className='input-section'>
              <input
                id='title_input'
                onKeyPress={(e) => {
                  if (e.key === "Enter" && e.target.value.trim() !== "") {
                    if (this.state.isEditStatus)
                      this.handleEditTodo(e.target.value);
                    else this.handleAddTodo(e.target.value);
                    e.target.value = "";
                  }
                }}
                placeholder='Add Todo ...'
                type='text'
              />
            </div>
          </div>
          <Completed todos={doneTodos} />
        </div>
        <button
          onClick={() =>
            this.setState({ key: key === "first" ? "second" : "first" })
          }>
          toggle
        </button>
      </div>
    );
  }
}

export default Todos;
