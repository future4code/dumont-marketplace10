import React from 'react'
import styled from "styled-components"
import axios from "axios"

class TelaCadastro extends React.Component {

	state = {
		nome: "",
		descricao: "",
		preco: "",
		imagem: "",
		categoria: "",
		metodo: "",
		parcelas:"",
	}

	onChangeNome= (event) => {
		this.setState({ nome: event.target.value });
	  };
	
	  onChangeDescricao = (event) => {
		this.setState({ descricao: event.target.value });
	  };

	  onChangePreco = (event) => {
		  this.setState({preco: event.target.value})
	  }

	  onChangeImagem = (event) => {
		  this.setState({imagem: event.target.value})
	  }
	  onChangeCategoria = (event) =>{
		  this.setState({categoria: event.target.value})
	  }

	  onChangeMetodo = (event) =>{
		  this.setState({metodo: event.target.value})
	  }

	  onChangeParcelas = (event) =>{
		  this.setState({parcelas: event.target.value})
	  }

	render() {

		return(
		<div>
			<h2>Olá lojista!</h2>
			<h2>Aqui é o seu espaço!</h2>
			<h3>Cadastre aqui os dados do seu produto.</h3>

			<label>Digite o nome do produto:</label>
			<input
			 placeholder="Digite o nome do produto"
			 onChange={this.onChangeNome}></input>

			 <label>Descreva o produto:</label>
			<input 
			placeholder="Escreve a descrição do produto"
			onChange={this.onChangeDescricao}></input>

			<label>Escolha uma categoria:</label>
			<select onChange={this.onChangeCategoria}>				
				<option value="festas">Artigos para festa</option>
				<option value="decoracao">Objetos de Decoração</option>
				<option value="bijuteria">Bijuteria</option>
				<option value="religiosos">Produtos Religiosos</option>
				<option value="enxovais">Enxovais</option>
				<option value="ecofriendly">Acessórios Eco-friendly</option>
			</select>

			<label>Escolha o método de pagamento:</label>
			<select onChange={this.onChangeMetodo}>
				<option value="debito">Cartão de Débito</option>
				<option value="credito">Cartão de Crédito</option>
				<option value="boleto">Boleto Bancário</option>
			</select>
			<input 
			placeholder="Digite o preço em R$"
			onChange={this.onChangePreco}></input>

			<label>Escolha o número de parcelas:</label>
			<select onChange={this.onChangeParcelas}>				
				<option value="1">A vista</option>
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

			<label>Digite a URL da imagem:</label>
			<input 
			placeholder="Digite a url da imagem do produto"
			onChange={this.onChangeImagem}></input>
			<button>Cadastrar</button>
			<button onClick={this.props.botaoVoltar}>Voltar</button>
		</div>	
		)
	}

}
export default TelaCadastro