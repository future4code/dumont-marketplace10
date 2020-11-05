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
	background-color: #F28C0F;
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

const TelaSelecao = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Logo = styled.div`
	display: flex;
	justify-content: flex-start;
	height: 50vh;
	align-items: flex-end;
`
const FiltrosSacola = styled.div`
	//background-color: darkgrey;
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
	margin: 6px;
	background-color: #59D9D9;
`

class App extends React.Component {
	render() {

		return (

        <MainContainer>
			<Logo>
					<img src={LogoVertical} />
				</Logo>
				<TelaSelecao>
					<BoasVindas>Bem vindo(a) ao Elo4!</BoasVindas>
					<TextoIntroducao>A maior rede de compra e venda de produtos artesanais do Brasil!</TextoIntroducao>
					<TextoIntroducao>Escolha o que deseja fazer:</TextoIntroducao>
					<div>
						<BotoesInicio>Quero Comprar!</BotoesInicio>
						<BotoesInicio>Quero Vender!</BotoesInicio>
					</div>
				</TelaSelecao>
			<FiltrosSacola>
				<p>Sacola</p>
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
