import React, { PureComponent } from "react";

class MobileTøflButton extends PureComponent { 
  render() {
    return(
      <button id="mobileTøflButton" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown12}>TØFL</button>
    );
  }
}

export default MobileTøflButton;