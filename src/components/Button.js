import React, { Component } from 'react';
class Button extends Component {
    render() { 
        return ( <button className="ui button" onClick={this.props.resetCurrentImageState}>
        Back
      </button> );
    }
}
 
export default Button;