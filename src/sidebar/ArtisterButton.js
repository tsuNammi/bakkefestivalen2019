import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class ArtisterButton extends PureComponent { 
  render() {
    return(
      <button id="artisterButton" className="sidebarButton"
              onMouseDown={this.props.handleMouseDown}><Link to="/">artister</Link></button>
    );
  }
}

export default ArtisterButton;