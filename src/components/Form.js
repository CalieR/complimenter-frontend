import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
class Form extends Component {
    
    render() { 
        return (
            <div>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Input placeholder='Image Url' name='imgUrl' value={imgUrl}/>
                  <Form.Button content='Submit' />
                </Form.Group>
              </Form>
            </div>
          )
    }
}

export default Form ;