import React, { PureComponent } from "react";

class InfoButton extends PureComponent { 
  render() {
    return(
      <button id="infoButton" className="sidebarButton"
              onMouseDown={this.props.handleMouseDown4}>info</button>
    );
  }
}

export default InfoButton;