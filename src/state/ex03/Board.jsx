import React, { Component } from "react";
import "./board.css";
import "./cell.css";


import Cell from "./Cell";

export default class Board extends Component {
     static defaultProps = {
          nRows: 5,
          nCols: 5,
          changeLight: 0.25
     };
     constructor(props) {
          super(props);
          this.state = {
               hasWon: false,
               board: this.createBoard()
          };
     }

     createBoard = () => {
          let board = [];
          for (let y = 0; y < this.props.nRows; y++) {
               let row = [];
               for (let x = 0; x < this.props.nCols; x++) {
                    row.push(Math.random() < this.props.changeLight);
               }
               board.push(row);
          }
          return board;
     };

     flipCellAround = coord => {
          let { nCols, nRows } = this.props;
          let board = this.state.board;
          let [y, x] = coord.split("-").map(Number);

          function flipCell(y, x) {
               if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
                    board[y][x] = !board[y][x];
               }
          }
     };

     render() {
          let tblBoard = [];
          for (let y = 0; y < this.props.nRows; y++) {
               let row = [];
               for (let x = 0; x < this.props.nCols; x++) {
                    let coord = `${y}-${x}`;
                    row.push(
                         <Cell
                              key={coord}
                              isLit={this.state.board[y][x]}
                              flipCellAroundMe={() => this.flipCellAround(coord)}
                         />
                    );
               }
               tblBoard.push(<tr key={y}>{row}</tr>);
          }
          return (
               <table className="Board">
                    <tbody>{tblBoard}</tbody>
               </table>

               // <div class="container">
               //      <div class="neon">Neon </div>
               //      <div class="flux">Flux </div>
               // </div>
          );
     }
}
