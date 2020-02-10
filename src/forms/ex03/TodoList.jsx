import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
     constructor(props) {
          super(props);

          this.state = {
               todos: [{ task: "Comprar soja" }]
          };
     }

     create = newTodo => {
          this.setState({ todos: [...this.state.todos, newTodo] });
     };

     render() {
          const todos = this.state.todos.map(todo => {
               return <Todo task={todo.task} />;
          });

          return (
               <div className="bordas">
                    <h1>TODO APP!</h1>
                    <NewTodoForm createTodo={this.create} />
                    <ul>
                         <li>{todos}</li>
                    </ul>
               </div>
          );
     }
}
