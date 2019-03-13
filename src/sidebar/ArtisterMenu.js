import React, { Component } from "react";
import {
  Route,
  Link
} from "react-router-dom";
import Home from "./artistBrowser/Home";
import Tjueto from "./artistBrowser/22";
import Blomst from "./artistBrowser/Blomst";
import Tøfl from "./artistBrowser/Tøfl";
import Køber from "./artistBrowser/Køber";
import Venner from "./artistBrowser/Venner";
import Beist from "./artistBrowser/Beist";
import Tba from "./artistBrowser/Tba";
import Tba2 from "./artistBrowser/Tba2";
import Kickoff from "./artistBrowser/Kickoff";
import Etterfest from "./artistBrowser/Etterfest";
import "./Menu.css";
import "./ArtisterMenu.css";
import MobileArtists from "../mobile/MobileArtists";

class ArtisterMenu extends Component {
  render() {
    // console.log("Rendering: ArtisterMenu");
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    let menuClass = [
      'slideMenu',
      visibility
    ]
    menuClass = menuClass.join(' ')

    return (
      // <div>
        <div id="artisterMenu" className={menuClass}>
          <div id="artistContainer">
            <ul id="artistList">
              <li><Link to="/22">22</Link></li>
              <li><Link to="/blomst">Blomst</Link></li>
              <li><Link to="/tøfl">TØFL</Link></li>
              <li><Link to="/beist">BEIST</Link></li>
              <li><Link to="/køber">KØBER</Link></li>
              <li><Link to="/venner">Venner</Link></li>
              <li><Link to="/tba">TBA</Link></li>
              <li><Link to="/tba2">TBA2</Link></li>
              <li></li>
              <li className="specialEvents"><Link to="/kickoff">Kickoff!</Link></li>
              <li className="specialEvents"><Link to="/etterfest">Etterfest</Link></li>
            </ul>
          </div>
          <div id="artistInfo">
            <Route exact path="/" component={Home}/>
            <Route path="/22" component={Tjueto}/>
            <Route path="/blomst" component={Blomst}/>
            <Route path="/tøfl" component={Tøfl}/>
            <Route path="/beist" component={Beist}/>
            <Route path="/køber" component={Køber}/>
            <Route path="/venner" component={Venner}/>
            <Route path="/tba" component={Tba}/>
            <Route path="/tba2" component={Tba2}/>
            <Route path="/kickoff" component={Kickoff}/>
            <Route path="/etterfest" component={Etterfest}/>
          </div>
          <MobileArtists/>
        </div>
      // </div>
    );
  }
}

export default ArtisterMenu;