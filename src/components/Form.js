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
      debugger
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
    }).then(resp => resp.json());
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              type="text"
              placeholder="Image Url"
              name="imgUrl"
              value={this.state.imgUrl}
              onChange={this.handleChange}
            />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UrlForm;
