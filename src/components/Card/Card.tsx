import React from 'react'
import {
  CardComponent} from './StyleCard.tsx'

interface CardContent{
    titulo:string;
    icon?:string;
}

const Card = (props:CardContent) => {
  return (
    <CardComponent>
        <h3>{props.titulo}</h3>
        <div>
            {props.icon}
        </div>
        
      
    </CardComponent>
  )
}

export default Card
