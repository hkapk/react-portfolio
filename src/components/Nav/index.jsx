import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { SocialIcon } from "react-social-icons";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/all";


gsap.registerPlugin(SplitText, useGSAP);

function Nav({ currentPage, handlePageChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef(null);
    const socialsRef = useRef(null);
    const mobileSocialsRef = useRef(null);
    const navLinksRef = useRef(null);
    const desktopH1Ref = useRef(null);
    const mobileH1Ref = useRef(null);


    useEffect(() => {
        if (!container.current) return;

        const isMobile = window.innerWidth < 640;
        const h1 = isMobile ? mobileH1Ref.current : desktopH1Ref.current;
        if (!h1) return;

        const split = new SplitText(h1, { type: "chars" });

        gsap.set(
            [socialsRef.current, navLinksRef.current, mobileSocialsRef.current],
            { autoAlpha: 0, y: 20 }
        );

        const tl = gsap.timeline();

        tl.fromTo(
            split.chars,
            { scaleY: 1 },
            {
                duration: 0.4,
                scaleY: 11,
                transformOrigin: "bottom left",
                stagger: { each: 0.06, from: "random" },
                ease: "back.in",
            }
        );

        tl.to(split.chars, {
            duration: 0.4,
            scaleY: 1,
            ease: "back.out(1.7)",
        });

        const icons = isMobile
            ? mobileSocialsRef.current
            : [socialsRef.current, navLinksRef.current];

        tl.to(
            icons,
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
            },
            "<"
        );

        return () => {
            tl.kill();
            split.revert();
        };
    }, [currentPage]);




    return (
        <nav ref={container} className="fixed top-0 left-0 w-full z-50">

            <div className="bg-red-50 w-full">

                <div className="hidden sm:grid grid-cols-3 grid-rows-3 w-full px-4">
                    <h1 ref={desktopH1Ref} className="col-start-2 pt-2 row-start-1 text-center text-xl font-semibold">
                        Hank Kapka | Web Developer
                    </h1>

                    <div ref={socialsRef} className="col-start-2 row-start-2 justify-self-center flex gap-2 mt-1 pb-1">
                        <SocialIcon url="https://www.github.com/hkapk" style={{ height: 30, width: 30 }} fgColor="#0f172a" bgColor="transparent" />
                        <SocialIcon url="https://www.linkedin.com/in/hank-kapka" style={{ height: 30, width: 30 }} fgColor="#0f172a" bgColor="transparent" />
                        <SocialIcon url="mailto:hankkapka@gmail.com" style={{ height: 30, width: 30 }} fgColor="#0f172a" bgColor="transparent" />
                    </div>

                    <div ref={navLinksRef} className="col-span-3 row-start-3 flex justify-center space-x-8 mt-1">
                        {["Home", "About", "Portfolio", "Contact", "Resume"].map(page => (
                            <a
                                key={page}
                                href={`#${page}`}
                                onClick={() => handlePageChange(page)}
                                className={currentPage === page ? "nav-link-active" : "nav-link"}
                            >
                                {page}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ---------- MOBILE HEADER ---------- */}
                <div className="sm:hidden relative grid grid-cols-[1fr_auto] gap-4 items-start px-6 py-4">

                    <div className="flex flex-col gap-2">
                        <h1 ref={mobileH1Ref} className="text-lg font-semibold pl-2">HKWD</h1>
                        <div ref={mobileSocialsRef} className="flex gap-2">
                            <SocialIcon url="https://www.github.com/hkapk" style={{ height: 28, width: 28 }} fgColor="#0f172a" bgColor="transparent" />
                            <SocialIcon url="https://www.linkedin.com/in/hank-kapka" style={{ height: 28, width: 28 }} fgColor="#0f172a" bgColor="transparent" />
                            <SocialIcon url="mailto:hankkapka@gmail.com" style={{ height: 28, width: 28 }} fgColor="#0f172a" bgColor="transparent" />
                        </div>
                    </div>


                    <button
                        className="text-4xl text-slate-900 bg-slate-50 transition-transform self-start"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>


            <div
                className={`
          sm:hidden
          absolute left-0 top-full w-full
          transition-all duration-300
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
            >
                <div className="mx-auto mt-4 w-2/3 max-w-md rounded-xl bg-gray-900/80 text-center text-white py-4 space-y-4">
                    {["About", "Portfolio", "Contact", "Resume"].map(page => (
                        <a
                            key={page}
                            href={`#${page}`}
                            onClick={() => {
                                handlePageChange(page);
                                setIsOpen(false);
                            }}
                            className="block text-xl hover:text-gray-300"
                        >
                            {page}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Nav;

