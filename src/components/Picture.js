import React, { Component } from "react";
import Button from "./Button";

class Picture extends Component {
  render() {
    return (
      <>
        <div className="picture-container">
          <img className="picdiv" src={this.props.currentImage} width="300" alt="" />
          <Button className="button-container" resetCurrentImageState={this.props.resetCurrentImageState} />
        </div>
      </>
    );
  }
}

export default Picture;
