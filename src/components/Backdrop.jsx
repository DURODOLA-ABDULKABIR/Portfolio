import React from "react";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.close}></div>;
}

export default Backdrop;
