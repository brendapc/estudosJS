import React from 'react';

export default (props)=> 
/*  não pode retornar duas tags, mas pode retornar uma tag com varias dentro */
/* usando react.fragment para "enrolar" as tags sem quebrar o layout com a div */
/*     <React.Fragment> 
        <h1> Bom Dia {props.nome}</h1>
        <h2>idade {props.idade} </h2>
    </React.Fragment>  
-----------------------------------    
*/ /* returning arrays */
    [
        <h1 key='h1'> Bom Dia {props.nome}</h1>,
        <h2 key='h2'>idade {props.idade} </h2>
    ]