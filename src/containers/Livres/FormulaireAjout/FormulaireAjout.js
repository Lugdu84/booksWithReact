import React, { Component, Fragment } from "react";
import TitreH2 from "../../../components/Titres/TitreH2";
import Form from "react-bootstrap/Form"
import Bouton from "../../../components/Bouton/Bouton";
import {withFormik} from "formik";
import * as Yup from "yup";

class FormulaireAJout extends Component{
  // state = {
  //   titreSaisi : "",
  //   auteurSaisi: "",
  //   nbPagesSaisi: "",
  // } Plus besoin car formik, avec mapPropsToValue

  // handleValidationForm = (event) => {
  //   event.preventDefault();
  //   this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
  // } Plus besoin aussi, mais changement dans le bouton de validation

  render(){
    return (
      <Fragment>
        <TitreH2>Affichage du formulaire</TitreH2>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="titre"
            name="titre"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.titre}
          >
            <Form.Label>Titre</Form.Label>
            <Form.Control type="texte" placeholder="Titre du livre" />
            <Form.Text className="text-danger">
              {
                this.props.touched.titre && this.props.errors.titre
                && <span>{this.props.errors.titre}</span>
              }
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="auteur"
            name="auteur"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.auteur}
          >
            <Form.Label>Auteur</Form.Label>
            <Form.Control type="texte" placeholder="Auteur du livre" />
            <Form.Text className="text-danger">
              {
                this.props.touched.auteur && this.props.errors.auteur
                && <span>{this.props.errors.auteur}</span>
              }
            </Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="nbPages"
            name="nbPages"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.nbPages}
          >
            <Form.Label>Nombre de pages</Form.Label>
            <Form.Control type="number" placeholder="Nombre de pages" />
            <Form.Text className="text-danger">
              {
                this.props.touched.nbPages && this.props.errors.nbPages
                && <span>{this.props.errors.nbPages}</span>
              }
            </Form.Text>
          </Form.Group>
          <Bouton typeBtn="btn-primary" click={this.props.handleSubmit}>Validez</Bouton>

        </Form>
      </Fragment>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    titre: '',
    auteur: '',
    nbPages: '',
  }),
  // validate: values => {
  //   const errors = {};
  //   if (values.titre.length < 3) {
  //     errors.titre = "Le titre doit avoir plus de 3 caractères";
  //   }
  //   if (values.titre.length > 15) {
  //     errors.titre = "Le titre doit avoir moins de 15 caractères";
  //   }
  //   if (!values.titre) {
  //     errors.titre = "Le champ titre est obligatoire"
  //   }
  //   if (!values.auteur){
  //     errors.auteur = "Le champ auteur est obligatoire"
  //   }
  //   if (!values.nbPages){
  //     errors.nbPages = "Le champ nombre de pages est obligatoire"
  //   }
  //   return errors;
  // }, module yup à la place avec validation schema

  validationSchema : Yup.object().shape({
    titre: Yup.string()
      .min(3, "Le titre d'un doit avoir plus de 3 caractères")
      .max(30, "Le titre d'un livre doit avoir moins de 15 caractères")
      .required('Un livre doit avoir un titre'),
    auteur: Yup.string()
      .required("Un livre doit avoir un auteur")
      .min(3, "L'auteur d'un livre doit avoir plus de 3 caractères"),
    nbPages: Yup.number()
      .required("Le nombre de pages d'un livre est obligatoire")
      .min(40, 'Un livre doit avoir au moins 40 pages')
      .lessThan(1000, "Un livre doit avoir moins de 1000 pages")
  }),

  handleSubmit: (values, {props}) => {
    props.validation(values.titre, values.auteur, values.nbPages);
  }
})(FormulaireAJout);
