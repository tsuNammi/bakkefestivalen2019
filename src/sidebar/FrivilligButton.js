import React, { PureComponent } from "react";

class FrivilligButton extends PureComponent { 
  render() {
    return(
      <button id="frivilligButton" className="sidebarButton"
              onMouseDown={this.props.handleMouseDown3}>frivillig</button>
    );
  }
}

export default FrivilligButton;