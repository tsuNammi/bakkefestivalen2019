import React, { Component } from "react";
import BillettButton from "./BillettButton";
import "./Content.css";

class Content extends Component {
  render() {
    return(
      <div className="content">
        <h2>BAKKEFESTIVALEN<br></br>lørdag 4. mai 2019</h2>
        <div className="ytWrapper">
          <iframe src="https://www.youtube.com/embed/duuXm9Zd9Lw" frameBorder="0" width="940" height="400" title="aftermovie" className="ytDesktop">
          </iframe>
          <iframe src="https://www.youtube.com/embed/duuXm9Zd9Lw" frameBorder="0" width="305.5" height="130" title="aftermovie" className="ytMobile">
          </iframe>          
        </div>
        <BillettButton/>
      </div>
    );
  }
};

export default Content;