import React, { useState } from "react";
import TodoList from "./TodoList";
import "./todoapp.css";
import TodoForm from "./TodoForm";

export default function TodoApp() {
     const initialState = [
          { id: 1, task: "Workship God", completed: false },
          { id: 2, task: "Workship my Ass", completed: false }
     ];
     const [todos, setTodos] = useState(initialState);

     const addTodo = newTodo => {
          setTodos([...todos, { id: Math.random(), task: newTodo, completed: false }]);
     };

     return (
          <div className="bordas">
               <h1>Todo App with hooks</h1>
               <TodoList todos={todos} />
               <TodoForm addTodo={addTodo}/>
          </div>
     );
}
