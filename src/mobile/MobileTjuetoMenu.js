import React, { PureComponent } from "react";
import Tjueto from "../sidebar/artistBrowser/22";

class MobileTjuetoMenu extends PureComponent {
  render() {
    var visibility10 = "hide";

    if (this.props.menuVisibility10) {
      visibility10 = "show";
    }

    let mobileMenuClass = [
      'mobileSlideMenu',
      visibility10
    ]
    mobileMenuClass = mobileMenuClass.join(' ')

    return (
      <div id="mobileTjuetoMenu" className={mobileMenuClass}>
        <Tjueto/>
        <button onMouseDown={this.props.handleMouseDown10}>Tilbake</button>
      </div>
    );
  }
}

export default MobileTjuetoMenu;