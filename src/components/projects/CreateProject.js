import React, { Component } from 'react'
import { connect } from 'react-redux'
import { funcionarioProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CadastrarFuncionario extends Component {
  state = {
    nome: '',
    cargo: '',
    datanascimento: '',
    salario: '',
    descricaocargo: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();   
    this.props.funcionarioProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de um novo funcionário</h5>
          <div className="input-field">
            <input type="text" id='nome' onChange={this.handleChange} required />
            <label htmlFor="nome">Nome Completo do Funcionário</label>
          </div>
          <div className="input-field">
            <textarea id="cargo" className="materialize-textarea" onChange={this.handleChange} required></textarea>
            <label  htmlFor="cargo">Cargo</label>
          </div>
          <div className="input-field">
          <input type="date" id='datanascimento' onChange={this.handleChange} required />
            <label htmlFor="datanascimento">Data de Nascimento</label>
          </div>
          <div required className="input-field">
            <textarea id="salario" className="materialize-textarea" onChange={this.handleChange} required></textarea>
            <label htmlFor="salario">Salário R$</label>
          </div>
          <div className="input-field">
            <textarea id="descricaocargo" className="materialize-textarea" onChange={this.handleChange} required></textarea>
            <label htmlFor="descricaocargo">Descrição do Cargo</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Cadastrar</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    funcionarioProject: (project) => dispatch(funcionarioProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastrarFuncionario)
