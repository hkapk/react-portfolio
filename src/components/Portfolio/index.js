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
            <div className="row">
            <a href="https://calm-headland-49546.herokuapp.com/">
            <img src={budget} className="icon" style={{ width: "90%" }} alt="budget-tracker" />
            </a>
            <a href="https://sheltered-meadow-11937.herokuapp.com/">
            <img src={tech} className="icon" style={{ width: "90%" }} alt="tech-blog" />
            </a>
            <a href="https://trippin-worldwide.herokuapp.com/">
            <img src={trippin} className="icon" style={{ width: "90%" }} alt="trippin-worldwide" />
            </a>
            </div>
            <div className="row">
            <a href="https://calm-sea-20605.herokuapp.com/">
            <img src={zoo} className="icon" style={{ width: "90%" }} alt="zoo-keeper" />
            </a>
            <a href="https://nameless-escarpment-59702.herokuapp.com/">
            <img src={note} className="icon" style={{ width: "90%" }} alt="note-taker" />
            </a>
            <a href="https://hkapk.github.io/food-festival/index.html">
            <img src={food} className="icon" style={{ width: "90%" }} alt="note-taker" />
            </a>
            </div>
        </section>
    )
};

export default Portfolio