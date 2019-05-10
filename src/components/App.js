import React, { Component } from "react";
import "../App.css";
import Compliment from "./Compliment";
import UrlForm from "./Form";
import NavBar from "./NavBar";
import Picture from "./Picture";
import Jonathan from "./Jonathan";
import { Route } from "react-router-dom";
import AllMyLooks from "./AllMyLooks";

const COLOURS_URL = "http://localhost:3002/api/v1/compliments/colour";
const TAGS_URL = "http://localhost:3002/api/v1/compliments/tags"
const IMAGE_COMPLIMENTS_URL = "http://localhost:3002/api/v1/image_compliments";
const DELETE_URL = "http://localhost:3002/api/v1/image_compliments/";

class App extends Component {
  state = {
    currentCompliment: "",
    currentImage: null,
    currentColour: "",
    featureTags:"",
    allMyLooks: []
  };

  getColourAndCompliment = () => {
    fetch(COLOURS_URL)
      .then(resp => resp.json())
      .then(jso =>
        this.setState({
          currentColour: jso.colour,
          currentCompliment: jso.compliment.content,
          allMyLooks: [jso, ...this.state.allMyLooks]
        })
      );
  };

  randomTagSelect = () => {
   const num = Math.floor(Math.random() * 11)
   num % 2 === 0 ? this.getColourAndCompliment() : this.getTagsAndCompliment()
  }

  getTagsAndCompliment = () => {
    return fetch(TAGS_URL)
      .then(resp => resp.json())
      .then(jso =>
        this.setState({
          featureTags: jso.tag
        })
      );
  };

  componentDidMount = () => {
    return fetch(IMAGE_COMPLIMENTS_URL)
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          allMyLooks: json
        })
      );
  };

  resetState = () => {
    this.setState({
      currentCompliment: "",
      currentColour: "",
      featureTags: ""
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

  handleDelete = (id) => {
    return fetch(DELETE_URL + `${id}`, { method: 'DELETE' })
    .then(this.setState({
      allMyLooks: this.state.allMyLooks.filter(look => look.id !== id)
    }))
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
              <div className="jvn-container">
                <Jonathan />
                {this.state.currentImage ? (
                  <>
                    <Compliment
                    featureTags={this.state.featureTags}
                      currentColour={this.state.currentColour}
                      currentCompliment={this.state.currentCompliment}
                    />

                    <Picture
                      currentImage={this.state.currentImage}
                      resetCurrentImageState={this.resetCurrentImageState}
                    />
                  </>
                ) : (
                  <>
                    <UrlForm
                      resetState={this.resetState}
                      randomTagSelect={this.randomTagSelect}
                      getColourAndCompliment={this.getColourAndCompliment}
                      getTagsAndCompliment={this.getTagsAndCompliment}
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
          render={() => (
            <AllMyLooks
              handleDelete={this.handleDelete}
              allMyLooks={this.state.allMyLooks}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
