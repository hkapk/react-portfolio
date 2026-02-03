import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import BruceSite from "../../assets/home-img/brucewebsite.png";
import Hankimg1 from "../../assets/home-img/hankimg1.png";
import bgImage from "../../assets/backgrounds/baseballstadium.jpg";


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Home({ handlePageChange }) {
    const main = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray('.box');

        boxes.forEach((box) => {
            const updatePositions = () => {
                const vw = window.innerWidth;
                const boxWidth = box.offsetWidth;
                const navHeight = 80; // adjust to your nav height
                const isMobile = vw < 640;

                const startX = isMobile ? -vw * 0.2 : -vw;
                const endX = isMobile
                    ? 0
                    : Math.min((vw / 2) - (boxWidth / 2), vw - boxWidth - 16);

                return { startX, endX, navHeight };
            };

            const { startX, endX, navHeight } = updatePositions();

            gsap.fromTo(
                box,
                { x: startX },
                {
                    x: endX,
                    ease: "none",
                    scrollTrigger: {
                        trigger: box,
                        start: `top bottom-=${navHeight}`,
                        end: "center center",
                        scrub: true,
                        invalidateOnRefresh: true,
                        onRefresh: () => {
                            const { startX } = updatePositions();
                            gsap.set(box, { x: startX });
                        },
                    },
                }
            );
        });
    }, { scope: main });

    return (
        <div className="">
            {/* Hero Section */}
            <section className="relative w-full h-screen  
            bg-cover bg-center flex items-end justify-center pb-16 
            text-center overflow-x-hidden"
                style={{ backgroundImage: `url(${bgImage})` }}>

                <div className="absolute inset-0 bg-black/40"></div>


                <div className="relative max-w-full px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Building your digital presence
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-8">
                        Your website, your brand, your rules. Fully coded from scratch.
                    </p>
                </div>
            </section>


            <div ref={main} className="space-y-16">


                <div className="box lg:mb-44 lg:pt-18">
                    <div className=" grid grid-cols-1 sm:grid-cols-4 grid-rows-auto sm:grid-rows-6 gap-x-3 gap-y-2
                max-w-6xl mx-auto rounded-2xl bg-white p-8 shadow-md overflow-hidden">


                        <h1 className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-5 
                  text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight
                  sm:self-center sm:mb-0">
                            “Hank did an excellent job on my webpage.
                        </h1>


                        <img
                            src={BruceSite}
                            alt="Screenshots of Bruce's Website, designed by Hank"
                            className="col-span-full sm:col-span-3 row-span-1 sm:row-span-5 w-full h-auto sm:h-full object-cover scale-[1.2] sm:scale-[1.10] sm:mb-0"
                        />


                        <p className="col-span-1 sm:col-span-4 row-span-1 text-gray-700 m-0 leading-relaxed mb-2">
                            He was professional, responsive, and paid great attention to detail. The final result looks fantastic and works perfectly—I couldn’t be happier with his work."
                        </p>


                        <div className="col-span-1 sm:col-span-4 flex flex-col items-center pt-4 border-t border-gray-200 space-y-2">
                            <div className="font-medium text-gray-900 text-center">
                                — Bruce Manners
                            </div>

                            <button
                                onClick={() => handlePageChange("Portfolio")}
                                className="px-6 py-3 rounded-lg bg-teal-600 text-white font-medium
                  hover:bg-teal-700 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                            >
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Card */}
                <div className="box">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8
                rounded-2xl bg-teal-50 p-8 shadow-md w-full max-w-xl mx-auto">


                        <img
                            src={Hankimg1}
                            alt="Hank portrait"
                            className="w-32 h-32 sm:h-44 rounded-xl object-cover flex-shrink-0"
                        />


                        <div className="flex flex-col items-center text-center w-full">
                            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6">
                                Get in touch!
                            </h1>

                            <button
                                onClick={() => handlePageChange("Contact")}
                                className="px-8 py-3 rounded-lg bg-teal-600 text-white font-medium
                  hover:bg-teal-700 transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <section className="pt-24"></section>
        </div>
    );
}

export default Home;