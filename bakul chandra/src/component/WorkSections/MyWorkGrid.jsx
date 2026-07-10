// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const MyWorkGrid = () => {
//     const [cols, setCols] = useState(3);

//     const projects = [
//         { id: 1, src: "/work/work1.png", title: "289", location: "Greater Noida", link: "/projects/1" },
//         { id: 2, src: "/work/work2.png", title: "Park Hospital", location: "West Delhi", link: "/projects/2" },
//         { id: 3, src: "/work/work3.png", title: "Corporate Hub", location: "Gurugram", link: "/projects/3" },
//         { id: 4, src: "/work/work4.png", title: "Medical Center", location: "Noida", link: "/projects/4" },
//         { id: 5, src: "/work/work5.png", title: "Residential Villa", location: "South Delhi", link: "/projects/5" },
//         { id: 6, src: "/work/work6.png", title: "Industrial Wing", location: "Manesar", link: "/projects/6" },
//         { id: 7, src: "/work/work7.png", title: "Luxury Suite", location: "Faridabad", link: "/projects/7" },
//         { id: 8, src: "/work/work8.png", title: "Urban Plaza", location: "Ghaziabad", link: "/projects/8" },
//     ];

//     return (
//         <section className="w-full bg-black text-white py-8 px-6 md:px-12 font-archivo overflow-hidden">
//             <div className="max-w-7xl mx-auto">

//                 {/* --- Header & Layout Switcher --- */}
//                 <div className="flex justify-between items-center mb-10">
//                     <h2 className="text-2xl md:text-3xl font-light flex items-center gap-3">
//                         <span className="text-xl mt-1">•</span> My work
//                     </h2>

//                     {/* Desktop Switcher */}
//                     <div className="hidden md:flex items-center gap-1 bg-[#111] p-1.5 rounded-xl border border-white/5 shadow-inner relative">
//                         <button onClick={() => setCols(2)} className={`relative z-10 p-2.5 rounded-lg transition-all ${cols === 2 ? 'text-black' : 'text-zinc-500'}`}>
//                             {cols === 2 && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg -z-10" />}
//                             <div className="grid grid-cols-2 gap-1 w-5 h-5">
//                                 {[...Array(4)].map((_, i) => <div key={i} className={`border-[1.5px] rounded-sm ${cols === 2 ? 'border-black' : 'border-current'}`}></div>)}
//                             </div>
//                         </button>
//                         <button onClick={() => setCols(3)} className={`relative z-10 p-2.5 rounded-lg transition-all ${cols === 3 ? 'text-black' : 'text-zinc-500'}`}>
//                             {cols === 3 && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg -z-10" />}
//                             <div className="grid grid-cols-3 gap-[3px] w-5 h-5">
//                                 {[...Array(9)].map((_, i) => <div key={i} className={`border-[1px] rounded-[1px] ${cols === 3 ? 'border-black' : 'border-current'}`}></div>)}
//                             </div>
//                         </button>
//                     </div>
//                 </div>

//                 {/* --- Dynamic Grid --- */}
//                 <motion.div layout className={`grid gap-4 md:gap-6 ${cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
//                     <AnimatePresence mode="popLayout">
//                         {projects.map((project) => (
//                             <motion.div
//                                 layout
//                                 key={project.id}
//                                 className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 group cursor-pointer"
//                             >
//                                 {/* Base Image */}
//                                 <img
//                                     src={project.src}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover grayscale-[100%] transition-all duration-700 md:group-hover:scale-110"
//                                 />

//                                 {/* --- PREMIUM GLASS CARD --- */}
//                                 <div className={`
//                                     absolute inset-0 flex items-end p-4 md:p-6 transition-all duration-500 ease-out z-20
//                                     /* Mobile: Always visible or slide up on scroll */
//                                     translate-y-0 opacity-100 
//                                     /* Desktop: Hide by default, show on hover */
//                                     md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
//                                 `}>
//                                     <div className="w-full p-4 md:p-5 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
//                                         <h3 className="text-lg md:text-xl font-normal text-white mb-1 uppercase">
//                                             {project.title}
//                                         </h3>
//                                         <p className="text-xs md:text-sm font-light text-gray-300 mb-4">
//                                             Location: {project.location}
//                                         </p>

