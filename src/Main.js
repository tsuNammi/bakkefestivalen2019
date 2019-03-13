import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Content from "./content/Content";
import ArtisterButton from "./sidebar/ArtisterButton";
import ArtisterMenu from "./sidebar/ArtisterMenu";
import ProgramButton from "./sidebar/ProgramButton";
import ProgramMenu from "./sidebar/ProgramMenu";
import FrivilligButton from "./sidebar/FrivilligButton";
import FrivilligMenu from "./sidebar/FrivilligMenu";
import InfoButton from "./sidebar/InfoButton";
import InfoMenu from "./sidebar/InfoMenu";
import MatButton from "./sidebar/MatButton";
import MatMenu from "./sidebar/MatMenu";
import KompiserButton from "./sidebar/KompiserButton";
import KompiserMenu from "./sidebar/KompiserMenu";

import "./sidebar/Sidebar.css";

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false
    };
    
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseDown2 = this.handleMouseDown2.bind(this);
    this.handleMouseDown3 = this.handleMouseDown3.bind(this);
    this.handleMouseDown4 = this.handleMouseDown4.bind(this);
    this.handleMouseDown5 = this.handleMouseDown5.bind(this);
    this.handleMouseDown6 = this.handleMouseDown6.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenu2 = this.toggleMenu2.bind(this);
    this.toggleMenu3 = this.toggleMenu3.bind(this);
    this.toggleMenu4 = this.toggleMenu4.bind(this);
    this.toggleMenu5 = this.toggleMenu5.bind(this);
    this.toggleMenu6 = this.toggleMenu6.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  handleMouseDown2(e) {
    this.toggleMenu2();
    e.stopPropagation();
  }

  handleMouseDown3(e) {
    this.toggleMenu3();
    e.stopPropagation();
  }

  handleMouseDown4(e) {
    this.toggleMenu4();
    e.stopPropagation();
  }

  handleMouseDown5(e) {
    this.toggleMenu5();
    e.stopPropagation();
  }

  handleMouseDown6(e) {
    this.toggleMenu6();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
      visible6: false,
      visible5: false,
      visible4: false,
      visible3: false,
      visible2: false
    });
  }

  toggleMenu2() {
    this.setState({
      visible2: !this.state.visible2,
      visible6: false,
      visible5: false,
      visible4: false,
      visible3: false,
      visible: false
    });
  }

  toggleMenu3() {
    this.setState({
      visible3: !this.state.visible3,
      visible6: false,
      visible5: false,
      visible4: false,
      visible2: false,
      visible: false
    });
  }

  toggleMenu4() {
    this.setState({
      visible4: !this.state.visible4,
      visible6: false,
      visible5: false,
      visible3: false,
      visible2: false,
      visible: false
    });
  }

  toggleMenu5() {
    this.setState({
      visible5: !this.state.visible5,
      visible6: false,
      visible4: false,
      visible3: false,
      visible2: false,
      visible: false
    });
  }

  toggleMenu6() {
    this.setState({
      visible6: !this.state.visible6,
      visible5: false,
      visible4: false,
      visible3: false,
      visible2: false,
      visible: false
    });
  }

  render() {
    return(
      <HashRouter>
        <div className="grid">
          <div className="sidebar">
            <div className="topContainer">
              <ul>
                <li id="gul1">&nbsp;</li>
                <li id="gul2">&nbsp;</li>
                <li id="gul3">&nbsp;</li>
                <li id="gul4">&nbsp;</li>
                <li id="gul5">&nbsp;</li>
                <li id="gul6">&nbsp;</li>
              </ul>
            </div>
            <div className="menuContainer">
              <ul>
                  <li className="artisterBtn"><ArtisterButton handleMouseDown={this.handleMouseDown}/></li>
                  <li className="programBtn"><ProgramButton handleMouseDown2={this.handleMouseDown2}/></li>
                  <li className="frivilligBtn"><FrivilligButton handleMouseDown3={this.handleMouseDown3}/></li>
                  <li className="infoBtn"><InfoButton handleMouseDown4={this.handleMouseDown4}/></li>
                  <li className="matBtn"><MatButton handleMouseDown5={this.handleMouseDown5}/></li>
                  <li className="kompiserBtn"><KompiserButton handleMouseDown6={this.handleMouseDown6}/></li>
              </ul>
              <div className="social">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bakkefestivalen"><i className="fab fa-2x fa-facebook"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC8f6T599OYzFufguqiQuC5A"><i className="fab fa-2x fa-youtube-square"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bakkefestivalen"><i className="fab fa-2x fa-instagram"></i></a>
                <a id="spotify" target="_blank" rel="noopener noreferrer" href="https://spoti.fi/2rew73a"><i className="fab fa-2x fa-spotify"></i></a>
              </div>
            </div>
            <div className="bottomContainer">
            <ul>
                <li id="gul1">&nbsp;</li>
                <li id="gul2">&nbsp;</li>
                <li id="gul3">&nbsp;</li>
                <li id="gul4">&nbsp;</li>
                <li id="gul5">&nbsp;</li>
                <li id="gul6">&nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="contentContainer">
            <Content/>
            <ArtisterMenu menuVisibility={this.state.visible}/>
            <ProgramMenu menuVisibility2={this.state.visible2}/>
            <FrivilligMenu menuVisibility3={this.state.visible3}/>
            <InfoMenu menuVisibility4={this.state.visible4}/>
            <MatMenu menuVisibility5={this.state.visible5}/>
            <KompiserMenu menuVisibility6={this.state.visible6}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;