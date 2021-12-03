import React, { Component, Fragment } from "react";
import FormulaireAJout from "./FormulaireAjout/FormulaireAjout";
import Livre from "./Livre/Livre";

class Livres extends Component{

  state = {
    livres: [
      {
        id: 1,
        titre: "L'algorithmique selon H2PROG",
        auteur: "Mathieu GASTON",
        pages: 200
      },
      {
        id: 2,
        titre: "La France au 19ème",
        auteur: "Albert Patrick",
        pages: 500
      },
      {
        id: 3,
        titre: "Le monde des animaux",
        auteur: "Marc MERLIN",
        pages: 250
      },
      {
        id: 4,
        titre: "Le Virus d'asie",
        auteur: "Tya MILO",
        pages: 120
      }
    ],
    lastIdLivre: 4
  }

  supprimerLivreHandler = (id) => {

    const index = this.state.livres.findIndex(livre => {
      return livre.id === id;
    });
    const newLivres = [...this.state.livres];
    newLivres.splice(index, 1);
    this.setState({livres:newLivres});
  }

  AjouterLivreHandler = (titre, auteur, nbPages) => {
    console.log(titre);
    console.log(auteur);
    console.log(nbPages);
    const newLivre = {
      id: this.state.lastIdLivre + 1,
      titre: titre,
      auteur: auteur,
      pages: nbPages
    }
    const newLivres = [...this.state.livres];
    newLivres.push(newLivre);

    this.setState(oldState => {
      return {
        livres: newLivres,
        lastIdLivre: oldState.lastIdLivre + 1
      }
    });
    this.props.fermerAjoutLivre();
  }

  render(){
    return (
      <Fragment>
        <table className="table text-center">
          <thead>
            <tr className="table-dark">
              <th>Titre</th>
              <th>Auteur</th>
              <th>Nombre de pages</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.livres.map(livre => {
              return (
                <Livre key={livre.id}
                titre={livre.titre}
                auteur={livre.auteur}
                pages={livre.pages}
                modifier={() => console.log(`modifier ${livre.id}`)}
                supprimer={() => this.supprimerLivreHandler(livre.id)}/>

              );
            })
          }
          </tbody>
        </table>
        {this.props.ajoutLivre && <FormulaireAJout validation={this.AjouterLivreHandler}/>}
      </Fragment>
    );
  }
}

export default Livres;
