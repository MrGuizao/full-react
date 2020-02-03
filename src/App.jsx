import React from "react";
import "./app.css";

import CoinFlip from "./state/ex01/CoinFlip";
import ColorBoard from "./state/ex02/ColorBoard";
import Board from "./state/ex03/Board";

function App() {
     return (
          <div className="app">
               <CoinFlip />
               <ColorBoard />
               <Board />
          </div>
     );
}

export default App;
