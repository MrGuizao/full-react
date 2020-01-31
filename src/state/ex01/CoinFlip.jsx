import React, { Component } from "react";
import "./coinflip.css";
export default class CoinFlip extends Component {
     state = {
          img: "cara.jpg",
          plays: 0,
          cara: 0,
          coroa: 0
     };
     randomFlip = () => {
          let n = Math.round(Math.random() * 1) + 0;
          this.setState(st => {
               return { plays: st.plays + 1 };
          });
          if (n === 0) {
               this.setState(st => {
                    return { cara: st.cara + 1, img: "cara.jpg" };
               });
          } else {
               this.setState(st => {
                    return { coroa: st.coroa + 1, img: "coroa.jpg" };
               });
          }
          return n;
     };

     render() {
          const { img, plays, cara, coroa } = this.state;
          return (
               <div className="coinflip">
                    <h1>EXERCICIO 01 - STATE</h1>
                    <h2>Coin Flip</h2>
                    <img src={require(`./${img}`)} alt="" />
                    <p>Total de jogadas: {plays}</p>
                    <p>Cara: {cara}</p>
                    <p>Coroa: {coroa}</p>
                    <button onClick={this.randomFlip}>Click em mim</button>
               </div>
          );
     }
}
