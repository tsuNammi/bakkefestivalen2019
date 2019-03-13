import React, { PureComponent } from "react";

class MobileBlomstButton extends PureComponent { 
  render() {
    return(
      <button id="mobileBlomstButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown11}>Blomst</button>
    );
  }
}

export default MobileBlomstButton;