import React, { Component } from "react";

export default class Formulario extends Component {
     constructor(props) {
          super(props);
          this.state = { adress: "", number: "" };
     }

     changeNumber = e => {
          this.setState({ [e.target.name]: e.target.value });
     };
     submit = e => {
          e.preventDefault();
          this.props.enviar(this.state);
     };

     render() {
          return (
               <form onSubmit={this.submit} className="bordas">
                    <input
                         type="text"
                         name="adress"
                         value={this.state.adress}
                         onChange={this.changeNumber}
                         placeholder="Adress"
                    />
                    <input
                         placeholder="Number"
                         type="text"
                         name="number"
                         value={this.state.number}
                         onChange={this.changeNumber}
                    />
                    <button>Enviar</button>
               </form>
          );
     }
}
