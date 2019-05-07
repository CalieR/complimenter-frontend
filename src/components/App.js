import React, { Component } from "react";
import "../App.css";
import Compliment from "./Compliment";
import UrlForm from "./Form";
import Picture from "./Picture"

const COMP_URL = "http://localhost:3002/api/v1/compliments";
const COLOURS_URL = "http://localhost:3002/api/v1/compliments/colour"


class App extends Component {
  state = {
    currentCompliment: "",
    currentImage: null,
    currentColour: ""

  };

  componentDidMount() {
    return fetch(COMP_URL)
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          currentCompliment: json.content
        })
      );
  }

  getPictureColour = () =>{
     fetch(COLOURS_URL)
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          currentColour: json.colour
        })
      );
  }

  showImage = img =>{
this.setState({
  currentImage: img.url
})
  }

  render() {
    return (
      <div className="App">
        <h1>Compliment:</h1>
        <Compliment currentColour={this.state.currentColour}currentCompliment={this.state.currentCompliment} />
        <UrlForm getPictureColour={this.getPictureColour} showImage={this.showImage}/>
        <Picture currentImage={this.state.currentImage}/>
      </div>
    );
  }
}

export default App;
