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

    state ={
        minimo: "",
        maximo: "",
        nome: "",
        categoria: "",

    }

    onChangeFiltroMinimo = (event) => {
        this.setState({ minimo: event.target.value });
      };
    
      onChangeFiltroMaximo = (event) => {
        this.setState({ maximo: event.target.value });
      };

      onChangeFiltroNome = (event) => {
        this.setState({ nome: event.target.value });
      };

      onChangeFiltroCategoria = (event) => {
        this.setState({ categoria: event.target.value });
      };

    //   filterProductsArray = (min, max, text, type) => {
    //     let filteredByValueArray
    //     if (min || max) {
    //       // Se min ou max não forem zero ou vazio. Senão, pula o filtro por valor.
    //       filteredByValueArray = this.state.productsArray.filter((product) => {
    //         if (min && !max) {
    //           // Se min não for zero ou vazio e max for.       
    //           return product.value >= min
    //         } else if (!min && max) {
    //           // Se max não for zero ou vazio e min for.
    //           return product.value <= max
    //         } else if (min && max) {
    //           // Se ambos min e max tem um valor diferente de vazio ou zero.
    //           return ((product.value >= min) && (product.value <= max))
    //         }
    //       })
    
    //     } else {
    //       filteredByValueArray = this.state.productsArray
    //     }
    
    //     let fullyFilteredArray
    //     if (text) {
    //       // Se o campo "Buscar por produto" não estiver vazio. Senão, pula o filtro por texto.
    //       fullyFilteredArray = filteredByValueArray.filter((product) => {
    //         return product.name.toLowerCase().includes(`${text.toLowerCase()}`)
    //       })
    //     } else {
    //       fullyFilteredArray = filteredByValueArray
    //     }
        
    //     let filterByType
    //     switch (type) {
    //       case "ship":
    //         filterByType = fullyFilteredArray.filter((product) => {
    //         return product.type === "ship"
    //         })
    //         break;
    //       case "figure":
    //         filterByType = fullyFilteredArray.filter((product) => {
    //         return product.type === "figure"
    //         })
    //         break;
    //       default:
    //         return fullyFilteredArray
    //         break;
    //     }
    
    //     return filterByType
      
        
    	render() {

		return (

        <FiltroContainer>
         <img src={filtroicon}/>
         <input type="number" min="0" placeholder="Preço Mínimo" onChange={this.onChangeMinimo}></input>
         <input type="number" min="0" placeholder="Preço Máximo" onChange={this.onChangeMaximo}></input>
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
