import React from 'react';
import hankImg from "../../assets/hank-img.png";

function About() {
  return (
    <section>
      <h1 id="about"></h1>
      <div className="row">
      <div className="picture">
      <img src={hankImg}  style={{ width: "90%", 
       }} alt="hank" />
      </div>
      <div className="about">
      <p style={{width: "85%"}}>
      Hi, I'm Hank and welcome to my portfolio! I am an aspiring web developer 
      with a passion for developing my skills. Lately I have been exploring mySQL, 
      sequelize, mongoDB and mongoose on the backend and React on the front end. You can check out my 
      projects in my portfolio, or on my Github, linked below.</p>
      <a href="https://www.github.com/hkapk">Check out my Github</a>
      </div>
      </div>
    </section>
  );
}

export default About;