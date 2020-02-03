import React, { Component } from "react";

export default class Cell extends Component {
     constructor(props) {
          super(props);
          this.handleClick = this.handleClick.bind(this);
     }
     handleClick(evt) {
          this.props.flipCellsAroundMe();
     }
     render() {
          let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");
          return <td className={classes} onClick={this.handleClick} />;
     }
}
