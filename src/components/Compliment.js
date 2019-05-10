import React, { Component } from "react";
import { Label } from "semantic-ui-react";
class Compliment extends Component {
  render() {
    return (
      <div>
        {this.props.currentColour ? (
          <Label id="compliment-message" size="massive" pointing="left">
            {this.props.currentColour}<br/>
            {this.props.currentCompliment}
          </Label>
        ) : (
          <Label id="compliment-message" size="massive" pointing="left">
            {this.props.featureTags}
          </Label>
        )}
      </div>
    );
  }
}

export default Compliment;
