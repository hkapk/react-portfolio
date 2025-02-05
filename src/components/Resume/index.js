import React from 'react';
import bootsrap from "../../assets/resume/bootsrap.png";
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
           
        <div className="resume-list">
            <div className="row-icon">
            <img src= {JS_HTML_CSS} className="logo" style ={{ width: "300px", height: "auto"}} alt="css, JS, CSS"></img>
            <img src= {react} className="logo" style ={{ width: "300px", height: "auto" }} alt="react"></img>
            <img src= {node} className="logo" style ={{ width: "300px", height: "auto" }} alt="node"></img>
            </div>
            <div className="row-icon">
            <img src= {mongo} className="logo" style ={{ width: "300px", height: "auto" }} alt="mongo"></img>
            <img src= {mysql} className="logo" style ={{ width: "300px", height: "auto" }} alt="mysql"></img>
            <img src= {npm} className="logo" style ={{ width: "300px", height: "auto" }} alt="npm"></img>
            </div>

            <div className="row-icon">
            <img src= {jquery} className="logo" style ={{ width: "300px", height: "auto" }} alt="jquery"></img>
            <img src= {bootsrap} className="logo" style ={{ width: "300px", height: "auto" }} alt="jquery"></img>
            <img src= {sequelize} className="logo" style ={{ width: "300px", height: "auto" }} alt="sequelize"></img>
            </div>
            </div>
        </section>
    )
};

export default Resume