import React, { Component } from "react";

export default class NewTodoForm extends Component {
     constructor(props) {
          super(props);
          this.state = { task: "" };
     }
     handleChange = e => {
          this.setState({ [e.target.name]: e.target.value });
     };
     handleSubmit = e => {
          e.preventDefault();
          this.props.createTodo(this.state);
          this.setState({ task: "" });
     };

     render() {
          return (
               <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Task: </label>
                    <input
                         type="text"
                         placeholder="New Task..."
                         name="task"
                         id="task"
                         value={this.state.task}
                         onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
               </form>
          );
     }
}
