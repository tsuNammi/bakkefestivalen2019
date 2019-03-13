import React, { Component } from "react";
import etterfest from '../../images/etterfest.jpg';

class Etterfest extends Component {
  render() {
    return(
      <div className="etterFest">
        <img alt="etterfest" src={etterfest}></img>
        <p>WOOP! Bakkefestivalen 2019 og Lokal Klubb teamer opp for en skikkelig lokal etterfest når lysene slukkes i Bakken lørdag 4. mai! <span role="img" aria-label="firework">💥</span> I den anledning har vi sammen hentet Melkeveien og DJ Strangefruit for en skikkelig tight avslutning på årets festival! <span role="img" aria-label="fire">🔥</span><span role="img" aria-label="policelights">🚨</span></p>
        <p>
          <a href="https://www.facebook.com/lokalbar.trhm/" target="_blank" rel="noopener noreferrer">Lokal Klubb</a><br></br>
          ID: 20 år<br></br>
          CC m/ festivalpass: 100,-<br></br>
          CC u/ festivalpass: 150,-
        </p>
        <p>
          <a href="https://www.facebook.com/Melkeveien-316054002278234/" target="_blank" rel="noopener noreferrer"><strong>MELKEVEIEN</strong></a><br></br>
          er alter egoet til Hamar-baserte Kristian Møller Johansen. Ut over det å ha en solid merittliste som soloartist i både inn og utland, blir også tidvis Melkeveien et trehodet troll med slagverk, perkusjon og enda flere synthesizere. En besetning som tydeligvis fungerer godt da blant andre P3 var over seg av begeistring etter klubbdagen under Øyafestivalen i 2016, hvor de mente Melkeveien var et av veldig få band som stakk seg frem. Melkeveiens singel "Peter Pan Death Wish" ble i 2014 nevnt som "one of the best tracks around" av The Times, og var senest nå i vinter soundtracket i traileren til «You Were Never Really Here» med Joaquin Phoenix i hovedrollen. Melkeveiens bandbesetning har etter slippet av «Homecoming" (13.04.18) jobbet iherdig med ferdigstillingen av EPen «Hockey Pizza» - som slippes fredag 8. Mars 2019. På Lokal Klubb blir det et live-sett uten like! <span role="img" aria-label="clap">👏🏼</span>
        </p>
        <p>
          <strong>DJ STRANGEFRUIT</strong><br></br>
          Pål "Strangefruit" Nyhus er en bauta og levende legende innenfor norsk klubbkultur. Som DJ har han gjennom tre tiår geleidet generasjoner av danseglade med konstant supply av kvalitetsrik musikk i de fleste sjangere, samt gjort seg bemerket som plateprater i NRK Radio, DJ-musikant i Nils Petter Molværs Khmer ensemble, produsent og co-pilot med Mungolian Jetset. Pål er evigaktuell, med et enormt register å spille på, og vever settene sine gjennom klubbhistorien på kontemporært vis. Dette ble han nominert til Natt & Dags Oslopris for, i kategorien "Årets Liveopptreden" i forbindelse med hans oppdatering av "Mixed"-plata han opprinnelig ga ut i 1996, og som ble fremført på Øyafestivalen i 2015! 
        </p>
        <p>
        <a href="https://www.facebook.com/events/299309387450801/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-facebook"></i></a>   
        </p>
      </div>
    );
  }
}

export default Etterfest;