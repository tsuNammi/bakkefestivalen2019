import React, { Component } from "react";
import Kickoff from "../sidebar/artistBrowser/Kickoff";

class MobileKickoffMenu extends Component {
  render() {
    var visibility18 = "hide";

    if (this.props.menuVisibility18) {
      visibility18 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility18
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileKickoffMenu" className={mobileMenuClass}>
        <Kickoff/>
        <button onMouseDown={this.props.handleMouseDown18}>Tilbake</button>
      </div>
    );
  }
}

export default MobileKickoffMenu;