import React from "react";
import styled from "styled-components";
import axios from "axios";


const CardContainer = styled.div`
border: 2px solid;
display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
/* display: flex;
flex-direction: column;
align-items: center; */
cursor: pointer;
margin: 12px;
&:hover {
  border: 2px solid;
}
`;

const CardText = styled.p`
  margin: 8px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
`;

const CardProdutos = (props) => {
    return (
      <CardContainer>
        <CardImage alt={props.nome} src={props.imagem} />
        <CardText>{props.nome}</CardText>
        <CardText>{props.preco}</CardText>
        <CardText>{props.parcelas}</CardText>
        <CardText>{props.metodo}</CardText>
        <button>Adicionar à Sacola</button>
      </CardContainer>
    );
  };
  
  export default CardProdutos;