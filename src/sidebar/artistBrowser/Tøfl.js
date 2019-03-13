import React, { Component } from "react";
import tøflPic from '../../images/artister/tøfl.jpg';

class Tøfl extends Component {
  render() {
    return(
      <div>
        <img src={tøflPic} alt="tøfl"></img>
        <p>
          <strong>
          TØFL (les: tøffel) fra Stavanger har ligget og vaket i det norske popvannet gjennom hele 2018. Debut-utgivelsen deres, EPen “Eg ska”, høstet god kritikk i alt fra Gaffa til Klassekampen, samtidig som tre av låtene ble listet på P3. Bandet fikk også den siste plassen på Øyafestivalen 2018, etter å ha vunnet Klubbøyas publikumspris.
          </strong>
        </p>
        <p>
          I en verden hvor mange lengter etter å føle reell tilstedeværelse, formidler ikke TØFL den retusjerte popvirkeligheten du har blitt så vant til. Bandets naivistiske og gjenkjennelige tekster, samt eksplosive, livlige live-show har resultert i en hurtig voksende fanbase som har ført til flere utsolgte klubbkonserter i Oslo, Trondheim og Stavanger.
        </p>
      </div>
    );
  }
}

export default Tøfl;