import React, { Component } from "react";
import "./colorboard.css";
import ColorBox from "./ColorBox";

export default class ColorBoard extends Component {
     changeColor = () => {
          const rand = Math.round(Math.random() * 255) + 0;
          return rand;
     };

     render() {
          return (
               <div className="board">
                    {/* EXERCICIO 02 */}
                    <ColorBox color={this.changeColor} />
               </div>
          );
     }
}
