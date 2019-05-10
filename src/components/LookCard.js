import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'

const LookCard = (props) => (
    <Card>
      <Image className='pictures' size="medium" centered src={props.look.image.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
            {props.look.colour}
          </Card.Header> 
          <Card.Description>
            {props.look.compliment.content}
          </Card.Description> 
      </Card.Content>
      <Button onClick={() => props.handleDelete(props.look.id)}>Delete</Button>
    </Card>
  )
  
export default LookCard;