import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
     constructor(props) {
          super(props);
          this.state = {
               todos: []
          };
     }

     create = newTodo => {
          this.setState({ todos: [...this.state.todos, newTodo] });
     };
     remove = id => {
          this.setState({ todos: this.state.todos.filter(t => t.id !== id) });
     };

     render() {
          const todos = this.state.todos.map(todo => {
               return (
                    <Todo
                         key={todo.id}
                         task={todo.task}
                         id={todo.id}
                         removeTodo={this.remove}
                    />
               );
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
