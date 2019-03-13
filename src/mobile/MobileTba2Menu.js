import React, { Component } from "react";
import Tba2 from "../sidebar/artistBrowser/Tba2";

class MobileTba2Menu extends Component {
  render() {
    var visibility17 = "hide";

    if (this.props.menuVisibility17) {
      visibility17 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility17
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileTba2Menu" className={mobileMenuClass}>
        <Tba2/>
        <button onMouseDown={this.props.handleMouseDown17}>Tilbake</button>
      </div>
    );
  }
}

export default MobileTba2Menu;