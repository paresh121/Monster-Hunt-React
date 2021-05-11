import React from 'react';
import './card-list.styles.css';
import { Card } from './Card.component';
export const CardList=(props)=>{
    // console.log(props);
    return <div className="card-list"> {
        props.name.map(monster=> <Card key={ monster.id } monster={ monster }/>)
      }</div>;
}