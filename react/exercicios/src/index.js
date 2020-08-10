import React from 'react';
import ReactDOM from 'react-dom';

/* componentes não podem ter letra minuscula para que o react possa diferencia-los de tags padrão */
/* import Primeiro from './componentes/Primeiro' */
/* import BomDia from './componentes/BomDia'*/
import Saudacao from './componentes/ComponentesClasses';

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom Dia" nome="João"/>
    </div>
    , document.getElementById('root'))