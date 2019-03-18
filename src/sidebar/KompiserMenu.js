import React, { Component } from "react";
import "./Menu.css";
import "./KompiserMenu.css";
import logoWitro from '../images/kompiser/logo-witro_bil.png';
import logoRetura from '../images/kompiser/logo-returatrv.png';
import logoFriFond from '../images/kompiser/logo-fri_fond.png';
import logoLokal from '../images/kompiser/logo-lokal.png';
import logoNKA from '../images/kompiser/logo-nka.png';
import logoPCM from '../images/kompiser/logo-pcm.png';
import logoScandic from '../images/kompiser/logo-scandic.png';
import logoSkipnes from '../images/kompiser/logo-skipnes.png';
import logoTrheimKommune from '../images/kompiser/logo-trheim_kommune.png';
import logoTrheimLyd from '../images/kompiser/logo-trheim_lyd.png';
import logoTtun from '../images/kompiser/logo-ttun.png';
import logoBmns from '../images/kompiser/logo-bmns.png';

class KompiserMenu extends Component {
  render() {
    var visibility6 = "hide";

    if (this.props.menuVisibility6) {
      visibility6 = "show";
    }

    let menuClass = [
      'slideMenu',
      visibility6
    ]
    menuClass = menuClass.join(' ')

    return (
      <div id="kompiserMenu" className={menuClass}>
          <a href="https://www.witro.no/" target="_blank" rel="noopener noreferrer"><img src={logoWitro} alt="Witro Bil logo"></img></a>
          <a href="https://retura.no/" target="_blank" rel="noopener noreferrer"><img src={logoRetura} alt="Retura TRV logo"></img></a>
          <a href="http://www.bmns.no/" target="_blank" rel="noopener noreferrer"><img src={logoBmns} alt="BMNS logo"></img></a>
          <a href="https://www.trondheim.kommune.no/" target="_blank" rel="noopener noreferrer"><img src={logoTrheimKommune} alt="Trondheim Kommune logo"></img></a>
          <a href="https://www.frifond.no/" target="_blank" rel="noopener noreferrer"><img src={logoFriFond} alt="Fri Fond logo"></img></a>
          <a href="https://www.facebook.com/lokalbar.trhm/" target="_blank" rel="noopener noreferrer"><img src={logoLokal} alt="Lokal logo"></img></a>
          <a href="https://www.konsertarrangor.no/" target="_blank" rel="noopener noreferrer"><img src={logoNKA} alt="NKA logo"></img></a>
          <a href="http://pcm-as.no/" target="_blank" rel="noopener noreferrer"><img src={logoPCM} alt="PCM logo"></img></a>
          <a href="https://www.scandichotels.no/" target="_blank" rel="noopener noreferrer"><img src={logoScandic} alt="Scandic logo"></img></a>
          <a href="http://skipnes-gruppen.no/kommunikasjon/" target="_blank" rel="noopener noreferrer"><img src={logoSkipnes} alt="Skipnes logo"></img></a>
          <a href="http://www.trondheimlyd.no/" target="_blank" rel="noopener noreferrer"><img src={logoTrheimLyd} alt="Trondheim Lyd logo"></img></a>
          <a href="http://www.trondertun.no/" target="_blank" rel="noopener noreferrer"><img src={logoTtun} alt="Trøndertun logo"></img></a>
      </div>
    );
  }
}

export default KompiserMenu;