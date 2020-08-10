import React from 'react';

function childrenWithProps(props){
    return React.Children.map(props.children, child=>{
        return React.cloneElement(child, {
            ...props,...child.props
            /* clona as propriedades do pai e para para o filho, 
            mas cloneElement só aceira um elemento como parametro 
            então fazemos map para clonar cada um por sua vez */
        })
    })
}

export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {/* pegar o sobrenome do pai sem minha interferencia */}
        
        {childrenWithProps(props)}
            
             
    </ul>
</div>