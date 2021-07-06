import React from "react";

function About() {
  return (
    <div className="about">
      <div className="aboutMe">
        <h2>About me</h2>
        <hr className="line" />
        <p>
          I am a self driven, solution oriented iOS developer who is a team
          player with excellent communication skills that tackles problems with
          confidence and optimism.
        </p>
        <div className="hireMe">
          <a href="#contact">Hire me</a>
        </div>
      </div>
      <div>
        <img src={require("./HeaderIMG1.jpeg")} alt="IntroImage" />
      </div>
    </div>
  );
}

export default About;
