import React from 'react';
import budget from "../../assets/project-img/budget-tracker.png";
import tech from "../../assets/project-img/tech-blog.png";
import trippin from "../../assets/project-img/trippin-worldwide.png";
import zoo from "../../assets/project-img/zookeeper.png"
import note from "../../assets/project-img/note.png";
import food from "../../assets/project-img/food.png";
import dgscore from "../../assets/project-img/dg.png";
import dgskins from "../../assets/project-img/DgSkins.png";
import bingo from "../../assets/project-img/WaldoBingo.png";



function Portfolio() {
    return (
        <section id="portfolio">
            <h1 id="about">Here are a few of my recent projects</h1>
            <p className="topic"> Clicking the icons will take you to their deployments.</p>

            <div className="row profile-row">

            <a href="https://calm-headland-49546.herokuapp.com/">
            <img src={budget} className="profile-icon" style={{ width: "1080px" }} alt="budget-tracker" />
            <a href="https://github.com/hkapk/budget-tracking-PWA">
                <p className="profile-text">View on Github</p> 
                </a></a>

            <a href="https://calm-peak-91863.herokuapp.com/">
            <img src={dgscore} className="profile-icon" style={{ width: "1080px" }} alt="score-keeper" />
            
            <a href="https://github.com/hkapk/dg-score-card">
                <p className="profile-text">View on Github</p> 
                </a></a>
            <a href="https://sheltered-meadow-11937.herokuapp.com/">
            <img src={tech} className="profile-icon" style={{ width: "1080px" }} alt="tech-blog" />
            
            <a href="https://github.com/hkapk/tech-blog">
            <p className="profile-text">View on Github</p>
             </a> </a>
             </div>


             <div className="row profile-row">
            <a href="https://waldo-caller.vercel.app/">
            <img src={bingo} className="profile-icon" style={{ width: "1080px" }} alt="waldo-bingo" />
            <a href="https://github.com/hkapk/waldo-caller">

            <p className="profile-text">View on Github</p></a>  </a>

            <a href="https://hkapk.github.io/Disc-Golf-Skins-ScoreKeeper/">
            <img src={dgskins} className="profile-icon" style={{ width: "1080px" }} alt="discgolf-skins" />
            
            <a href="https://github.com/hkapk/Disc-Golf-Skins-ScoreKeeper">
            <p className="profile-text">View on Github</p>
            </a> </a>
            </div>

            


             <div className="row profile-row">
            <a href="https://trippin-worldwide.herokuapp.com/">
            <img src={trippin} className="profile-icon" style={{ width: "1080px" }} alt="trippin-worldwide" />
           
            <a href="https://github.com/hkapk/trippin-worldwide"> 
            <p className="profile-text">View on Github</p></a></a>
            </div>

            <div className="row profile-row">
            <a href="https://calm-sea-20605.herokuapp.com/">
            <img src={zoo} className="profile-icon" style={{ width: "1080px" }} alt="zoo-keeper" />
            
            <a href="https://github.com/hkapk/trippin-worldwide">
            <p className="profile-text">View on Github</p></a>  </a>
            <a href="https://nameless-escarpment-59702.herokuapp.com/">
            <img src={note} className="profile-icon" style={{ width: "1080px" }} alt="note-taker" />
            
            <a href="https://github.com/hkapk/note-taker">
            <p className="profile-text">View on Github</p>
            </a> </a>
            </div>

            <div className="row profile-row">
            <a href="https://hkapk.github.io/food-festival/index.html">
            <img src={food} className="profile-icon" style={{ width: "1080px" }} alt="note-taker" />
           
            <a href="https://github.com/hkapk/food-festival"><p className="profile-text">
                View on Github</p>
                </a>  </a>
            </div>
        </section>
    )
};

export default Portfolio