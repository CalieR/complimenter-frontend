import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const LookCard = (props) => (
    <Card>
      <Image src={props.look.image.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
            {props.look.colour}
          </Card.Header> 
          <Card.Description>
            {props.look.compliment.content}
          </Card.Description> 
      </Card.Content>
    </Card>
  )
  
export default LookCard;