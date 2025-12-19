import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { SocialIcon } from "react-social-icons";

function Nav({ currentPage, handlePageChange }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-red-50 w-full fixed top-0 left-0 z-50">
            {/* DESKTOP */}
            <div className="hidden sm:grid grid-cols-3 grid-rows-3 w-full px-4">
                <h1 className="col-start-2 pt-2 row-start-1 justify-self-start text-xl font-semibold">
                    Hank Kapka | Web Developer
                </h1>

                {/* Social icons under name */}
                <div className="col-start-2 row-start-2 justify-self-center flex gap-2 mt-1 pb-1">
                    <SocialIcon url="https://www.github.com/hkapk" style={{ height: 30, width: 30 }} fgColor="#0f172a" bgColor="transparent" />
                    <SocialIcon url="https://www.linkedin.com/in/hank-kapka" style={{ height: 30, width: 30 }} fgColor="#0f172a" bgColor="transparent" />
                    <SocialIcon url="mailto:hankkapka@gmail.com" style={{ height: 30, width: 30 }} fgColor="#0f172a" bgColor="transparent" />
                </div>

                {/* Centered nav slightly lower */}
                <div className="col-span-3 row-start-3 flex justify-center space-x-8 mt-1">
                    {["About", "Portfolio", "Contact", "Resume"].map(page => (
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
            {/* MOBILE */}
            <div className="sm:hidden relative flex items-start justify-between px-6">
                <h1 className="text-lg pt-4 font-semibold">HKWD</h1>

                <div className="absolute top-12 left-4 flex gap-2 pb-2">
                    <SocialIcon url="https://www.github.com/hkapk" style={{ height: 28, width: 28 }} fgColor="#0f172a" bgColor="transparent" />
                    <SocialIcon url="https://www.linkedin.com/in/hank-kapka" style={{ height: 28, width: 28 }} fgColor="#0f172a" bgColor="transparent" />
                    <SocialIcon url="mailto:hankkapka@gmail.com" style={{ height: 28, width: 28 }} fgColor="#0f172a" bgColor="transparent" />
                </div>

                <button
                    className="absolute top-6 right-6 text-4xl text-slate-900 bg-slate-50 transition-transform"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoClose /> : <RxHamburgerMenu />}
                </button>
            </div>

            {/* MOBILE DROPDOWN */}
            <div
                className={`
          ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}
          sm:hidden
          mx-auto mt-2 w-2/3 max-w-md
          rounded-xl bg-gray-900/80
          text-center text-white
          overflow-hidden
          transition-all duration-300
          space-y-4 py-4
        `}
            >
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
        </nav>
    );
}

export default Nav;
