import React, { Component } from "react";
import "../App.css";
import Compliment from "./Compliment";
import UrlForm from "./Form";
import Picture from "./Picture";

const COLOURS_URL = "http://localhost:3002/api/v1/compliments/colour";

class App extends Component {
  state = {
    currentCompliment: "",
    currentImage: null,
    currentColour: ""
  };

  getColourAndCompliment = () => {
    fetch(COLOURS_URL)
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          currentColour: json.colour,
          currentCompliment: json.content
        })
      );
  };

  resetState = () => {
    this.setState({
      currentCompliment: "",
      currentColour: ""
    });
  };

  showImage = img => {
    this.setState({
      currentImage: img.url
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Enter a picture url and get a compliment, gurl!</h1>
        <UrlForm
          resetState={this.resetState}
          getColourAndCompliment={this.getColourAndCompliment}
          showImage={this.showImage}
        />
        <Compliment
          currentColour={this.state.currentColour}
          currentCompliment={this.state.currentCompliment}
        />
        <Picture currentImage={this.state.currentImage} />
      </div>
    );
  }
}

export default App;
