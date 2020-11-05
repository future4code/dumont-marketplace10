import React, { Component } from 'react'
import styled from "styled-components"
import axios from "axios"
import CardProdutos from './CardsProdutos'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`    
const CardsInfo = styled.div`
	color: black;
  grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 1;
	grid-column-end: 2;
`
const ProductsHeader = styled.div`
	  display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

const ImagemContainer = styled.div`
	width: 15vw;
  height: 15vw;
`


class Produtos extends React.Component {

  state = {
    order: 'NOME'
  }
  
  onChange = (event) => {
    const choice = event.target.value
    this.setState({order: choice})
  }

  render() {
    return (
      <div>
      <ProductsHeader>
                <p>Quantidade de Produtos: 3</p>
                <label>
                    Ordenar: 
                    <select onChange = {this.onChange}>
                        <option value={'NOME'}>Nome</option>
                        <option value={'PRECO'}>Preço</option>
                        <option value={'CATEGORIA'}>Categoria</option>
                    </select>
                </label>
      </ProductsHeader>
      <CardsContainer>
             <CardsInfo>
                <ImagemContainer>
                <p>Imagem</p>
                </ImagemContainer>
                <p>Pulseira - Lenda Akai Ito</p>
                <p>R$ 37,00</p>
                <p>10 x R$ 3,70</p>
                <p>Crédito - Débito - Boleto</p>
                <button>Adicionar ao Carrinho</button>
            </CardsInfo>
        </CardsContainer>
    </div>
    )
  }
}

export default Produtos