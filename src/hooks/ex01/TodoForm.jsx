import React from "react";

export default function TodoForm({ addTodo, task }) {
     const handleSubmit = e => {
          e.preventDefault();
          addTodo(task);
     };
     const handleChange = e => {
          task = e.target.value;
     };

     return (
          <form onSubmit={handleSubmit}>
               <input
                    placeholder="Hooks todo..."
                    type="text"
                    name="task"
                    value={task}
                    onChange={handleChange}
               />
          </form>
     );
}
