import React, { Component } from 'react'
import styled from "styled-components"
import axios from "axios"
import CardProdutos from './CardsProdutos'
import Filtros from './Filtros.js'
import Sacola from './Sacola.js'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 23.5%;
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
const CardsInfo2= styled.div`
	color: black;
  grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 2;
	grid-column-end: 3;
`
const CardsInfo3= styled.div`
	color: black;
  grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 3;
	grid-column-end: 4;
`
const CardsInfo4= styled.div`
	color: black;
  grid-row-start: 1;
	grid-row-end: 2;
	grid-column-start: 4;
	grid-column-end: 5;
`
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
  }

  render() {
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
            <CardsInfo2>
                <ImagemContainer>
                <p>Imagem</p>
                </ImagemContainer>
                <p>Pulseira - Lenda Akai Ito</p>
                <p>R$ 37,00</p>
                <p>10 x R$ 3,70</p>
                <p>Crédito - Débito - Boleto</p>
                <button>Adicionar ao Carrinho</button>
            </CardsInfo2>
            <CardsInfo3>
                <ImagemContainer>
                <p>Imagem</p>
                </ImagemContainer>
                <p>Pulseira - Lenda Akai Ito</p>
                <p>R$ 37,00</p>
                <p>10 x R$ 3,70</p>
                <p>Crédito - Débito - Boleto</p>
                <button>Adicionar ao Carrinho</button>
            </CardsInfo3>
            <CardsInfo4>
                <ImagemContainer>
                <p>Imagem</p>
                </ImagemContainer>
                <p>Pulseira - Lenda Akai Ito</p>
                <p>R$ 37,00</p>
                <p>10 x R$ 3,70</p>
                <p>Crédito - Débito - Boleto</p>
                <button>Adicionar ao Carrinho</button>
            </CardsInfo4>
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