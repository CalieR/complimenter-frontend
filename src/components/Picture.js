import React, { Component } from "react";
import Button from "./Button";
import { Image} from 'semantic-ui-react'


class Picture extends Component {
  render() {
    return (
      <>
        <div className="picture-container">
          <Image size='medium'className="picdiv" src={this.props.currentImage} alt="" />
          <Button className="button-container" resetCurrentImageState={this.props.resetCurrentImageState} />
        </div>
      </>
    );
  }
}

export default Picture;
