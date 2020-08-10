import React, {Component} from 'react'

export default class Saudacao extends Component{

    setTipo(e){
        this.props.tipo = e.target.value /* não é possivel alterar pois os parametros recebidos(props) são só leitura */
    }

    render(){
        const {tipo, nome} = this.props
        
        return(
            <div>
                <h1>{tipo} {nome}</h1>
                <hr/>
                <input type="text" placeholder="tipo..." value={tipo} onChange={e=>this.setTipo(e)}/> {/* this porque a função pertence ao objeto */}
                <input type="text" placeholder="nome..." value={nome}/>
            </div>
        )
    }
}