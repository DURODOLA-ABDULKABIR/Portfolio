import React from "react";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
        <hr className = "solidline"/>
      <div className="projects">
      <h3>Fundall mini app</h3>
        <div className="screens">
          <div className="weather">
            <img src={require("./fundall1.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./fundall2.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./fundall3.png")} alt="" />
          </div>
        </div> 
        <div>
            <p><b>Technology used: </b>Storyboards, RESTful API, MVVM architecture, UserDefaults, Version control.</p>
            <a href="https://github.com/DURODOLA-ABDULKABIR" target="_blank" rel="noopener noreferrer">Open in Github</a>
        </div>
        
        <hr className="solidline"/>

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
        <div>
            <p><b>Technology used: </b>Autolayout, Storyboards, Realm, Version control.</p>
            <a href="https://github.com/DURODOLA-ABDULKABIR" target="_blank" rel="noopener noreferrer">Open in Github</a>
        </div>

        <hr className = "solidline"/>

      <h3>Blinkist section replica</h3>
        <div className="screens">
          <div className="weather">
            <img src={require("./Blinkist1.png")} alt="" />
          </div>

          <div className="weather">
            <img src={require("./Blinkist2.png")} alt="" />
          </div>
        </div>
        <div>
        <p><b>Technology used: </b>Json serialization, Autolayout, collectionView, Storyborads, Git.</p>
            <a href="https://github.com/DURODOLA-ABDULKABIR" target="_blank" rel="noopener noreferrer">Open in Github</a>
        </div>

        <hr className = "solidline"/>

      <h3>Weather app</h3>
        <div className="screens">
          <div className="weather">
            <img src={require("./WeatherAp.png")} alt="" />
          </div>
        </div>
        <div>
        <p><b>Technology used: </b>AutoLayout, Openweathermap API, MVVM architecture, Storyboards, Version control.</p>
            <a href="https://github.com/DURODOLA-ABDULKABIR" target="_blank" rel="noopener noreferrer">Open in Github</a>
        </div>

      </div>
    </div>
  );
}

export default Projects;
