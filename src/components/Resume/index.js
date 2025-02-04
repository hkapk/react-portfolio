import React from 'react';
import css from "../../assets/resume/css.png";
import html from "../../assets/resume/html.png";
import javascript from "../../assets/resume/JavaScript.png";
import jquery from "../../assets/resume/jquery.png";
import mongo from "../../assets/resume/mongo.png";
import mysql from "../../assets/resume/mysql.png";
import node from "../../assets/resume/node.png";
import npm from "../../assets/resume/npm.png";
import react from "../../assets/resume/react.png";
import sequelize from "../../assets/resume/sequelize.png";
import resumePdf from "../../assets/resume.pdf";

function Resume() {
    return (
        <section>

<a href={resumePdf} download target="_blank" rel="noreferrer">
<p className="resume-link">Download my resume</p></a>
            <h1 id="resume-head">My skills include:</h1>

            <div className="row resume-row">
            <img src= {css} className="resume-icon" style ={{ width: "30%" }} alt="css"></img>
            <img src= {html} className="resume-icon" style ={{ width: "30%" }} alt="html"></img>
            <img src= {javascript} className="resume-icon" style ={{ width: "40%" }} alt="javascript"></img>
            </div>
            <div className="row resume-row">
            <img src= {jquery} className="resume-icon" style ={{ width: "20%" }} alt="jquery"></img>
            <img src= {mongo} className="resume-icon" style ={{ width: "45%" }} alt="mongo"></img>
            <img src= {mysql} className="resume-icon" style ={{ width: "30%" }} alt="mysql"></img>
            </div>
            <div className="row resume-row">
            <img src= {node} className="resume-icon" style ={{ width: "45%" }} alt="node"></img>
            <img src= {npm} className="resume-icon" style ={{ width: "55%" }} alt="npm"></img>
            </div>
            <div className="row resume-row">
            <img src= {react} className="resume-icon" style ={{ width: "50%" }} alt="react"></img>
            <img src= {sequelize} className="resume-icon" style ={{ width: "50%" }} alt="sequelize"></img>
            
            </div>
        
        </section>
    )
};

export default Resume