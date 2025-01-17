import React from "react";
import Card from "./Card";
import Nav from "./Nav";
import "../CssFiles/Carrousel.css";
import Home from "../Home/Home";
import { BrowserRouter } from "react-router-dom";

class CarrouselComponent extends React.Component {
  state = {
    data: [],
  };
  myRef = React.createRef();

  prevClick = () => {
    const slide = this.myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  nextClick = () => {
    const slide = this.myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="app" ref={this.myRef}>
            <Card />
          </div>

          <Nav prev={this.prevClick} next={this.nextClick} />
        </div>
      </BrowserRouter>
    );
  }
}

export default CarrouselComponent;
