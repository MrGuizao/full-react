import React, { Component } from "react";
import Main from "./Main";

export default class Forme extends Component {
     constructor(props) {
          super(props);
          this.state = {
               items: [{ name: "Guilherme", age: "24" }]
          };
     }

     addItem = item => {
          this.setState(st => ({
               items: [...st.items, item]
          }));
     };
     renderItem = () => {
          return (
               <ul>
                    {this.state.items.map(item => (
                         <li>
                              {item.name}: {item.age}
                         </li>
                    ))}
               </ul>
          );
     };

     render() {
          return ( 
               <div>
                    <h1>Render</h1>
                    {this.renderItem()}
                    <Main addItem={this.addItem} />
               </div>
          );
     }
}
