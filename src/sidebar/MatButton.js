import React, { PureComponent } from "react";

class MatButton extends PureComponent { 
  render() {
    return(
      <button id="matButton" className="sidebarButton"
              onMouseDown={this.props.handleMouseDown5}>mat & drikke</button>
    );
  }
}

export default MatButton;