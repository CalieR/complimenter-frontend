import React, { Component } from 'react';
import LookCard from './LookCard';

class AllMyLooks extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ui four column grid">
                {this.props.allMyLooks.map(look => <LookCard key={look.id} handleDelete={this.props.handleDelete} look={look}/>)}
            </div>
         );
    }
}
 
export default AllMyLooks;