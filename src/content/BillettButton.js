import React, { PureComponent } from "react";
import "./BillettButton.css";

class BillettButton extends PureComponent { 
  render() {
    // console.log("Rendering: billettButton");
    return(
      <div className="billettButton">
        <a target="_blank" rel="noopener noreferrer" href="https://bakkefestivalen.hoopla.no/sales/3347855109">billetter!</a>
      </div>
    );
  }
}

export default BillettButton;