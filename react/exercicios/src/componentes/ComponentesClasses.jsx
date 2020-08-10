import React, {Component} from 'react'

export default class Saudacao extends Component{
    state = {
        tipo: "Fala",
        nome: "Brenda"
    }
    setTipo(e){
        let i = 1
        setInterval(()=>{
            this.setState({tipo: i++})
        },1000)
        
    }

    render(){
        const {tipo, nome} = this.state
        
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