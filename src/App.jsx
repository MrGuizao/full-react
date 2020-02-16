import React, { Component } from "react";
import "./app.css";

import CoinFlip from "./state/ex01/CoinFlip";
import ColorBoard from "./state/ex02/ColorBoard";
import Board from "./state/ex03/Board";
import Form from "./forms/ex01/Form";
import Forme from "./forms/exemplo/Forme";
import Formulario from "./forms/exemplo2/Formulario";
import TodoList from "./forms/ex03/TodoList";
import TodoApp from "./hooks/ex01/TodoApp";
import ApiPlaceholder from "./hooks/ex02/ApiPlaceholder";

export default class App extends Component {
     render() {
          return (
               <div className="full">
                    <CoinFlip />
                    <ColorBoard />
                    <Board />
                    {/* FORM */}
                    <Form />
                    <Forme />
                    <Formulario />
                    <TodoList />
                    <h1>HOOKS</h1>
                    <TodoApp />
                    <ApiPlaceholder />
               </div>
          );
     }
}
