import React from "react";

export default function Box({ width, height, color }) {
     return (
          <div
               className="createbox"
               style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: `${color}`
               }}
          />
     );
}
