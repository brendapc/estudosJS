import React from 'react';
import ReactDOM from 'react-dom';

/* componentes não podem ter letra minuscula para que o react possa diferencia-los de tags padrão */
/* import Primeiro from './componentes/Primeiro' */
/* import BomDia from './componentes/BomDia'*/

import Multi from './componentes/MultiplosComponentes'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Gabriela"/>
        <Multi.BoaNoite nome="julia"/>
    </div>
    , document.getElementById('root'))