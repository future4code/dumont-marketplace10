import React, { Component } from 'react'
import styled from "styled-components"
import axios from "axios"
import CardsProdutos from './CardsProdutos'
import Filtros from './Filtros.js'
import Sacola from './Sacola.js'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5x;
  padding: 5px;
`    
/* const CardsInfo = styled.div`
	color: black;
  grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 1;
	grid-column-end: 2;
` */

const ProductsHeader = styled.div`
    margin-top: 45px;
    display: flex;
    align-items: center;
    //justify-content: space-between;
    padding: 0 16px;
`
const Label = styled.label`
    margin: 0px;
    padding: 10px 25px;
`

const ImagemContainer = styled.div`
	width: 13vw;
  height: 13vw;
`
const FiltrosSacola = styled.div`
  width: 18vw;
	grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 5;
	grid-column-end: 6;
`

class Produtos extends React.Component {

  state = {
    order: 'NOME',
    produtos: [],
  }

  componentDidMount() {
    this.pegaProdutos()
  }


  onChange = (event) => {
      const escolha = event.target.value
      this.setState({order: escolha})
  }

  orderArray = () => {
    let newArray = []
    switch (this.state.order) {
      case "NOME":
        newArray = this.state.produtos.sort((a,b) => a.name > b.name)
        break;
      case "CATEGORIA":
        newArray = this.state.produtos.sort((a,b) => a.category > b.category)
        break;
      case "PRECO":
        newArray = this.state.produtos.sort((a,b) => a.price - b.price)
        break;
      default:
        newArray = this.state.produtos
        break;
    }
    console.log(newArray)
    return newArray
  }



  pegaProdutos = () => {
		
		axios
			.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products"
        )
			.then((response) => {
        this.setState({ produtos: response.data.products });
			})
			.catch((error) => {
				alert("Opa!");
			});
	};

  render() {
    const arrayOrdernado = this.orderArray()
    const ListaDeProdutos = this.state.produtos.map((produto) => {
      return (
        <CardsProdutos
          key={produto.id}
          imagem={produto.photos}
          nome={produto.name}
          preco={produto.price}
          parcelas={produto.installments}
          metodo={produto.paymentMethod}
        />
      );
    });
  
    return (
      <div>
      <ProductsHeader>
                <Label>
                    Ordenar: 
                    <select onChange = {this.onChange}>
                        <option value={'NOME'}>Nome</option>
                        <option value={'PRECO'}>Preço</option>
                        <option value={'CATEGORIA'}>Categoria</option>
                    </select>
                </Label>
                <p>Quantidade de Produtos: 3</p>
      </ProductsHeader>
      <CardsContainer>
             {ListaDeProdutos}
            <FiltrosSacola>
              <Filtros/>
				      <Sacola/>
            </FiltrosSacola>
        </CardsContainer>
        
    </div>
    )
  }
}

export default Produtos