//                                         <Link
//                                             to={project.link}
//                                             className="inline-flex items-center gap-2 px-4 py-2 text-[10px] md:text-xs text-gray-200 border border-white/20 rounded-md bg-white/5 hover:bg-white/10 transition-all uppercase tracking-widest"
//                                         >
//                                             Know More <span className="text-lg leading-none">&rsaquo;</span>
//                                         </Link>
//                                     </div>
//                                 </div>

//                                 {/* Shadow Overlay for Mobile Readability */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
//                             </motion.div>
//                         ))}
//                     </AnimatePresence>
//                 </motion.div>

//             </div>
//         </section>
//     );
// };

// export default MyWorkGrid;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectData'; // Path apne hisaab se set karein

const MyWorkGrid = () => {
    const [cols, setCols] = useState(3);

    return (
        <section className="w-full bg-black text-white py-8 px-6 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- Header & Layout Switcher --- */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-light flex items-center gap-3">
                        <span className="text-xl mt-1">•</span> My work
                    </h2>

                    {/* Desktop Switcher */}
                    <div className="hidden md:flex items-center gap-1 bg-[#111] p-1.5 rounded-xl border border-white/5 shadow-inner relative">
                        <button onClick={() => setCols(2)} className={`relative z-10 p-2.5 rounded-lg transition-all ${cols === 2 ? 'text-black' : 'text-zinc-500'}`}>
                            {cols === 2 && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg -z-10" />}
                            <div className="grid grid-cols-2 gap-1 w-5 h-5">
                                {[...Array(4)].map((_, i) => <div key={i} className={`border-[1.5px] rounded-sm ${cols === 2 ? 'border-black' : 'border-current'}`}></div>)}
                            </div>
                        </button>
                        <button onClick={() => setCols(3)} className={`relative z-10 p-2.5 rounded-lg transition-all ${cols === 3 ? 'text-black' : 'text-zinc-500'}`}>
                            {cols === 3 && <motion.div layoutId="activeTab" className="absolute inset-0 bg-white rounded-lg -z-10" />}
                            <div className="grid grid-cols-3 gap-[3px] w-5 h-5">
                                {[...Array(9)].map((_, i) => <div key={i} className={`border-[1px] rounded-[1px] ${cols === 3 ? 'border-black' : 'border-current'}`}></div>)}
                            </div>
                        </button>
                    </div>
                </div>

                {/* --- Dynamic Grid --- */}
                <motion.div layout className={`grid gap-4 md:gap-6 ${cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    <AnimatePresence mode="popLayout">
                        {projectsData.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 group cursor-pointer"
                            >
                                {/* Base Image */}
                                <img
                                    src={project.src}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[100%] transition-all duration-700 md:group-hover:scale-110"
                                />

                                {/* --- PREMIUM GLASS CARD --- */}
                                <div className={`
                                    absolute inset-0 flex items-end p-4 md:p-6 transition-all duration-500 ease-out z-20
                                    translate-y-0 opacity-100 
                                    md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
                                `}>
                                    <div className="w-full p-4 md:p-5 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
                                        <h3 className="text-lg md:text-xl font-normal text-white mb-1 uppercase">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs md:text-sm font-light text-gray-300 mb-4">
                                            Location: {project.location}
                                        </p>

                                        {/* Link changed to use SLUG */}
                                        <Link
                                            to={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] md:text-xs text-gray-200 border border-white/20 rounded-md bg-white/5 hover:bg-white/10 transition-all uppercase tracking-widest"
                                        >
                                            Know More <span className="text-lg leading-none">&rsaquo;</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default MyWorkGrid;