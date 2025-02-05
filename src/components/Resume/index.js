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
import JS_HTML_CSS from "../../assets/resume/JS_HTML_CSS.png";

function Resume() {
    return (
        <section>

<a href={resumePdf} download target="_blank" rel="noreferrer">
<p className="resume-link">Download my resume</p></a>
            <h1 id="resume-head">My skills include:</h1>

            <div className="row resume-row">
            <img src= {JS_HTML_CSS} className="resume-icon" style ={{ width: "45%", height: "auto" }} alt="css, JS, CSS"></img>
            <img src= {node} className="resume-icon" style ={{ width: "45%", height: "auto" }} alt="node"></img>
            </div>
            <div className="row resume-row">
            <img src= {mongo} className="resume-icon" style ={{ width: "45%", height: "auto" }} alt="mongo"></img>
            <img src= {mysql} className="resume-icon" style ={{ width: "30%", height: "auto" }} alt="mysql"></img>
            </div>

            <div className="row resume-row">
            <img src= {react} className="resume-icon" style ={{ width: "45%", height: "auto" }} alt="react"></img>
            <img src= {sequelize} className="resume-icon" style ={{ width: "45%", height: "auto" }} alt="sequelize"></img>
            </div>
            
            <div className="row resume-row">
            <img src= {npm} className="resume-icon" style ={{ width: "30%", height: "auto" }} alt="npm"></img>
            <img src= {jquery} className="resume-icon" style ={{ width: "30%", height: "auto" }} alt="jquery"></img>
            </div>
        
        </section>
    )
};

export default Resume