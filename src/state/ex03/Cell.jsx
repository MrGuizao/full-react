import React, { Component } from "react";

export default class Cell extends Component {
     constructor(props) {
          super(props);
     }

     handleClick = evt => {
          this.props.flipCellAroundMe();
     };
     render() {
          let classes = "Cell" + (this.props.isLit ? "Cell-lit" : "");
          return <td className={classes} onClick={this.handleClick} />;
     }
}
