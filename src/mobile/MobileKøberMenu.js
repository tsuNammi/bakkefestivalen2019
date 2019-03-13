import React, { Component } from "react";
import Køber from "../sidebar/artistBrowser/Køber";

class MobileKøberMenu extends Component {
  render() {
    var visibility14 = "hide";

    if (this.props.menuVisibility14) {
      visibility14 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility14
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileKøberMenu" className={mobileMenuClass}>
        <Køber/>
        <button onMouseDown={this.props.handleMouseDown14}>Tilbake</button>
      </div>
    );
  }
}

export default MobileKøberMenu;