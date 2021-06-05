import React from "react";
import { Spring } from "react-spring/renderprops";

function Introduction2() {
  return (
    <Spring
      from={{ opacity: 5, transformY: 180 }}
      to={{ opacity: 0, transformY: 0 }}
      config={{ duration: 5000 }}
    >
      {(props) => (
        <div className="greeting" style={props}>
          <h5>
            Hi there{" "}
            <span role="img" aria-label="pointer">
              🙋‍♂️
            </span>
          </h5>
          <p>I design and develop experiences that make people's lives easy</p>
        </div>
      )}
    </Spring>
  );
}

export default Introduction2;
