import React from "react";
import Bouton from "../../../components/Bouton/Bouton";

const component = (props) => (
  <>
    <td>{props.titre}</td>
    <td>{props.auteur}</td>
    <td>{props.pages}</td>
    <td><Bouton typeBtn="btn-warning" click={props.modifier}>Modifier</Bouton></td>
    <td><Bouton typeBtn="btn-danger" click={props.supprimer}>Supprimer</Bouton></td>
  </>
);

export default component;
