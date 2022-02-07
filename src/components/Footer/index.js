import React from 'react';
import gitHub from "../../assets/footer-img/github-512.png";
import linkedin from "../../assets/footer-img/LinkedIn.png";
import gmail from "../../assets/footer-img/gmail.png";


function Footer() {
    return (
        
        <footer className="footer">
            <div className="row">
            <a href="https://www.github.com/hkapk">
            <img src={gitHub} className="logo" style={{ width: "50%" }} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/hank-kapka">
            <img src={linkedin} className="logo" style={{ width: "12%" }} alt="instagram" />
            </a>
            <a href="mailto:hankkapka@gmail.com">
            <img src={gmail} className="logo" style={{ width: "50%" }} alt="gmail" />
            </a>
                </div>
            Made by Hank
        </footer>
    );
}

export default Footer;