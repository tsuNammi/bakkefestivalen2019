import React, { Component } from "react";
import "./Menu.css";
import "./MatMenu.css";

class MatMenu extends Component {
  render() {
    var visibility5 = "hide";

    if (this.props.menuVisibility5) {
      visibility5 = "show";
    }

    let menuClass = [
      'slideMenu',
      visibility5
    ]
    menuClass = menuClass.join(' ')

    return (
      <div id="matMenu" className={menuClass}>
        <h2>Mat & drikke</h2>
        <p>Mer informasjon kommer snart!</p>
        

      </div>
    );
  }
}

export default MatMenu;