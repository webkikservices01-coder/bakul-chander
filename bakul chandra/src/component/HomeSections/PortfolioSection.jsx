import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Graphic Era Hospital",
            location: "Dehradun, Uttarakhand",
            details: [
                "Healthcare Architecture",
                "Passive Design",
                "Intelligent Controls"
            ],
            image: "/home/project/Graphic-Era-Hospital-Uttarakhand.jpeg", 
            link: "/portfolio/graphic-era"
        },
        {
            id: 2,
            title: "NCR Institute of Medical Science & Research",
            location: "Meerut, Uttar Pradesh",
            details: [
                "Medical Campus",
                "Patient-Centric",
                "Resilience"
            ],
            image: "/home/project/NCR-Hospital.webp", 
            link: "/portfolio/msy-institute"
        }
    ];

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const cardNode = scrollRef.current.children[0];
        if (!cardNode) return;

        const cardTotalWidth = cardNode.offsetWidth + 24; // Including gap
        const currentIndex = Math.round(scrollPosition / cardTotalWidth);

        if (currentIndex !== activeIndex) {
            setActiveIndex(currentIndex);
        }
    };

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-[#000] text-white py-8 md:py-10 overflow-hidden font-archivo ">
            <div className="max-w-7xl mx-auto px-6 md:px-3 w-full border-t border-white/10 pt-16">

                {/* --- HEADER SECTION --- */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-3xl font-light flex items-center gap-4 text-white">
                            Featured Work
                        </h2>
                        <p className="text-[16px] font-light text-gray-400 max-w-xl leading-relaxed pt-2">
                            With 30 years of practice, a chronological list will be overwhelming. Here are a few projects that define my approach to architecture.
                        </p>
                    </div>

                    <Link 
                        to="/portfolio" 
                        className="group flex items-center gap-3 pb-2 border-b border-gray-700 hover:border-white transition-all duration-300"
                    >
                        <span className="text-xs md:text-[14px] font-medium tracking-widest text-gray-400 group-hover:text-white transition-colors">Explore All Projects</span>
                        <span className="text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-1 transform duration-300">→</span>
                    </Link>
                </motion.div>

                {/* --- PROJECTS GRID / MOBILE SLIDER --- */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-2 gap-6 md:gap-16 px-1 md:px-5
                               overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none 
                               pb-10 md:pb-0 scroll-smooth w-full
                               [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="group cursor-pointer flex flex-col items-start justify-start
                                       min-w-[90%] w-[100%] sm:min-w-[75%] md:min-w-0 shrink-0 snap-center"
                        >
                            {/* PURE IMAGE CONTAINER - NO OVERLAPPING BOXES */}
                            <Link to={project.link} className="w-full h-[45vh] relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-[3/4] bg-[#111]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                                {/* Optional: Extremely subtle overlay just to bind the image */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </Link>

                            {/* CLEAN MINIMALIST TEXT BELOW IMAGE */}
                            <div className="w-full pt-8 flex flex-col items-start">
                                {/* Location & Line */}
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <span className="text-[14px] font-medium tracking-[0.2em] uppercase text-gray-500">
                                        {project.location}
                                    </span>
                                    <div className="flex-grow h-px bg-white/10"></div>
                                </div>

                                {/* Title */}
                                <h3 className="text-3xl md:text-3xl font-light text-white mb-6 leading-tight group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Sleek Tags for Details */}
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                                    {project.details.map((detail, idx) => (
                                        <span key={idx} className="px-4 py-1.5 text-[14px] md:text-sm font-light text-gray-400 border border-white/10 rounded-full bg-white/[0.02]">
                                            {detail}
                                        </span>
                                    ))}
                                </div>

                                {/* Call to Action */}
                                <Link
                                    to={project.link}
                                    className="mt-auto inline-flex items-center gap-3 text-sm tracking-widest text-white group-hover:gap-5 transition-all duration-300"
                                >
                                    <span>View Project</span>
                                    <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- MOBILE PAGINATION DOTS --- */}
                <div className="flex justify-center items-center gap-3 mt-8 md:hidden">
                    {projects.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                                activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/20'
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PortfolioSection;