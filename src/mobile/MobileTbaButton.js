import React, { PureComponent } from "react";

class MobileTbaButton extends PureComponent { 
  render() {
    return(
      <button id="mobileTbaButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown16}>Tba</button>
    );
  }
}

export default MobileTbaButton;