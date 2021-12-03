import React, { Component, Fragment } from "react";
import Bouton from "../../../components/Bouton/Bouton";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class FormulaireModification extends Component{

  state = {
    titreSaisi: this.props.titre,
    auteurSaisi: this.props.auteur,
    nbPagesSaisi: this.props.nbPages
  }

  handleValidation = () => {
    this.props.validationModification(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
  }

  handleAnnulation = () => {
    this.props.annulationModification();
  }

  render(){
    return (
      <Fragment>
        <td>
          <InputGroup className="mb-3">
            <FormControl
              value={this.state.titreSaisi}
              onChange={(event) => this.setState({ titreSaisi: event.target.value })}
              id="basic-url"/>
          </InputGroup>
        </td>
        <td>
          <InputGroup className="mb-3">
            <FormControl
              value={this.state.auteurSaisi}
              onChange={(event) => this.setState({ auteurSaisi: event.target.value })}
              id="basic-url" />
          </InputGroup>
        </td>
        <td>
          <InputGroup className="mb-3">
            <FormControl
              value={this.state.nbPagesSaisi}
              onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })}
              id="basic-url"
              type="number" />
          </InputGroup>
        </td>
        <td>
          <Bouton typeBtn="btn-primary" click={this.handleValidation}>Valider</Bouton>
        </td>
        <td>
          <Bouton typeBtn="btn-warning" click={this.handleAnnulation}>Annuler</Bouton>
        </td>
      </Fragment>
    );
  }
}

export default FormulaireModification;
