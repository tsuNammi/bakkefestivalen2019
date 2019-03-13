import React, { PureComponent } from "react";

class MobileTba2Button extends PureComponent { 
  render() {
    return(
      <button id="mobileTba2Button" className="mobileSidebarButton"
              onMouseDown={this.props.handleMouseDown17}>Tba2</button>
    );
  }
}

export default MobileTba2Button;