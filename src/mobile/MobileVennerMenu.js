import React, { Component } from "react";
import Venner from "../sidebar/artistBrowser/Venner";

class MobileVennerMenu extends Component {
  render() {
    var visibility15 = "hide";

    if (this.props.menuVisibility15) {
      visibility15 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility15
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileVennerMenu" className={mobileMenuClass}>
        <Venner/>
        <button onMouseDown={this.props.handleMouseDown15}>Tilbake</button>
      </div>
    );
  }
}

export default MobileVennerMenu;