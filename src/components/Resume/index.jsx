import React from "react";
import { resumeImages } from "../../data/resumeImages";
import resumePdf from "../../assets/resume.pdf/";

function Resume() {
    return (
        <div className="lg:mt-8">
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 px-2 gap-4 pt-8">
                    {resumeImages.map((src, index) => (
                        <div key={index}
                            className="w-32 h-32 flex items-center justify-center py-4">
                            <img
                                src={src}
                                alt={`Resume Icon ${index + 1}`}
                                className="w-full h-full object-contain" /> </div>
                    )
                    )}
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <a href={resumePdf} download target="_blank" rel="noreferrer">
                    <p className="inline-block px-4 mb-4 py-2 text-sm rounded-md bg-blue-50 border border-slate-300 hover:bg-slate-100">
                        Download my resume
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Resume