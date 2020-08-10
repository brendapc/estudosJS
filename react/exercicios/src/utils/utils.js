import React from 'react';

export function childrenWithProps(props){
    return React.Children.map(props.children, child=>{
        return React.cloneElement(child, {
            ...props,...child.props
            /* clona as propriedades do pai e para para o filho, 
            mas cloneElement só aceira um elemento como parametro 
            então fazemos map para clonar cada um por sua vez */
        })
    })
}