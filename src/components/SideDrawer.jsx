import React from "react";
import { Spring } from "react-spring/renderprops";

function SideDrawer() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -500 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ duration: 700 }}
    >
      {(props) => (
        <div style={props}>
          <nav className="side-drawer">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </Spring>
  );
}

export default SideDrawer;
