import React from "react";
import hankImg from "../../assets/hank-img.png";

function About() {
    return (
        <div className="py-8">
            <p> Hank is a  web developer specializing in hand-coded fullstack web pages and applications. Contact me to
                get started on your website or application today!
            </p>
            <div className="w-full max-w-md h-56 sm:h-72 rounded-xl border border-slate-200 overflow-hidden transition hover:border-slate-400">
                <img src={hankImg} alt="Photo of Hank"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                ></img>
            </div>
        </div>
    );
}

export default About