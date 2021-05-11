import React from 'react';
import './card-design.styles.css';
export const Card=(props)=>{
    return <div className='card-design'><img src={'https://robohash.org/'+props.monster.id+'?set=set2'}/>
    <h2>{props.monster.name}</h2>
    <h2>{props.monster.email}</h2>
    </div>;
}
