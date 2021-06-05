import React from "react";
import { Spring } from "react-spring/renderprops";

function Introduction() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 5000, duration: 1000 }}
    >
      {(props) => (
        <div className="name" style={props}>
          <h6> I am</h6>
          <h2>Durodola Abdulkabir</h2>
          <h6>
            iOS Developer{" "}
            <span
              area-hidden="true"
              className="emoji"
              role="img"
              aria-label="pointer"
            >
              👨‍💻
            </span>
          </h6>
        </div>
      )}
    </Spring>
  );
}

export default Introduction;
