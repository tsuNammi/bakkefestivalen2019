import React, { Component } from "react";
import MobileTjuetoButton from "./MobileTjuetoButton";
import MobileBlomstButton from "./MobileBlomstButton";
import MobileTøflButton from "./MobileTøflButton";
import MobileBeistButton from "./MobileBeistButton";
import MobileKøberButton from "./MobileKøberButton";
import MobileVennerButton from "./MobileVennerButton";
import MobileTbaButton from "./MobileTbaButton";
import MobileTba2Button from "./MobileTba2Button";
import MobileKickoffButton from "./MobileKickoffButton";
import MobileEtterfestButton from "./MobileEtterfestButton";
import MobileTjuetoMenu from "./MobileTjuetoMenu";
import MobileBlomstMenu from "./MobileBlomstMenu";
import MobileTøflMenu from "./MobileTøflMenu";
import MobileBeistMenu from "./MobileBeistMenu";
import MobileKøberMenu from "./MobileKøberMenu";
import MobileVennerMenu from "./MobileVennerMenu";
import MobileTbaMenu from "./MobileTbaMenu";
import MobileTba2Menu from "./MobileTba2Menu";
import MobileKickoffMenu from "./MobileKickoffMenu";
import MobileEtterfestMenu from "./MobileEtterfestMenu";

