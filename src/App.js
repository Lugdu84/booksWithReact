import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TitreH1 from "./components/Titres/titre";

class App extends Component{
  render(){
    return (
      <Fragment>
        <div className="container">
          <TitreH1>Page listant les livres</TitreH1>
          <div>Livres</div>
          <button className="btn btn-success">Ajouter</button>
        </div>
      </Fragment>
    );
  }
}

export default App;
