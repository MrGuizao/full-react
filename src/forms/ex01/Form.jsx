import React, { Component } from "react";
import "./box.css";

import Box from "./Box";

export default class Form extends Component {
     state = {
          width: 50,
          height: 50,
          color: ""
     };

     createBox = e => {
          this.setState({ [e.target.name]: e.target.value });
     };
     handleSubmit = (e) => {
          e.preventDefault();

     }
     render() {
          const { width, height, color } = this.state;
          return (
               <form onSubmit={this.handleSubmit} className="formbox">
                    <label htmlFor="width">Width</label>
                    <input type="text" name="width" value={width} onChange={this.createBox}/>
                    <label htmlFor="height">height</label>
                    <input type="text" name="height" value={height} onChange={this.createBox}/>
                    <label htmlFor="color">color</label>
                    <input type="text" name="color" value={color} onChange={this.createBox}/>
                    <button>Criar</button>
                    <Box width={width} height={height} color={color} />
               </form>
          );
     }
}
