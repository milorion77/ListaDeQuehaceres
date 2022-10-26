import React from "react";
import ListaQuehaceres from "./componentes/listaQuehaceres/ListaQuehaceres";

class App extends React.Component {

  render(){
    return(
      <div className="container">
        <ListaQuehaceres/>
      </div>
    )
  }
}

export default App;
