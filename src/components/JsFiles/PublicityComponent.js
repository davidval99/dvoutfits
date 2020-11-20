import React from "react";
import PublicityCard from "./PublicityCard";
import Nav from "./Nav";
import "../CssFiles/PublicityComponent.css";
import Home from "../Home/Home";
import { BrowserRouter } from "react-router-dom";

class PublicityComponent extends React.Component {
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
        <div className="wrapper1">
          <div className="app" ref={this.myRef}>
            <PublicityCard />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default PublicityComponent;
