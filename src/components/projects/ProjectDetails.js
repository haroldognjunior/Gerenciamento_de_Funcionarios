import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Footer } from "../Footer/Footer";
import moment from 'moment'

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Nome: {project.nome}</span>
            <p>Cargo: {project.cargo}</p>            
            <p>Data de Nascimento: {project.datanascimento}</p>
            <p>Salário: R$ {project.salario}</p>
            <p>Descrição do Cargo: {project.descricaocargo}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Cadastro realizado por {project.authorFirstName} {project.authorLastName} ({auth.email})</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>         
        </div>
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
