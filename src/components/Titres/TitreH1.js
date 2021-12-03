import React from "react";
import classe from "./TitreH1.module.scss";

const TitreH1 = (props) => {
  const monCss = `${classe.policeTitre} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`;
  return <h1 className= {monCss}>{props.children}</h1>
};

export default TitreH1;
