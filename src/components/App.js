import React, { Component } from "react";
import "../App.css";
import Compliment from "./Compliment";
import UrlForm from "./Form";
import Picture from "./Picture"

const COMP_URL = "http://localhost:3002/api/v1/compliments";

class App extends Component {
  state = {
    currentCompliment: "",
    currentImage: null
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

  showImage = img =>{
this.setState({
  currentImage: img.url
})
  }

  render() {
    return (
      <div className="App">
        <h1>Compliments here:</h1>
        <Compliment currentCompliment={this.state.currentCompliment} />
        <UrlForm showImage={this.showImage}/>
        <Picture currentImage={this.state.currentImage}/>
      </div>
    );
  }
}

export default App;
