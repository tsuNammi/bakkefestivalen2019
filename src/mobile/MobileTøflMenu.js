import React, { Component } from "react";
import Tøfl from "../sidebar/artistBrowser/Tøfl";

class MobileTøflMenu extends Component {
  render() {
    var visibility12 = "hide";

    if (this.props.menuVisibility12) {
      visibility12 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility12
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileTøflMenu" className={mobileMenuClass}>
        <Tøfl/>
        <button onMouseDown={this.props.handleMouseDown12}>Tilbake</button>
      </div>
    );
  }
}

export default MobileTøflMenu;