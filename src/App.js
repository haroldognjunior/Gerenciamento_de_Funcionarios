import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/AppNav/AppNav'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CadastrarFuncionario from './components/projects/CreateProject'
import { Home } from './components/Home/Home'
import criar from './components/projects/teste'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/dash'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CadastrarFuncionario} />
            <Route path='/teste' component={criar} />            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
