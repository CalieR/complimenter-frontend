import React, { Component } from "react";

const COMP_URL = "http://localhost:3001/api/v1/compliments";

class Compliment extends Component {
  state = {
    current_compliment: ""
  };

  componentDidMount() {
    fetch(COMP_URL)
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          current_compliment: json.content
        })
      );
  }

  render() {
    return <h3>{this.state.current_compliment}</h3>;
  }
}

export default Compliment;
