import { Component } from "react";
import "./completed.scss";
class Completed extends Component {
  render() {
    const { todos = [] } = this.props;
    return (
      <div className='com-todos'>
        <h2>Completed</h2>
        {todos.map(({ id, title }) => (
          <div key={id} className='com-todo'>
            <p>{title}</p>
            <i className='fa-solid fa-check-double' />
          </div>
        ))}
      </div>
    );
  }
}

export default Completed;
