import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Funcional1 from './componentes/componente_hijo_funcional_1'
import Funcional2 from './componentes/componente_hijo_funcional_2'
import Funcional3 from './componentes/componente_hijo_funcional_3'


//const nombre_padre='Darth Vader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, first example</h2>
        </div>
       

      
      
      <Funcional1 />

      <Funcional2 />
      
      <Funcional3 />

      


      </div>
    );
  }
}

export default App;
