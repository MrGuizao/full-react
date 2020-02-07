import React from "react";
import "./form.css";

export default class Main extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               name: "",
               age: ""
          };
     }

     handleSubmit = e => {
          e.preventDefault();
          this.props.addItem(this.state);
          this.setState({ [e.target.name]: "" });
     };
     handleInput = e => this.setState({ [e.target.name]: e.target.value });

     render() {
          return (
               <form className="exemplo" onSubmit={this.handleSubmit}>
                    <label htmlFor="nome">Nome: </label>
                    <input
                         type="text"
                         id="nome"
                         name="name"
                         value={this.state.name}
                         onChange={this.handleInput}
                    />
                    <label htmlFor="idade">Idade: </label>
                    <input
                         type="text"
                         name="age"
                         id="idade"
                         value={this.state.age}
                         onChange={this.handleInput}
                    />
                    <button>Submit</button>
               </form>
          );
     }
}
