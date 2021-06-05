import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import Navigation from "./Navigation";
import ToolbarIcons from "./ToolbarIcons";

function Toolbar(props) {
  return (
    <div>
      <header>
        <div className="toolbar">
          <nav className="toolbarNavigation">
            <AiOutlineBars
              className="toggle-button"
              onClick={props.drawerClickHandler}
            />
            <h1 className="toolbarLogo">DURO$</h1>
            <div className="spacer" />
            <Navigation />
            <div className="spacer" />
            <div className="toolbarItems">
              <ToolbarIcons />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Toolbar;
