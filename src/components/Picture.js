import React, { Component } from 'react';
class Picture extends Component {
    render() { 
        return ( <div>
            <img src={this.props.currentImage} width="400" alt="not loading"/>
        </div> );
    }
}
 
export default Picture;