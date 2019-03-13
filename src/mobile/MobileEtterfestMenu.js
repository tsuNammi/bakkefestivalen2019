import React, { Component } from "react";
import Etterfest from "../sidebar/artistBrowser/Etterfest";

class MobileEtterfestMenu extends Component {
  render() {
    var visibility19 = "hide";

    if (this.props.menuVisibility19) {
      visibility19 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility19
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileEtterfestMenu" className={mobileMenuClass}>
        <Etterfest/>
        <button onMouseDown={this.props.handleMouseDown19}>Tilbake</button>
      </div>
    );
  }
}

export default MobileEtterfestMenu;