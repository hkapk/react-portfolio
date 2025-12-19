import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer className="bg-slate-400 w-screen py-2">
            <div className="max-w-7xl mx-auto flex gap-4 justify-center py-2">
                <div className="transform transition-transform duration-200 hover:scale-110 hover:opacity-90 cursor-pointer"><SocialIcon url="https://github.com/hkapk" style={{ height: 64, width: 64 }} fgColor="#f5f5f5" bgColor="transparent" /> </div>
                <div className="transform transition-transform duration-200 hover:scale-110 hover:opacity-90 cursor-pointer"><SocialIcon url="https://www.linkedin.com/in/hank-kapka" style={{ height: 64, width: 64 }} fgColor="#f5f5f5" bgColor="transparent" /> </div>
                <div className="transform transition-transform duration-200 hover:scale-110 hover:opacity-90 cursor-pointer"><SocialIcon url="mailto:hankkapka@gmail.com" style={{ height: 64, width: 64 }} fgColor="#f5f5f5" bgColor="transparent" /> </div>
            </div>

            <p className="text-center text-white pb-2">Copyright © 2025</p>
            <p className="text-center text-white pb-6 font-semibold">
                <a href="https://hankkapka.com" target="_blank" rel="noopener noreferrer">Powered by Hank</a>
            </p>
        </footer>
    );
}

export default Footer