import React from "react";

export default function ColorBox({ color }) {
     return (
          <div className="boxcolor"
               style={{
                    backgroundColor: `rgb(${color()}, ${color()}, ${color()})`
               }}
          ></div>
     );
}