class MobileArtists extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible10: false,
      visible11: false,
      visible12: false,
      visible13: false,
      visible14: false,
      visible15: false,
      visible16: false,
      visible17: false,
      visible18: false,
      visible19: false
    };
    
    this.handleMouseDown10 = this.handleMouseDown10.bind(this);
    this.handleMouseDown11 = this.handleMouseDown11.bind(this);
    this.handleMouseDown12 = this.handleMouseDown12.bind(this);
    this.handleMouseDown13 = this.handleMouseDown13.bind(this);
    this.handleMouseDown14 = this.handleMouseDown14.bind(this);
    this.handleMouseDown15 = this.handleMouseDown15.bind(this);
    this.handleMouseDown16 = this.handleMouseDown16.bind(this);
    this.handleMouseDown17 = this.handleMouseDown17.bind(this);
    this.handleMouseDown18 = this.handleMouseDown18.bind(this);
    this.handleMouseDown19 = this.handleMouseDown19.bind(this);
    this.toggleMenu10 = this.toggleMenu10.bind(this);
    this.toggleMenu11 = this.toggleMenu11.bind(this);
    this.toggleMenu12 = this.toggleMenu12.bind(this);
    this.toggleMenu13 = this.toggleMenu13.bind(this);
    this.toggleMenu14 = this.toggleMenu14.bind(this);
    this.toggleMenu15 = this.toggleMenu15.bind(this);
    this.toggleMenu16 = this.toggleMenu16.bind(this);
    this.toggleMenu17 = this.toggleMenu17.bind(this);
    this.toggleMenu18 = this.toggleMenu18.bind(this);
    this.toggleMenu19 = this.toggleMenu19.bind(this);
  }

  handleMouseDown10(e) {
    this.toggleMenu10();
    // console.log("clicked10");
    e.stopPropagation();
  }

  handleMouseDown11(e) {
    this.toggleMenu11();
    // console.log("clicked11");
    e.stopPropagation();
  }

  handleMouseDown12(e) {
    this.toggleMenu12();
    // console.log("clicked12");
    e.stopPropagation();
  }

  handleMouseDown13(e) {
    this.toggleMenu13();
    // console.log("clicked13");
    e.stopPropagation();
  }

  handleMouseDown14(e) {
    this.toggleMenu14();
    // console.log("clicked14");
    e.stopPropagation();
  }

  handleMouseDown15(e) {
    this.toggleMenu15();
    // console.log("clicked15");
    e.stopPropagation();
  }
  handleMouseDown16(e) {
    this.toggleMenu16();
    // console.log("clicked16");
    e.stopPropagation();
  }
  handleMouseDown17(e) {
    this.toggleMenu17();
    // console.log("clicked17");
    e.stopPropagation();
  }
  handleMouseDown18(e) {
    this.toggleMenu18();
    // console.log("clicked18");
    e.stopPropagation();
  }
  handleMouseDown19(e) {
    this.toggleMenu19();
    // console.log("clicked19");
    e.stopPropagation();
  }

  toggleMenu10() {
    this.setState({
      visible10: !this.state.visible10,
      visible19: false,
      visible18: false,
      visible17: false,
      visible16: false,
      visible15: false,
      visible14: false,
      visible13: false,
      visible12: false,
      visible11: false
    });
  }

  toggleMenu11() {
    this.setState({
      visible11: !this.state.visible11,
      visible19: false,
      visible18: false,
      visible17: false,
      visible16: false,
      visible15: false,
      visible14: false,
      visible13: false,
      visible12: false,
      visible10: false
    });
  }

  toggleMenu12() {
    this.setState({
      visible12: !this.state.visible12,
      visible19: false,
      visible18: false,
      visible17: false,
      visible16: false,
      visible15: false,
      visible14: false,
      visible13: false,
      visible11: false,
      visible10: false
    });
  }

  toggleMenu13() {
    this.setState({
      visible13: !this.state.visible13,
      visible19: false,
      visible18: false,
      visible17: false,
      visible16: false,
      visible15: false,
      visible14: false,
      visible12: false,
      visible11: false,
      visible10: false
    });
  }

  toggleMenu14() {
    this.setState({
      visible14: !this.state.visible14,
      visible19: false,
      visible18: false,
      visible17: false,
      visible16: false,
      visible15: false,
      visible13: false,
      visible12: false,
      visible11: false,
      visible10: false
    });
  }

  toggleMenu15() {
    this.setState({
      visible15: !this.state.visible15,
      visible19: false,
      visible18: false,
      visible17: false,
      visible16: false,
      visible14: false,
      visible13: false,
      visible12: false,
      visible11: false,
      visible10: false
    });
  }
  
  toggleMenu16() {
    this.setState({
      visible16: !this.state.visible16,
      visible19: false,
      visible18: false,
      visible17: false,
      visible15: false,
      visible14: false,
      visible13: false,
      visible12: false,
      visible11: false,
      visible10: false
    });
  }

  toggleMenu17() {
    this.setState({
      visible17: !this.state.visible17,
      visible19: false,
      visible18: false,
      visible16: false,
      visible15: false,
      visible14: false,
      visible13: false,
      visible12: false,
      visible11: false,
      visible10: false
    });
  }

  toggleMenu18() {
    this.setState({
      visible18: !this.state.visible18,
      visible19: false,
      visible17: false,
      visible16: false,
      visible15: false,
      visible14: false,
      visible13: false,
      visible12: false,
      visible11: false,
      visible10: false
    });
  }

  toggleMenu19() {
    this.setState({
      visible19: !this.state.visible19,
      visible18: false,
      visible17: false,
      visible16: false,
      visible15: false,
      visible14: false,
      visible13: false,
      visible12: false,
      visible11: false,
      visible10: false
    });
  }

  render() {
    return (
      <div id="mobileArtisterMenu">
        <div id="mobileArtistContainer">
          <ul id="mobileArtistList">
            <li><MobileTjuetoButton handleMouseDown10={this.handleMouseDown10}/></li>
            <li><MobileBlomstButton handleMouseDown11={this.handleMouseDown11}/></li>
            <li><MobileTøflButton handleMouseDown12={this.handleMouseDown12}/></li>
            <li><MobileBeistButton handleMouseDown13={this.handleMouseDown13}/></li>
            <li><MobileKøberButton handleMouseDown14={this.handleMouseDown14}/></li>
            <li><MobileVennerButton handleMouseDown15={this.handleMouseDown15}/></li>
            <li><MobileTbaButton handleMouseDown16={this.handleMouseDown16}/></li>
            <li><MobileTba2Button handleMouseDown17={this.handleMouseDown17}/></li>
            <li></li>
            <li className="specialEvents"><MobileKickoffButton handleMouseDown18={this.handleMouseDown18}/></li>
            <li className="specialEvents"><MobileEtterfestButton handleMouseDown19={this.handleMouseDown19}/></li>
          </ul>
          <MobileTjuetoMenu handleMouseDown10={this.handleMouseDown10} menuVisibility10={this.state.visible10}/>
          <MobileBlomstMenu handleMouseDown11={this.handleMouseDown11} menuVisibility11={this.state.visible11}/>
          <MobileTøflMenu handleMouseDown12={this.handleMouseDown12} menuVisibility12={this.state.visible12}/>
          <MobileBeistMenu handleMouseDown13={this.handleMouseDown13} menuVisibility13={this.state.visible13}/>
          <MobileKøberMenu handleMouseDown14={this.handleMouseDown14} menuVisibility14={this.state.visible14}/>
          <MobileVennerMenu handleMouseDown15={this.handleMouseDown15} menuVisibility15={this.state.visible15}/>
          <MobileTbaMenu handleMouseDown16={this.handleMouseDown16} menuVisibility16={this.state.visible16}/>
          <MobileTba2Menu handleMouseDown17={this.handleMouseDown17} menuVisibility17={this.state.visible17}/>
          <MobileKickoffMenu handleMouseDown18={this.handleMouseDown18} menuVisibility18={this.state.visible18}/>
          <MobileEtterfestMenu handleMouseDown19={this.handleMouseDown19} menuVisibility19={this.state.visible19}/>
        </div>
      </div>
    );
  }
}

export default MobileArtists;