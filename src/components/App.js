import React, { Component } from "react";
import "../App.css";
import Compliment from './Compliment'
import UrlForm from './Form'

const COMP_URL = "http://localhost:3002/api/v1/compliments";


class App extends Component {
  state = {
    currentCompliment: "",
    imgUrl:""
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

  render (){
  return (
    <div className="App">
      <h1>Compliments here:</h1>
      <Compliment currentCompliment={this.state.currentCompliment}/>
      <UrlForm imgUrl={this.state.imgUrl}/>
    </div>
  );
  }
}

export default App;
