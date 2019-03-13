import React, { Component } from "react";
import køberPic from '../../images/artister/KØBER.jpg';

class Køber extends Component {
  render() {
    return(
      <div>
        <img src={køberPic} alt="køber"></img>
        <p>
          <strong>
          Skreddersydde beats blander sømløst sammen samples, synther og live instrumentasjon og legger lydteppet for KØBERs tekstunivers. Som artister flest liker ikke rapperen KØBER å bli putta i bås, men la oss gjøre det likevel. Bland sammen Ivan Ave, Kendrick Lamar, Gatas Parlament og Franz Kafka i en blender så har du en god dose KØBER-inspo. I oktober slapp han <i>Tvangstrøye EP</i> som over fire spor beveger seg innom temaer som politikk, angst, identitet og oppvekst, som sammen gir et innblikk i Nesoddingens verdenssyn.
          </strong>
        </p>
        <p>
        Flere av låtene ble anbefalt av Urørt, blant annet <i>Hang</i> som i følge P3 “har god historiefortelling og en veldig fengende beat.” Sneak Peek Magasin omtaler singelen <i>Ingenting</i> som “en behagelig perle av en låt som tar opp et tema som berører oss alle.” 
        </p>
        <p>
        KØBER spiller for tiden med et liveband som sørger for et organisk og energisk liveshow med elementer fra jazz og funk. KØBERs unike tilstedeværelse og energinivå på scenen er absolutt noe som bør oppleves.
        </p>
      </div>
    );
  }
}

export default Køber;