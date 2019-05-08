import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          as={Link}
          to="/"
          name="image upload"
          active={activeItem === "image upload"}
          onClick={this.handleItemClick}
        >
          Upload your Look
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="allmylooks"
          name="all my looks"
          active={activeItem === "all my looks"}
          onClick={this.handleItemClick}
        >
          All my Looks
        </Menu.Item>
      </Menu>
    );
  }
}
