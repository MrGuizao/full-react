import React, { Component } from "react";

export default class Todo extends Component {
     handleRemove = () => {
          this.props.removeTodo(this.props.id);
     };

     render() {
          return (
               <ul>
                    <li>{this.props.task}</li>
                    <button>Edit</button>
                    <button onClick={this.handleRemove}>Delete</button>
               </ul>
          );
     }
}
