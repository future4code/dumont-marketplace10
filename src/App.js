import React from 'react'
import Produtos from './components/Produtos.js'
import CardsProdutos from './components/CardsProdutos.js'
import Filtros from './components/Filtros.js'
import ItensSacola from './components/ItensSacola.js'
import Sacola from './components/Sacola.js'
import styled from "styled-components"
import axios from "axios"
import facebook from './img/rede__facebook.svg'
import instagram from './img/rede__instagram.svg'
import youtube from './img/rede__youtube.svg'
import twitter from './img/rede__twitter.svg'
import whatsapp from './img/rede__whatsapp.svg'

import LogoVertical from "./img/LogoVertical.png"


const MainContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #f2970b;
	display: grid;
	grid-template-columns: 15% 65% 20%;
	grid-template-rows: 90% 10%;
`
const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #F2BF80;
	grid-row-start: 2;
	grid-row-end: 3;
	grid-column-start: 1;
	grid-column-end: 4;
`
const Icones = styled.div`
	background-color: #F2BF80;
`

const RedesSociais = styled.img`
	width: 3vw;
	padding: 3px;
	margin: 10px;
`
const Slogan = styled.p`
	font-size: 22px;
	font-weight: 700;
	margin: 15px 10px;
	color: #F28C0F;
`

const ContainerCentral = styled.div`
	grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 2;
	grid-column-end: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
`
const Logo = styled.div`
	margin: 45px 5px;
	display: flex;
	justify-content: flex-start;
	height: 50vh;
	align-items: flex-end;
`
const FiltrosSacola = styled.div`
	grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 3;
	grid-column-end: 4;
`

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

class TelaSelecao extends React.Component {
	
	render() {

		return(
		<div>
		 <BoasVindas>Bem vindo(a) ao Elo4!</BoasVindas>
          <TextoIntroducao>A maior rede de compra e venda de produtos artesanais do Brasil!</TextoIntroducao>
          <TextoIntroducao>Escolha o que deseja fazer:</TextoIntroducao>
          <div>
			<BotoesInicio>Quero Comprar!</BotoesInicio>
            <BotoesInicio>Quero Vender!</BotoesInicio>
          </div>
		</div>	
		)
	}

}

class TelaCadastro extends React.Component {
	render() {

		return(
		<div>
			<h2>Olá lojista!</h2>
			<h2>Aqui é o seu espaço!</h2>
			<h3>Cadastre aqui os dados do seu produto.</h3>
			<input placeholder="Digite o nome do produto"></input>
			<input placeholder="Escreve a descrição do produto"></input>
			<select>
				<option value="">Escola a categoria:</option>
				<option value="festas">Artigos para festa</option>
				<option value="decoracao">Objetos de Decoração</option>
				<option value="bijuteria">Bijuteria</option>
				<option value="religiosos">Produtos Religiosos</option>
				<option value="enxovais">Enxovais</option>
				<option value="ecofriendly">Acessórios Eco-friendly</option>
			</select>
			<select>
				<option value="">Escola o métdo de pagamento:</option>
				<option value="debito">Cartão de Débito</option>
				<option value="credito">Cartão de Crédito</option>
				<option value="boleto">Boleto Bancário</option>
			</select>
			<input placeholder="Digite o preço em R$"></input>
			<select>
				<option value="">Escolha o número máximo de parcelas:</option>
				<option value="1">Á vista</option>
				<option value="2">2 vezes</option>
				<option value="3">3 vezes</option>
				<option value="4">4 vezes</option>
				<option value="5">5 vezes</option>
				<option value="6">6 vezes</option>
				<option value="7">7 vezes</option>
				<option value="8">8 vezes</option>
				<option value="9">9 vezes</option>
				<option value="10">10 vezes</option>
				<option value="11">11 vezes</option>
				<option value="12">12 vezes</option>
			</select>
			<input placeholder="Digite a url da imagem do produto"></input>
			<button>Cadastrar</button><button>Voltar</button>
		</div>	
		)
	}

}


//let telaExibida = {<TelaSelecao/>}

class App extends React.Component {
	render() {

		return (

        <MainContainer>
            <Logo>
                    <img src={LogoVertical} />
                </Logo>
                <ContainerCentral>
					<TelaCadastro/>
                </ContainerCentral>
            <FiltrosSacola>
                <Filtros/>
            </FiltrosSacola>
            <Footer>
              <Icones>
                <RedesSociais img src={facebook}></RedesSociais>
                <RedesSociais img src={instagram}></RedesSociais>
                <RedesSociais img src={twitter}></RedesSociais>
                <RedesSociais img src={youtube}></RedesSociais>
                <RedesSociais img src={whatsapp}></RedesSociais>    
              </Icones> 
              <Slogan>Personalização à sua mão!</Slogan>
            </Footer>
        </MainContainer>


		)
	}
}

export default App
