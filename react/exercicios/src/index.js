import React from 'react';
import ReactDOM from 'react-dom';

/* componentes não podem ter letra minuscula para que o react possa diferencia-los de tags padrão */
/* import Primeiro from './componentes/Primeiro' */
/* import BomDia from './componentes/BomDia'*/

/* no default import/export: */
import {BoaTarde} from './componentes/MultiplosComponentes'
/* with default: */
import BoaTarde from './componentes/MultiplosComponentes'
/* or  */
import Multi from './componentes/MultiplosComponentes'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Gabriela"/>
        <Multi.BoaNoite nome="julia"/>
    </div>
    , document.getElementById('root'))