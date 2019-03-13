import React, { Component } from "react";
import "./Menu.css";
import "./FrivilligMenu.css";

class FrivilligMenu extends Component {
  render() {
    var visibility3 = "hide";

    if (this.props.menuVisibility3) {
      visibility3 = "show";
    }

    let menuClass = [
      'slideMenu',
      visibility3
    ]
    menuClass = menuClass.join(' ')

    return (
      <div id="frivilligMenu" className={menuClass}>
        <h2>Jobb som frivillig på Bakkefestivalen 2019!</h2>
        <a href="#" target="_blank" rel="noopener noreferrer" id="frivilligKnapp">Søk her!</a>
        {/* fjern når frivillig registrering åpner */}
        <p>Frivilligregistreringen åpner 18. mars!</p>
        <p>Når man skal arrangere festival så er det utrolig mye som må gjøres for at dagen skal bli perfekt. Vil du være med på å gjøre denne dagen best mulig?</p>
        <p>Ved å være frivillig blir du en del av den fantastiske gjengen som arrangerer festival. Du får gratis adgang til festivalen, og være med på to heidundrandes frivilligfester! I tillegg så ser ikke frivillig arbeid så verst ut på CVen heller. Men hva kan jeg jobbe med?</p>
          <p>
            <strong>BAR</strong>
              <br></br>
              Når du står i baren har du som ansvar å selge, tappe og servere ulike drikker vi serverer under festivalen. Dette innebærer blant 
              annet øl og vin, så du må ha fylt 18 år. For deg som liker salg, og er komfortabel med litt tempo i arbeidet.
          </p>
          <p>
            <strong>BILLETT</strong>
            <br></br>
            Når du jobber med salg og scanning av billetter, blir du gjestenes første møte med Bakkefestivalen. Her gjelder det å være blid og 
            imøtekommende.
          </p>
          <p>
            <strong>DEKOR</strong>
            <br></br>
            De som jobber med dekor har ansvaret for utsmykning av festivalområdet. Dette vil være kreativ utfoldelse i form av håndverk, maling, bygging o.l. Her er det en fordel å være litt handy, men ikke en forutsetning.
          </p>
          <p>
            <strong>NEDRIGG</strong>
            <br></br>
            Dette innebærer å være med å rigge ned festivalområdet etter festlighetene har gått sin gang. Her inngår det nedrigg av dekor samt scene- og arrangementteknisk rigg/utstyr like etter festivalområdet stenger. For deg som er aktiv og ikke bryr seg om en flekk på buksa! Det er muligens behov for nedrigg/opprydning søndagsformiddag.
          </p>
          <p>
            <strong>OPPRIGG</strong>
            <br></br>
            For at vi skal ha festival må vi ha alt av scene- og arrangementteknisk utstyr klart i forkant av festival. Det trenger vi hjelp av deg til. Her er det nyttig med litt erfaring fra denne typen arbeid, men ikke her en forutsetning. Også for deg som er aktiv og ikke bryr seg om en flekk på buksa.
          </p>
          <p>
            <strong>SANITET</strong>
            <br></br>
            Dette innebærer å være assistenter for en sanitetsleder fra sikkerhetsselskapet PCM under festivalen. Denne jobben krever at man enten studerer, har studert eller jobber innen medisin, syke- eller vernepleie.
          </p>
          {/* <p>
            <strong>SOLSKINN</strong>
            <br></br>
            Solskinnsgjengen er veldig viktige for at personell, frivillige og alle på området har det bra. Forpleining, catering og spredning av godt humør er viktigste ansvarsområder! Her kan man jobbe både før, under og etter festivalen.
          </p> */}
          <p>
            <strong>TRANSPORT</strong>
            <br></br>
            Vi trenger sjåfører med førerkort klasse B som kan være med å hente artister, gjester, catering og diverse utstyr som trengs. Din hjelp trengs både før, under og etter festivalen.
          </p>
          <p>
            <strong>VERTSKAP</strong>
            <br></br>
            Det er viktig med vakthold under festivaldagen ved inn/utgang, samt nødutganger. Her har du ansvar for, sammen med sikkerhetsselskap, å sørge for sikkerheten til samtlige på festivalområdet og å veilede folkemengden under en eventuell beredskap og/eller evakuering.
            <br></br><br></br>
            De som jobber under festivalen jobber én vakt, mens de som jobber i forkant eller etter, skal sannsynligvis jobbe 2 vakter. Meld deg på for å være med å arrangere Trondheims koseligste festival!
          </p>
          <br></br>
          <a href="#" target="_blank" rel="noopener noreferrer" id="frivilligKnapp2">Søk her!</a>

      </div>
    );
  }
}

export default FrivilligMenu;