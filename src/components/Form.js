import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";

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
    fetch("https://complimenter-jvn.herokuapp.com/api/v1/images", {
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
        this.props.randomTagSelect()
        this.props.resetState();
      })
      .catch(error => console.error(error));
    this.setState({ imgUrl: "" });
  };

  render() {
    return (
      <div className="ui form">
        <Form className="ui form" onSubmit={this.handleSubmit}>
            <Label size="massive" pointing="below"  >Enter a picture url and get a compliment, gurl!</Label>
      
            <Form.Input
              className="field"
              
              type="text"
              placeholder="Image Url"
              name="imgUrl"
              value={this.state.imgUrl}
              onChange={this.handleChange}
            />
            <Form.Button className="fluid" content="Submit" />
         
        </Form>
      </div>
    );
  }
}

export default UrlForm;
