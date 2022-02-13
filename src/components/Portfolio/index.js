import React from 'react';
import budget from "../../assets/project-img/budget-tracker.png";
import tech from "../../assets/project-img/tech-blog.png";
import trippin from "../../assets/project-img/trippin-worldwide.png";
import zoo from "../../assets/project-img/zookeeper.png"
import note from "../../assets/project-img/note.png";
import food from "../../assets/project-img/food.png";

function Portfolio() {
    return (
        <section id="portfolio">
            <h1 id="about">Here are a few of my recent projects</h1>
            <div className="row">
            <a href="https://calm-headland-49546.herokuapp.com/">
            <img src={budget} className="profile-icon" style={{ width: "1080px" }} alt="budget-tracker" />
            
            <a href="https://github.com/hkapk/budget-tracking-PWA">Github</a></a>
            <a href="https://sheltered-meadow-11937.herokuapp.com/">
            <img src={tech} className="profile-icon" style={{ width: "1080px" }} alt="tech-blog" />
            
            <a href="https://github.com/hkapk/tech-blog">Github </a> </a>
            <a href="https://trippin-worldwide.herokuapp.com/">
            <img src={trippin} className="profile-icon" style={{ width: "1080px" }} alt="trippin-worldwide" />
           
            <a href="https://github.com/hkapk/trippin-worldwide"></a></a>
            </div>
            <div className="row">
            <a href="https://calm-sea-20605.herokuapp.com/">
            <img src={zoo} className="profile-icon" style={{ width: "1080px" }} alt="zoo-keeper" />
            
            <a href="https://github.com/hkapk/trippin-worldwide">Github</a>  </a>
            <a href="https://nameless-escarpment-59702.herokuapp.com/">
            <img src={note} className="profile-icon" style={{ width: "1080px" }} alt="note-taker" />
            
            <a href="https://github.com/hkapk/note-taker">Github</a> </a>
            <a href="https://hkapk.github.io/food-festival/index.html">
            <img src={food} className="profile-icon" style={{ width: "1080px" }} alt="note-taker" />
           
            <a href="https://github.com/hkapk/food-festival">Github</a>  </a>
            </div>
        </section>
    )
};

export default Portfolio