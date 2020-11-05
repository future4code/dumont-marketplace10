import React from 'react'
import styled from "styled-components"
import axios from "axios"
import TelaCadastro from "./TelaCadastro"
import Produtos from './Produtos'


const BoasVindas = styled.h2`
	display: flex;
	justify-content: center;
	align-items: flex-end;
`

const TextoIntroducao = styled.h3`
	text-align: center;
`

const BotoesInicio = styled.button`
	width: 95px;
	height: 45px;
	margin: 6px 15px;
	border-radius: 8%;
	background-color: #59D9D9;
`

class Home extends React.Component{

    render() {
        return (
        <div>
          <BoasVindas>Bem vindo(a) ao Elo4!</BoasVindas>
          <TextoIntroducao>A maior rede de compra e venda de produtos artesanais do Brasil!</TextoIntroducao>
          <TextoIntroducao>Escolha o que deseja fazer:</TextoIntroducao>
          <div>
			<BotoesInicio onClick = {this.props.botaoProdutos}>Quero Comprar!</BotoesInicio>
            <BotoesInicio onClick={this.props.botaoCadastro}>Quero Vender!</BotoesInicio>
          </div>
        </div>
        )
    }
}



export default Home