import React from "react";
import styled from "styled-components";
import axios from "axios";

class TelaCadastro extends React.Component {
  state = {
    nome: "",
    descricao: "",
    preco: "",
    imagem: [],
    categoria: "",
    metodo: "",
    parcelas: "",
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  onChangePreco = (event) => {
    this.setState({ preco: event.target.value });
  };

  onChangeImagem = (event) => {
    this.setState({ imagem: event.target.value });
  };
  onChangeCategoria = (event) => {
    this.setState({ categoria: event.target.value });
  };

  onChangeMetodo = (event) => {
    this.setState({ metodo: event.target.value });
  };

  onChangeParcelas = (event) => {
    this.setState({ parcelas: event.target.value });
  };

  criaProdutos = () => {
    const body = {
      name: this.state.nome,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethod: this.state.metodo,
      category: this.state.categoria,
      photos: this.state.imagem,
      installments: Number(this.state.parcelas),
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products",
        body
      )
      .then((response) => {
        this.setState({ nome: "" });
        this.setState({ descricao: "" });
        this.setState({ metodo: "" });
        this.setState({ imagem: [] });
        this.setState({ parcelas: "" });
        this.setState({ categoria: "" });
        this.setState({ preco: "" });
        alert("Produto Cadastrado com Sucesso!");
      })
      .catch((error) => {
        console.log(body);
        // console.log(error.message);
        alert("Opa!");
      });
  };

  render() {
    return (
      <div>
        <h2>Olá lojista!</h2>
        <h2>Aqui é o seu espaço!</h2>
        <h3>Cadastre aqui os dados do seu produto.</h3>

        <label>Digite o nome do produto:</label>
        <input
          value={this.state.nome}
          placeholder="Digite o nome do produto"
          onChange={this.onChangeNome}
        ></input>

        <label>Descreva o produto:</label>
        <input
          value={this.state.descricao}
          placeholder="Escreve a descrição do produto"
          onChange={this.onChangeDescricao}
        ></input>

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
          value={this.state.preco}
          placeholder="Digite o preço em R$"
          onChange={this.onChangePreco}
        ></input>

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
          value={this.state.imagem}
          placeholder="Digite a url da imagem do produto"
          onChange={this.onChangeImagem}
        ></input>
        <button onClick={this.criaProdutos}>Cadastrar</button>
        <button onClick={this.props.botaoVoltar}>Voltar</button>
      </div>
    );
  }
}

export default TelaCadastro;

	