import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const LookCard = (props) => (
    <Card>
      <Image src={props.look.url} wrapped ui={false} />
      <Card.Content>

      </Card.Content>
    </Card>
  )
  
export default LookCard;