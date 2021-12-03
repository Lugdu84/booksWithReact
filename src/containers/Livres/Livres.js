import React, { Component, Fragment } from "react";
import FormulaireAJout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModification from "./FormulaireModification/FormulaireModification";
import Livre from "./Livre/Livre";

class Livres extends Component{

  state = {
    livres: [
      {
        id: 1,
        titre: "L'algorithmique selon H2PROG",
        auteur: "Mathieu GASTON",
        nbPages: 200
      },
      {
        id: 2,
        titre: "La France au 19ème",
        auteur: "Albert Patrick",
        nbPages: 500
      },
      {
        id: 3,
        titre: "Le monde des animaux",
        auteur: "Marc MERLIN",
        nbPages: 250
      },
      {
        id: 4,
        titre: "Le Virus d'asie",
        auteur: "Tya MILO",
        nbPages: 120
      }
    ],
    lastIdLivre: 4,
    idLivreAModifier: 0
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
    const newLivre = {
      id: this.state.lastIdLivre + 1,
      titre,
      auteur,
      nbPages
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

  ModifiationLivreHandler = (id, titre, auteur, nbPages) => {
    const index = this.state.livres.findIndex(livre => {
      return livre.id === id;
    })

    const newLivre = {
      id,
      titre,
      auteur,
      nbPages
    }
    const newLivres = [...this.state.livres];
    newLivres[index] = newLivre;
    this.setState({
      livres: newLivres,
      idLivreAModifier: 0
    })
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
              if (livre.id !== this.state.idLivreAModifier) {
                return (
                  <tr key={livre.id}>
                    <Livre key={livre.id}
                      titre={livre.titre}
                      auteur={livre.auteur}
                      pages={livre.nbPages}
                      modifier={() => this.setState({ idLivreAModifier: livre.id })}
                      supprimer={() => this.supprimerLivreHandler(livre.id)} />
                  </tr>
                );
              } else {
                return (
                  <tr key={livre.id}>
                    <FormulaireModification
                      id = {livre.id}
                      titre={livre.titre}
                      auteur={livre.auteur}
                      nbPages={livre.nbPages}
                      validationModification={this.ModifiationLivreHandler}
                      />
                  </tr>
                );
              }

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
