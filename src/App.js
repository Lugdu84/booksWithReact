import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import TitreH1 from "./components/Titres/TitreH1";
import Bouton from "./components/Bouton/Bouton";
import Livres from "./containers/Livres/Livres";

class App extends Component{

  state = {
    ajoutLivre : false,
  }

  ajoutLivreHandler = () => {

    this.setState((oldState, props) => {
      return {ajoutLivre: !oldState.ajoutLivre};
    })

  }


  render(){
    return (
      <Fragment>
        <div className="container">
          <TitreH1>Page listant les livres</TitreH1>
          <Livres ajoutLivre={this.state.ajoutLivre} fermerAjoutLivre={() => this.setState({ajoutLivre: false})}/>
          <Bouton typeBtn="btn-success" size="w-100" click={this.ajoutLivreHandler}>{!this.state.ajoutLivre ? "Ajouter" : "Fermer l'ajout"}</Bouton>
        </div>
      </Fragment>
    );
  }
}

export default App;
