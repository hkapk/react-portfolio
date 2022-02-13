import React from 'react';
import gitHub from "../../assets/footer-img/github-512.png";
import linkedin from "../../assets/footer-img/LinkedIn.png";
import gmail from "../../assets/footer-img/gmail.png";


function Footer() {
    return (
        
        <footer className="footer">
            <div className="row-icon">
            <a href="https://www.github.com/hkapk">
            <img src={gitHub} className="logo" style={{ width: "60px" }} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/hank-kapka">
            <img src={linkedin} className="logo" style={{ width: "60px" }} alt="instagram" />
            </a>
            <a href="mailto:hankkapka@gmail.com">
            <img src={gmail} className="logo" style={{ width: "65px" }} alt="gmail" />
            </a>
                </div>
            <p className="tag">Made by Hank</p>
        </footer>
    );
}

export default Footer;