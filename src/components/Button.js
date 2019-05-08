import React, { Component } from 'react';
class Button extends Component {
    render() { 
        return ( <button class="ui button" onClick={this.props.resetCurrentImageState}>
        Back
      </button> );
    }
}
 
export default Button;