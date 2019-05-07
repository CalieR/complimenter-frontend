import React, { Component } from "react";

class Compliment extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.currentColour} looks so great on you!</h3>
        <h3>{this.props.currentCompliment}</h3>
      </div>
    );
  }
}

export default Compliment;
