import React from "react";
import "./app.css";

import CoinFlip from "./state/ex01/CoinFlip";
import ColorBoard from "./state/ex02/ColorBoard";
import Board from "./state/ex03/Board";
import Form from "./forms/ex01/Form";

function App() {
     return (
          <div className="full">
               <CoinFlip />
               <ColorBoard />
               <Board />
               {/* FORM */}
               <Form />
          </div>
     );
}

export default App;
