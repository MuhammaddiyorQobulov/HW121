import React, { Component } from "react";
import "./completed.scss";

class Completed extends Component {
  state = {
    comTodos: [
      { name: "Excuse Me!" },
      { name: "Hello World" },
      { name: "My name is Muhammaddiyor" },
      { name: "How Are You" },
      { name: "What Can I Do For You" },
    ],
  };

  render() {
    const comTodos = this.state.comTodos;
    // this.state.comTodos.push(this.props.comTodo);
    return (
      <div className="com-todos">
        <h2>Completed</h2>
        {comTodos.map((item, idx) => (
          <div key={item.name} className="com-todo">
            <p>{item.name}</p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        ))}
      </div>
    );
  }
}

export default Completed;
