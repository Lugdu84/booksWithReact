import React from "react";
import Alert from "react-bootstrap/Alert"

const alert = (props) => {
  return <Alert variant= {props.typeAlert}>
    {props.children}
  </Alert>
};

export default alert;
