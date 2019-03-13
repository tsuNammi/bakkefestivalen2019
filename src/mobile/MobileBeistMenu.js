import React, { Component } from "react";
import Beist from "../sidebar/artistBrowser/Beist";

class MobileBeistMenu extends Component {
  render() {
    var visibility13 = "hide";

    if (this.props.menuVisibility13) {
      visibility13 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility13
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileBeistMenu" className={mobileMenuClass}>
        <Beist/>
        <button onMouseDown={this.props.handleMouseDown13}>Tilbake</button>
      </div>
    );
  }
}

export default MobileBeistMenu;