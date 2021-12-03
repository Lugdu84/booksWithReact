import React from "react";

const Bouton = (props) => {
  const btnCss = `btn ${props.typeBtn} ${props.size}`;
  return <button className={btnCss} onClick={props.click}>{props.children}</button>
};

export default Bouton;
