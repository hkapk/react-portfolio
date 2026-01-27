import React from "react";
import hankImg from "../../assets/hank-img.png";

function About() {
    return (
        <div className="lg:mt-12 px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 
                      lg:max-w-5xl lg:mx-auto">

                {/* Image */}
                <div className="w-full max-w-md h-56 sm:h-72 rounded-xl border border-slate-200 overflow-hidden transition hover:border-slate-400 mt-4">
                    <img
                        src={hankImg}
                        alt="Photo of Hank"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                </div>

                {/* Text */}
                <p className="text-base lg:max-w-lg mb-4">
                    Hank is a web developer specializing in hand-coded fullstack web pages
                    and applications. Contact me to get started on your website or
                    application today!
                </p>

            </div>
        </div>
    );
}



export default About