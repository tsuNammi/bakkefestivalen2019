import React, { Component } from "react";
import "./Menu.css";
import "./ProgramMenu.css";

class ProgramMenu extends Component {
  render() {
    var visibility2 = "hide";

    if (this.props.menuVisibility2) {
      visibility2 = "show";
    }

    let menuClass = [
      'slideMenu',
      visibility2
    ]
    menuClass = menuClass.join(' ')

    return (
      <div id="programMenu" className={menuClass}>
        <h2>Program</h2>
        <p>Mer informasjon kommer snart!</p>
        {/* <div id="konsertProgram">
          <h3>Konserter</h3>
          <span></span>
            <span>12:00-12:30</span><span>FREDE GABRIEL</span>
            <span>13:00-13:30</span><span>HEARO</span>
            <span>14:00-14:30</span><span>Sør for Sahara</span>

            <span>16:30-17:15</span><span>The Sideways</span>
            <span>17:45-18:30</span><span>Oppkast ala Kart</span>
            <span>19:00-19:45</span><span>Resirkulert</span>
            <span>20:15-21:15</span><span>Hajk</span>
            <span>21:45-22:45</span><span>Frances Wave</span>
            <span>00:00-02:30</span><span>WAC @ Bror (50,-)</span>
            <span>00:00-02:30</span><span>Olle Abstract @ Diskoteket (50,-)</span>
        </div>
        <div id="aktivitetsProgram">
          <h3>Aktiviteter</h3>
          <span></span>
            <span>10:00-12:00</span><span>Basse</span>
            <span>11:00</span><span>Åpningsappell ved Møllenberg & Rosenborg Velforening</span>
            <span>12:30</span><span>Natur og Ungdom</span>
            <span>12:45</span><span>Tobias, Folkekjøkkenet</span>
            <span>13:30</span><span>Ola og Line, Vill Ved</span>
            <span>13:45</span><span>Vegar, NTNU</span>
            <span>14:30</span><span>Luretimen</span>
        </div> */}
      </div>
    );
  }
}

export default ProgramMenu;