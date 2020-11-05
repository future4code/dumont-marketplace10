import React from 'react'
import styled from "styled-components"
import axios from "axios"

class TelaCadastro extends React.Component {
	render() {

		return(
		<div>
			<h2>Olá lojista!</h2>
			<h2>Aqui é o seu espaço!</h2>
			<h3>Cadastre aqui os dados do seu produto.</h3>
			<input placeholder="Digite o nome do produto"></input>
			<input placeholder="Escreve a descrição do produto"></input>
			<select>
				<option value="">Escola a categoria:</option>
				<option value="festas">Artigos para festa</option>
				<option value="decoracao">Objetos de Decoração</option>
				<option value="bijuteria">Bijuteria</option>
				<option value="religiosos">Produtos Religiosos</option>
				<option value="enxovais">Enxovais</option>
				<option value="ecofriendly">Acessórios Eco-friendly</option>
			</select>
			<select>
				<option value="">Escola o métdo de pagamento:</option>
				<option value="debito">Cartão de Débito</option>
				<option value="credito">Cartão de Crédito</option>
				<option value="boleto">Boleto Bancário</option>
			</select>
			<input placeholder="Digite o preço em R$"></input>
			<select>
				<option value="">Escolha o número máximo de parcelas:</option>
				<option value="1">Á vista</option>
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
			<input placeholder="Digite a url da imagem do produto"></input>
			<button>Cadastrar</button>
			<button onClick={this.props.botaoVoltar}>Voltar</button>
		</div>	
		)
	}

}

export default TelaCadastro