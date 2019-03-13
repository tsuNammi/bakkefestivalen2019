import React, { PureComponent } from "react";

class KompiserButton extends PureComponent { 
  render() {
    return(
      <button id="kompiserButton" className="sidebarButton"
              onMouseDown={this.props.handleMouseDown6}>kompiser</button>
    );
  }
}

export default KompiserButton;