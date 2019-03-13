import React, { PureComponent } from "react";

class MobileTjuetoButton extends PureComponent { 
  render() {
    return(
      <button id="mobileTjuetoButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown10}>22</button>
    );
  }
}

export default MobileTjuetoButton;