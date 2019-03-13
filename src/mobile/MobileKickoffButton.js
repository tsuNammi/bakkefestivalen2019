import React, { PureComponent } from "react";

class MobileKickoffButton extends PureComponent { 
  render() {
    return(
      <button id="mobileKickoffButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown18}>Kickoff!</button>
    );
  }
}

export default MobileKickoffButton;