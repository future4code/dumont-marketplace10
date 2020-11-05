import React from 'react'
import styled from "styled-components"
import axios from "axios"
import IconeSacolas from "../img/IconeSacolas.png"

const SacolaContainer = styled.div`
    border-style: solid;
    border-radius: 5%;
    width: 15vw;
    height: 50vh;
    margin: 10px;
`
const SacolaImagem = styled.img`
    height: 70px;
    width: 140px;
`

class Sacola extends React.Component {
    render() {

        return(
            <SacolaContainer>
                <SacolaImagem img src={IconeSacolas}/>
                <p>Mesa de Jardim</p>
                <p>R$367,00</p>
                <p>2x</p>
                <button>+</button>
                <button>-</button>
                <button>x</button>
                <h3>Valor Total:</h3>
                <h3>R$100,00</h3>
                <button>Comprar</button>
            </SacolaContainer>
        
        )
    }
}

export default Sacola