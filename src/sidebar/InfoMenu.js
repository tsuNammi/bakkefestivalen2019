import React, { Component } from "react";
import "./Menu.css";
import "./InfoMenu.css";
import kart from '../images/kart.png' 
// import kart2 from '../images/kart2.png' 

class InfoMenu extends Component {
  render() {
    var visibility4 = "hide";

    if (this.props.menuVisibility4) {
      visibility4 = "show";
    }

    let menuClass = [
      'slideMenu',
      visibility4
    ]
    menuClass = menuClass.join(' ')

    return (
      <div id="infoMenu" className={menuClass}>
        <h2>Informasjon</h2>
        <p>Tiden har kommet igjen for musikk- og miljøfestivalen Bakkefestivalen! I 2019 returnerer landets bratteste festival til Bakkegata lørdag 4. mai OG Møllenberg i Trondheim. Denne bakken omgjøres til en av de mest fargerike, koseligste og unike festivalområder - og kickstarte festivalsommeren i Midt-Norge!</p>
          <p>Musikk- og miljøfestivalen er en éndags-festival, blir arrangert første helga i mai og ble avholdt første gang i 2017. Festivalen er sjangeruavhengig, men fokuserer på trøndersk musikk eller artister med tilhørlighet til byen. Vi skal være en top-of-mind inspirasjonsarena for miljøinitiativer, organisasjoner og aktiviteter. Vi er opptatt av å stille spørsmål, og å sette miljøkampen i et positivt lys. Festivalen og foreningen bak har konkret verdier og standpunkt bak, men ønsker på ingen måte å peke fingre. Bakkefestivalen er en arena for inspirasjon og innovasjon, og skaper dette gjennom positive opplevelser for alle aldre.</p>
          <p>
            <strong>ÅPNINGSTIDER/ALDERSGRENSE</strong>
            <br></br>
            Lørdag 4. mai
            <br></br>
            Dagsprogram 10:00 - 15:00 (åpent for alle, gratis)
            <br></br>
            Kveldsprogram 16:00 - 22:45 (18-års grense, festivalpass)
            <br></br>
            Området er stengt mellom 15 og 16.
          </p>
          <span>
            <strong>BILLETTER</strong>
            <br></br>
            Dagsprogrammet er gratis og åpent for alle. For kveldsprogrammet selges det festivalpass til 399,- ved forhåndskjøp på nett.
            <br></br><br></br>
            <a target="_blank" rel="noopener noreferrer" href="https://bakkefestivalen.hoopla.no/sales/3248098352" id="billettLinky"><strong>Billetter kjøpes her!</strong> <i className="fas fa-lg fa-ticket-alt fa-spin"></i></a> Husk å være ute i god tid, vi har blitt utsolgt før festivalen starter før :-)
            <br></br><br></br>
            Dersom det fortsatt er billetter tilgjengelig på festivaldagen, vil de kunne kjøpes ved inngangen til 449,-. For å komme inn på festivalområdet på kveldstid må du ha et festivalarmbånd. Dette får du i billettboden ved inngangen til festivalområdet ved å vise gyldig billett. Da kan du entre og forlate festivalen som du vil.
          </span>
          <p>
            <strong>PROGRAM</strong>
            <br></br>
            Hele programmet kommer ut i løpet av april, men artister slippes fortløpende.
          </p>
          <p>
            <strong>ETTERFEST</strong>
            <br></br>
            Vi arrangerer etterfest på Lokal Klubb med Melkeveien + DJ Strangefruit! Rabattert cover til de med Bakkefestival-armbånd :-) <a href="https://www.facebook.com/events/299309387450801/" target="_blank" rel="noopener noreferrer">Link til Facebook-event finner du her!</a>
          </p>        
          <p>
            <strong>NABOINFO</strong>
            <br></br>
            Vi vil informere om mulig støy i Bakkegata denne helgen. Vi starter opprigg kl 08:00 fredag 3. mai og avslutter kl 23:00. Vi starter igjen lørdag 4. mai kl 08:00. Det vil være lydprøver og konserter utover dagen og siste konsert er ferdig kl 22:45.
            Området stenges kl 23:00. Vi setter i gang nedrigg av festivalområdet umiddelbart, hvor det i hovedsak vil være scenen som skal vekk. Dette skal vi prøve å få gjort så fort som mulig, med minst mulig støy. Nedrigg og opprydning avsluttes søndag formiddag.
            <br></br><br></br>
            Bakkegata (mellom Nedre Møllenberg og Kirkegata) blir også stengt i denne perioden. Beboere som mister / har behov for parkeringsplass som følge av dette, bes om å ta kontakt med oss. Vi sørger for gratis parkering på Bakklandet P-hus hele helgen. Naboer av festivalområdet får tilbud om rabatterte festivalpass til kveldsprogrammet, mens direkte naboer som får inngangspartiet sitt berørt får gratis adgang. De det gjelder skal vi prøve så godt å få kontakt med, men føler du at du mangler, så oppfordrer vi deg til å ta kontakt med oss! Nabovarsel går ut til berørt område og direkte naboer i begynnelsen av april, men kan også <a href="http://www.bakkefestivalen.no/nabovarsel" id="nabovarsel" target="_blank" rel="noopener noreferrer">lastes ned her.</a>
            <br></br><br></br>
            Om det skulle være noen spørsmål, kan du kontakte oss på <a href="mailto:post@bakkefestivalen.no">post@bakkefestivalen.no</a>, <a href="https://www.facebook.com/bakkefestivalen/" target="_blank" rel="noopener noreferrer">Facebook</a> eller vår nabotelefon 938 21 131 (bemannet fra mandag 1. mai til søndag 5. mai).
          </p>
          <p>
            <strong>BELIGGENHET</strong>
            <br></br>
            <img src={kart} alt="kart"></img>
            {/* <br></br>
            <img src={kart2} alt="kart2"></img> */}
          </p>
          <p>
            <strong>INFO FOR FUNKSJONSHEMMEDE</strong>
            <br></br>
            Vi aksepterer ledsagerbevis. Den som blir ledsaget kjøper vanlig pass, ledsager får festivalpass ved fremvisning av ledsagerbevis i billettbua ved inngangen. Området er rullestolvennlig. Det er også handikapptoaletter på området.
          </p>
          <p>
            <strong>MAT/DRIKKE</strong>
            <br></br>
            Av sikkerhetshensyn er det er ikke lov til å ha med egen mat og drikke. Det vil derimot være salg av mat og drikke inne på området. Her har vi med oss ulike aktører fra Trondheim og omegn som har et stort fokus på miljø og bærekraftighet. Noe for alle og enhver!
          </p>
          <p>
            <strong>AVFALL</strong>
            <br></br>
            Vi ber alle festivaldeltakere om å ta hensyn til miljø og nabolaget, ved å bruke avfallsdunker flittig! Disse er segmentert i forskjellige type avfall. En av våre samarbeidspartnere er Retura TRV, som bidrar til at vi får en mest mulig bærekraftig avfallshåndtering.
          </p>
          <p>
            <strong>INFORMASJON OM OMKJØRING/OMSKILTING</strong>
            <br></br>
            Fra og med fredag morgen vil Bakkegata være stengt for trafikk. Det vil bli omkjøring om Nonnegata / Nordre Berggate med tydelig skilting. All trafikk i Nedre Møllenberg gate og Kirkegata foregår som normalt. 
          </p>
          <p>
            <strong>SIKKERHET</strong>
            <br></br>
            Sikkerhetsvakter fra PCM med egne sanitetsfolk er tilstede under hele arrangementet. Vesker og ryggsekker vil bli undersøkt ved inngangen. Ørepropper fås gratis på festivalområdet, men hørselsvern for barn må medbringes selv.
            <br></br>Kan ikke medbringes inn på festivalområdet: 
            <br></br><br></br>
            – Dyr (kun ulovlig på kveldsprogram)
            <br></br>
            – Paraply
            <br></br>
            – Speilreflekskamera og videokamera (gjelder også GoPro)
            <br></br>
            – Selfiestick
            <br></br>
            – Medbrakt mat/drikke (tomme vannflasker på dagtid er greit - vannfyllestasjon i Bakken)
            <br></br>
            – Brannfarlige materialer
            <br></br>
            – Våpen eller andre gjenstander som kan skade deg selv eller andre
          </p>
          <p>
            <strong>FRIVILLIG/AKKREDITERING</strong>
            <br></br>
            Du kan melde deg som frivillig <a href="http://ark.pm/j2ZvX" target="_blank" rel="noopener noreferrer">her!</a> Akkrediterte kan avhente bånd i akkreditering/billettbua ved inngangen.
          </p>
          <p>
            <strong>PRESSEAKKREDITERING</strong>
            <br></br>
            Send mail til <a href="mailto:jon@bakkefestivalen.no">jon@bakkefestivalen.no</a> for å søke om presse- eller bransjeakkreditering.
          </p>
          <p>
            <strong>PARKERING</strong>
            <br></br>
            Lite offentlige parkeringsplasser ved selve festivalområdet, men Bakklandet P-hus (døgnåpent) er like ved.
          </p>
          <p>
            <strong>TRANSPORT</strong>
            <br></br>
            Festivalområdet er sentralt på Møllenberg og nås enklest til fots. Det er bysykkelstativ i Kirkegata et kvartal unna inngangen, og et ved Bakke Bro/Bakklandet P-Hus. Nærmeste busstopp er Bakkegata eller Festningsgata hvis du kommer fra Festningen.
          </p>
          <p>
            <strong>BETALING</strong>
            <br></br>
            Vi tar både kort og kontant.
          </p>
      </div>
    );
  }
}

export default InfoMenu;