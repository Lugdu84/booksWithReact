import React from "react";
import classe from "./TitreH2.module.scss";

const TitreH2 = (props) => {
  const monCss = `${classe.policeTitre} text-primary`;
  return <h2 className={monCss}>{props.children}</h2>
};

export default TitreH2;
