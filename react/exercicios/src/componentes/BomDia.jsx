import React from 'react';

export default (props)=> 
/*  não pode retornar duas tags, mas pode retornar uma tag com varias dentro */
    <div>
        <h1> Bom Dia {props.nome}</h1>
        <h2>idade {props.idade} </h2>
    </div>