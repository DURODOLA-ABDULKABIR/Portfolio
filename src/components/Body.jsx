import React from "react";
import BodyIcons from "./BodyIcons";
import About from "./About";
import Services from "./Services";
import Role from "./Role";
import Skills from "./Skills";
import Projects from "./Projects";

function Body() {
  return (
    <div className="content">
      <About />
      <div className="jobDescription">
        <Services />
        <Role />
      </div>
      <div className="getInTouch">
        <h2>Get In Touch</h2>
        <BodyIcons />
      </div>
      <Skills />
      <Projects />
      <div className="hireMe-footer">
        <a href="#contact">Hire me</a>
      </div>
    </div>
  );
}

export default Body;
