import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponenteTonto from './componentes/componente_hijo_tonto'
import Funcional1 from './componentes/componente_hijo_funcional_1'

const nombre_padre = 'Darth Vader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, first example</h2>
        </div>
       

      
      
      <Funcional1 />
      <ComponenteTonto nombre_padre={nombre_padre}/>

      


      </div>
    );
  }
}

export default App;
