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
import TelaCadastro from "./components/TelaCadastro"
import TelaSelecao from "./components/TelaSelecao"
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
				<Sacola/>
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
