import React from 'react';
import { childrenWithProps } from '../utils/utils';

export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {/* pegar o sobrenome do pai sem minha interferencia */}
        
        {childrenWithProps(props)}
            
             
    </ul>
</div>