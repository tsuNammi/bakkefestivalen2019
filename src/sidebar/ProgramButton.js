import React, { PureComponent } from "react";

class ProgramButton extends PureComponent { 
  render() {
    return(
      <button id="programButton" className="sidebarButton"
              onMouseDown={this.props.handleMouseDown2}>program</button>
    );
  }
}

export default ProgramButton;