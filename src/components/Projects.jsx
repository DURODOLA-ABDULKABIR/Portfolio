import React from "react";


function Projects(){
    return(
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects"  id="projects">
                <div className="fashion"><a href="https://durodola-abdulkabir.github.io/Fashion-landing-page/" target="_blank" rel="noopener noreferrer"><p>Fasion landing page</p><img src={require("./fashion.png")} alt=""/></a></div>
                <div className="weather"><a href="https://protected-wildwood-49216.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>Weather App</p><img src={require("./weather.png")} alt=""/></a></div>
                <div className="newsletter"><a href="https://still-falls-33408.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p>Newsletter sign up page</p><img src={require("./newsletter.png")} alt=""/></a></div> 
            </div>
        </div>
    )
}

export default Projects;