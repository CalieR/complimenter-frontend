import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class UrlForm extends Component {
  state = {
    imgUrl: ""
  };

  handleChange = event => {
    // debugger
    this.setState({
      imgUrl: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3002/api/v1/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        url: this.state.imgUrl,
        user_id: 1
      })
    })
      .then(resp => resp.json())
      .then(image => this.props.showImage(image))
      .then(() => {
        this.props.getColourAndCompliment();
        this.props.resetState();
      })
      .catch(error => console.error(error));
    this.setState({ imgUrl: "" });
  };

  render() {
    return (
      <div className="ui form">
        <Form className="ui form" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              className="inline field"
              label="image url"
              type="text"
              placeholder="Image Url"
              name="imgUrl"
              value={this.state.imgUrl}
              onChange={this.handleChange}
            />
            <Form.Button className="fluid" content="Submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UrlForm;
