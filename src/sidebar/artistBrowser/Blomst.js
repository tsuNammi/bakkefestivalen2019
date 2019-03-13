import React, { Component } from "react";
import blomstPic from '../../images/artister/blomst.jpeg';

class Blomst extends Component {
  render() {
    return(
      <div>
        <img src={blomstPic} alt="blomst"></img>
        <p> 
          <strong>
          «Blomst IL» er en rett-fra-levra statusoppdatering fra midten av 20-åra som flere vil kjenne seg igjen i. Låtene er levert med en stor dose garasjepunk-energi og dønn ærlige tekster på norsk, fremført av et band som <i>«griper tak i deg fra første riff»</i> og med <i>«en av Norges beste rockevokalister»</i> bak mikrofonen. Med andre ord: fremtiden av norsk rock er i de beste hender med band som Blomst.
          </strong>
        </p>
        <p>
        Velkommen til «Blomst IL», garagepunkbandet <strong>Blomst</strong> sitt kommende album. I Blomst IL stilles ingen krav til talent, da sporten er selve livet og ingen er helt klar over hva som er reglene. Vi vet ikke hvordan, men med en god lagånd har vi tro på seier. Det oppfordres til offensivt spill mot normer og regler som forsøker å holde oss tilbake. Vi har hatt en dårlig sesong, men sammen er vi sterke. Det er på tide å reise seg fra benken, bli med på laget, og vinn ditt livs største kamp!
        </p>
        <p>
        Trondheimsbandet, som ble Osloband, leverer en ekte statusoppdatering fra midten av 20-årene. Tekstene tar tak i temaer som kroppspress, kjærlighet, flinke piker og sorg. Ida Dorthea Horpestad, og resten av Blomst byr på et unikt og ærlig innblikk i hva som foregår bak smilet til en ung voksen.
        </p>
        <p>
          <i>«Teppet falt da jeg traff midten av 20-åra. Det er så mye penger og makt å hente på å overbevise andre om at de ikke er nok. Det provoserer meg sterkt. Vi skjuler oss bak et glansbilde av et plaster. Her er det bare å rive av, og la det stå til.»</i>
          <br></br>- Ida Dorthea Horpestad
        </p>
        <p>
          Albumet er spilt inn i Taakeheimen studio i Oslo, med Morten Øby.
        </p>
      </div>
    );
  }
}

export default Blomst;