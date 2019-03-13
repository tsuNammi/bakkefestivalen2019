import React, { PureComponent } from "react";

class MobileEtterfestButton extends PureComponent { 
  render() {
    return(
      <button id="mobileEtterfestButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown19}>Etterfest</button>
    );
  }
}

export default MobileEtterfestButton;