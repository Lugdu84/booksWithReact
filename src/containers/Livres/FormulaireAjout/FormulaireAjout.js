import React, { Component, Fragment } from "react";
import TitreH2 from "../../../components/Titres/TitreH2";
import Form from "react-bootstrap/Form"
import Bouton from "../../../components/Bouton/Bouton";

class FormulaireAJout extends Component{
  state = {
    titreSaisi : "",
    auteurSaisi: "",
    nbPagesSaisi: "",
  }

  handleValidationForm = (event) => {
    event.preventDefault();
    this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
  }

  render(){
    return (
      <Fragment>
        <TitreH2>Affichage du formulaire</TitreH2>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="titre"
            onChange={(event) => this.setState({titreSaisi: event.target.value})}
            value={this.state.titreSaisi}>
            <Form.Label>Titre</Form.Label>
            <Form.Control type="texte" placeholder="Titre du livre" />
            <Form.Text className="text-muted">
              Entrez le titre du livre
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="auteur"
            onChange={(event) => this.setState({ auteurSaisi: event.target.value })}
            value={this.state.auteurSaisi}>
            <Form.Label>Auteur</Form.Label>
            <Form.Control type="texte" placeholder="Auteur du livre" />
            <Form.Text className="text-muted">
              Entrez l'auteur du livre
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="pages"
            onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })}
            value={this.state.nbPagesSaisi}>
            <Form.Label>Nombre de pages</Form.Label>
            <Form.Control type="number" placeholder="Nombre de pages" />
            <Form.Text className="text-muted">
              Entrez le nombre de pages du livre
            </Form.Text>
          </Form.Group>
          <Bouton typeBtn="btn-primary" click={this.handleValidationForm}>Validez</Bouton>

        </Form>
      </Fragment>
    );
  }
}

export default FormulaireAJout;
