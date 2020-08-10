import React from 'react';
import ReactDOM from 'react-dom';

/* componentes não podem ter letra minuscula para que o react possa diferencia-los de tags padrão */
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
ReactDOM.render(<BomDia nome="ana" idade="10"/>, document.getElementById('root'))