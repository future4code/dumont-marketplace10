import React from 'react'
import styled from "styled-components"
import axios from "axios"
import filtroicon from '../img/filtrosicon.png'

const FiltroContainer = styled.div`
    border-style: solid;
    border-radius: 5%;
    width: 15vw;
    height: 30vh;
    margin: 10px;
`

class Filtros extends React.Component {
	
	render() {

		return (

        <FiltroContainer>
         <img src={filtroicon}/>
         <input type="number" min="0" placeholder="Preço Mínimo"></input>
         <input type="number" min="0" placeholder="Preço Máximo"></input>
         <select>
				<option value="">Escola a categoria:</option>
				<option value="festas">Artigos para festa</option>
				<option value="decoracao">Objetos de Decoração</option>
				<option value="bijuteria">Bijuteria</option>
				<option value="religiosos">Produtos Religiosos</option>
				<option value="enxovais">Enxovais</option>
				<option value="ecofriendly">Acessórios Eco-friendly</option>
		 </select>
         <input placeholder="Nome do Produto"></input>
         <button>Limpar Filtros</button>


        </FiltroContainer>


		)
	}
}

export default Filtros
