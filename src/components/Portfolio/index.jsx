import React from "react";
import { portfolio } from "../../data/portfolio";

function Portfolio() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 mt-4">
            {portfolio.map((item) => (
                <div
                    key={item.id}
                    className="rounded-xl shadow-md overflow-hidden bg-white text-center py-4"
                >

                    <h3 className="text-lg font-semibold py-4">
                        {item.title}
                    </h3>


                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </a>


                    <div className="py-4">
                        <a
                            href={item.gh_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 text-sm rounded-md border border-slate-300 hover:bg-slate-100"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Portfolio