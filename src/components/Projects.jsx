import React from "react";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="projects" id="projects">
      <h3>Cowrywise Onbording screens</h3>
        <div className="screens">
          <div className="weather">
            <img src={require("./Cowrywise1.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./Cowrywise2.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./Cowrywise3.png")} alt="" />
          </div>
        </div>
        <p>Cowrywise Onbording screens</p>

        <h3>Todo list</h3>
        <div className="screens">
          <div className="weather">
            <img src={require("./Todo1.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./Todo2.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./Todo.png")} alt="" />
          </div>
        </div>
        <p>Cowrywise Onbording screens</p>

      <h3>Blinkist section replica</h3>
        <div className="screens">
          <div className="weather">
            <img src={require("./Blinkist1.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./Blinkist2.png")} alt="" />
          </div>
        </div>
        <p>Cowrywise Onbording screens</p>

      <h3>Weather app</h3>
        <div className="screens">
          <div className="weather">
            <img src={require("./WeatherAp.png")} alt="" />
          </div>
        </div>
        <p>Cowrywise Onbording screens</p>

      </div>
    </div>
  );
}

export default Projects;
