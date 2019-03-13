import React, { PureComponent } from "react";

class MobileKøberButton extends PureComponent { 
  render() {
    return(
      <button id="mobileKøberButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown14}>KØBER</button>
    );
  }
}

export default MobileKøberButton;