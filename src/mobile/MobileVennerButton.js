import React, { PureComponent } from "react";

class MobileVennerButton extends PureComponent { 
  render() {
    return(
      <button id="mobileVennerButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown15}>Venner</button>
    );
  }
}

export default MobileVennerButton;