import React, { Component } from "react";
import "../App.css";
import Compliment from "./Compliment";
import UrlForm from "./Form";
import NavBar from "./NavBar";
import Button from "./Button";
import Picture from "./Picture";
import Jonathan from "./Jonathan";
import { Route } from "react-router-dom";
import AllMyLooks from "./AllMyLooks";

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

  resetCurrentImageState = () => {
    this.setState({
      currentImage: null
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
        <NavBar />
        <Route
          exact
          path="/"
          component={() => {
            return (
              <div>
                <Jonathan />
                {this.state.currentImage ? (
                  <>
                    <Compliment
                      currentColour={this.state.currentColour}
                      currentCompliment={this.state.currentCompliment}
                    />

                    <Picture currentImage={this.state.currentImage} />
                    <Button
                      resetCurrentImageState={this.resetCurrentImageState}
                    />
                  </>
                ) : (
                  <>
                    <h1>Enter a picture url and get a compliment, gurl!</h1>
                    <UrlForm
                      resetState={this.resetState}
                      getColourAndCompliment={this.getColourAndCompliment}
                      showImage={this.showImage}
                    />
                  </>
                )}
              </div>
            );
          }}
        />
        <Route
          exact
          path="/allmylooks"
          component={AllMyLooks}
        />
      </div>
    );
  }
}

export default App;
