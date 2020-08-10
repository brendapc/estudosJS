import React from 'react';
import ReactDOM from 'react-dom';

/* componentes não podem ter letra minuscula para que o react possa diferencia-los de tags padrão */
/* import Primeiro from './componentes/Primeiro' */
/* import BomDia from './componentes/BomDia'*/
import Saudacao from './componentes/ComponentesClasses';
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Zé" sobrenome="Pereira">
            <Filho nome="Bruno " />
            <Filho nome="Daniela " />
            <Filho nome="Denise " />
        </Pai>
    </div>
    , document.getElementById('root'))