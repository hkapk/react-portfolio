import React from 'react';
import css from "../../assets/resume/css.png";
import html from "../../assets/resume/html.png";
import javascript from "../../assets/resume/JavaScript.png";
import jquery from "../../assets/resume/jquery.jpg";
import mongo from "../../assets/resume/mongo.png";
import mysql from "../../assets/resume/mysql.png";
import node from "../../assets/resume/node.png";
import npm from "../../assets/resume/npm.png";
import react from "../../assets/resume/react.png";
import sequelize from "../../assets/resume/sequelize.png";

function Resume() {
    return (
        <section>
             Hey It's me.
            <a href="./assets/resume.pdf" download target="_blank">Download my resume</a>
            <div className="row">
            <img src= {css} className="-icon" style ={{ width: "" }} alt="css"></img>
            <img src= {html} className="profile-icon" style ={{ width: "" }} alt="html"></img>
            <img src= {javascript} className="profile-icon" style ={{ width: "" }} alt="javascript"></img>
            </div>
            <div className="row">
            <img src= {jquery} className="profile-icon" style ={{ width: "5%" }} alt="jquery"></img>
            <img src= {mongo} className="profile-icon" style ={{ width: "5%" }} alt="mongo"></img>
            <img src= {mysql} className="profile-icon" style ={{ width: "5%" }} alt="mysql"></img>
            </div>
            <img src= {node} className="profile-icon" style ={{ width: "5%" }} alt="node"></img>
            <img src= {npm} className="profile-icon" style ={{ width: "5%" }} alt="npm"></img>
            <div className="row">
            <img src= {react} className="profile-icon" style ={{ width: "5%" }} alt="react"></img>
            <img src= {sequelize} className="profile-icon" style ={{ width: "5%" }} alt="sequelize"></img>
            
            </div>
           
         
        
        </section>
    )
};

export default Resume