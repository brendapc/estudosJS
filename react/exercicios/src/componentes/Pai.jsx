import React from 'react';
import Filho from './Filho';

export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>filhos</h2>
    <ul>
        <Filho nome="Bruno " sobrenome={props.sobrenome}/>
        <Filho {...props}/> {/* todas as propriedades */}
        <Filho  {...props} nome="Daniela "/> {/* ordem importa! a por último tem + importância */}
    </ul>
</div>