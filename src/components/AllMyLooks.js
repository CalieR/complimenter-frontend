import React, { Component } from 'react';
import LookCard from './LookCard';

class AllMyLooks extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ui four column grid">
                {this.props.allMyLooks.map(look => <LookCard look={look}/>)}
            </div>
         );
    }
}
 
export default AllMyLooks;