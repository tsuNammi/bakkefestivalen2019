import React, { Component } from "react";
import Blomst from "../sidebar/artistBrowser/Blomst";

class MobileBlomstMenu extends Component {
  render() {
    var visibility11 = "hide";

    if (this.props.menuVisibility11) {
      visibility11 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility11
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileBlomstMenu" className={mobileMenuClass}>
        <Blomst/>
        <button onMouseDown={this.props.handleMouseDown11}>Tilbake</button>
      </div>
    );
  }
}

export default MobileBlomstMenu;