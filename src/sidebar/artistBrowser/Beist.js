import React, { Component } from "react";
import beistPic from '../../images/artister/BEIST.jpg';

class Beist extends Component {
  render() {
    return(
      <div>
        <img src={beistPic} alt="beist"></img>
        <p>
          <strong>
          BEIST spiller energisk og fengende skranglepop med et fantasifullt tekstunivers fylt av såre og humoristiske historier fra Trøndelag. Det har vært et forrykende første år for bandet, som har hatt 3 singler på Spotify's Norway Viral 50 spilleliste, og nylig rundet 1 million streams på sin første singel “Råne-Ræser”. 
          </strong>
        </p>
        <p>
        Bandet startet samarbeid med Livegruppen booking i februar, og har siden det hatt et travelt konsertår som toppet seg med konsert i Oslo Spektrum 9. november, sammen med noen av landets største liveband. Namdalsavisa ga terningkast 5 til debutalbumet og kalte det “befriende uhøytidelig fra nye trønderfavoritter”. 
        </p>
        <p>
        Nea Radio trakk frem BEIST og Åge & Sambandet som høydepunkter under Tydalsfestivalen i sommer. Trønder-Avisa var imponert over bandet som dro fullt hus allerede som første band ut på årets Sjørock på Ekne, “Beist åpnet med et smell”. BEIST ga ut debutalbumet “Dans som en idiot” i mai, og i januar går bandet i studio for å spille inn sitt andre album. 
        </p>
        <p>
        Bandmedlemmer:<br></br>
        Arne Wormdal - Vokal og banjo<br></br>
        Ole Jonas Storli - Trekkspill / trøorgel<br></br>
        Jon Krogstad – Kontrabass<br></br>
        Sondre Mikalsen - Trommer<br></br>
        Simen Løberg - Vokal og mandolin<br></br>
        Ragnhild Haugdal - Vokal og gitar
        </p>
      </div>
    );
  }
}

export default Beist;