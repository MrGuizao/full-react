import React, { Component } from 'react';
import { Break } from './Break';

export default class Security extends Component {
     state = {
          nome: 'Guilherme',
          idade: 24,
          yes: true,
     }
     render() {
          return (
               <div className="bordas">
                    <Break nome={this.state.nome} idade={this.state.idade} yes={this.state.yes} />
               </div>
          )
     }
}
