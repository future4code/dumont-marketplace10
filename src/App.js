import React from 'react'
import Produtos from './components/Produtos.js'
import CardsProdutos from './components/CardsProdutos.js'
import Filtros from './components/Filtros.js'
import ItensSacola from './components/ItensSacola.js'
import Sacola from './components/Sacola.js'
import TelaCadastro from "./components/TelaCadastro"
import Home from "./components/Home"
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
	overflow-x: auto;
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
	:hover{width:4vw};
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


class App extends React.Component {

	state = {
		filtro: false,
		sacola: false,
		gridcentral: "selecao",
	}

	irParaCadastro = () => {
        this.setState({ gridcentral: "cadastro" });
        console.log("Entrou na função")
	  };
	
	irParaProdutos = () => {
		this.setState({ gridcentral: "produto" });
	  };

	render() {

		const renderizaTelaCorreta = () => {
			switch (this.state.gridcentral) {
				case "selecao":
					return <Home botaoCadastro={this.irParaCadastro} botaoProdutos={this.irParaProdutos}/>
					break;
				case "cadastro":
					return <TelaCadastro/>
					break;
				case "produto":
					return <Produtos/>
					break;
				default:
					break;
			}
		}

		return (
		
		<MainContainer>

            <Logo>
                <img src={LogoVertical} />
                </Logo>
                <ContainerCentral>
					{renderizaTelaCorreta()}
                </ContainerCentral>
            <FiltrosSacola>
                <Filtros/>
				<Sacola/>
            </FiltrosSacola>
            <Footer>
              <Icones>
				<a href="https://www.facebook.com/" target="blank">
					<RedesSociais img src={facebook}></RedesSociais>
				</a>
                <a href="https://www.instagram.com/" target="blank">
					<RedesSociais img src={instagram}></RedesSociais>
				</a>
                <a href="https://twitter.com/" target="blank">
					<RedesSociais img src={twitter}></RedesSociais>
				</a>
                <a href="https://www.youtube.com/" target="blank">
					<RedesSociais img src={youtube}></RedesSociais>
				</a>
				<a href="https://web.whatsapp.com/" target="blank">
					<RedesSociais img src={whatsapp}></RedesSociais> 
				</a>
              </Icones> 
              <Slogan>Personalização à sua mão!</Slogan>
            </Footer>
        </MainContainer>


		)
	}
}

export default App
