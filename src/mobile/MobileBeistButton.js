import React, { PureComponent } from "react";

class MobileBeistButton extends PureComponent { 
  render() {
    return(
      <button id="mobileBeistButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown13}>BEIST</button>
    );
  }
}

export default MobileBeistButton;