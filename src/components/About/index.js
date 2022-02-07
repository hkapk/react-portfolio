import React from 'react';
import hankImg from "../../assets/hank-img.png";

function About() {
  return (
    <section>
      <h1 id="about">About me</h1>
      <div>
      <img src={hankImg} className="my-2" style={{ width: "25%" }} alt="hank" />
      <p className="my-2" style={{width: "50%"}}>
      Hi, I'm Hank and welcome to my portfolio! I am an aspiring web developer 
      with a passion for developing my skills. Lately I have been exploring mySQL, 
      sequelize, mongoDB and mongoose on the backend and React on the front end. You can check out my 
      projects in my portfolio, or on my Github, linked below.</p>
      <a href="https://www.github.com/hkapk">Check out my Github</a>
      </div>
    </section>
  );
}

export default About;