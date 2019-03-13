import React, { Component } from "react";
import Tba from "../sidebar/artistBrowser/Tba";

class MobileTbaMenu extends Component {
  render() {
    var visibility16 = "hide";

    if (this.props.menuVisibility16) {
      visibility16 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility16
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileTbaMenu" className={mobileMenuClass}>
        <Tba/>
        <button onMouseDown={this.props.handleMouseDown16}>Tilbake</button>
      </div>
    );
  }
}

export default MobileTbaMenu;