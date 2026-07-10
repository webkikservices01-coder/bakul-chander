import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
    // Experience data array - Updated with your accurate timeline
    const experiences = [
        {
            company: "School of Planning & Architecture",
            date: "June 1996 - Sep 1996",
            role: "Associate",
            showBullet: false 
        },
        {
            company: "SCG Urban Development Consultants",
            date: "Oct 1996 - Sep 1999 · 3 yrs",
            role: "Associate",
            showBullet: true
        },
        {
            company: "Satsangi Chandra Design Consultants",
            date: "Oct 1999 - Mar 2010 · 10 yrs 6 mos",
            role: "Founding Partner",
            showBullet: true
        },
        {
            company: "SCDC Associates",
            date: "Jul 2006 - Sep 2016 · 10 yrs 3 mos",
            role: "Founding Partner",
            showBullet: true
        },
        {
            company: "SCDC Associates Private Limited",
            date: "Oct 2009 - Mar 2021 · 11 yrs 6 mos",
            role: "Managing Director",
            showBullet: true
        },
        {
            company: "Renascent Consultants",
            date: "Oct 2012 - Present · 13 yrs 6 mos",
            role: "Managing Director", // PDF aur timeline ke according
            showBullet: true
        }
    ];

    // Scroll animation settings
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 } 
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-black text-white py-8 md:py-16" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-0">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 gap-4 border-b border-white/20 pb-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-light flex items-center gap-3"
                    >
                        <span className="text-2xl mt-1 text-gray-500">•</span> Teams I Worked With
                    </motion.h2>

                    <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-lg md:text-xl font-light text-gray-400"
                    >
                        My Professional Experiences
                    </motion.h3>
                </div>

                {/* Experience List */}
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col w-full"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariant}
                            className="py-8 border-b border-white/10 last:border-b-0 group flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl transition-colors duration-300"
                        >
                            {/* Left Side: Company & Duration */}
                            <div className="flex flex-col">
                                <h4 className="text-xl md:text-2xl font-normal text-gray-200 mb-2 flex items-center gap-2 transition-all duration-300 group-hover:text-white group-hover:translate-x-2">
                                    {exp.showBullet && <span className="text-sm text-gray-500 group-hover:text-white transition-colors">•</span>}
                                    {exp.company}
                                </h4>
                                <p className="text-sm md:text-base font-light text-gray-400 transition-transform duration-300 group-hover:translate-x-2">
                                    {exp.date}
                                </p>
                            </div>

                            {/* Right Side: Role Badge */}
                            <div className="shrink-0">
                                <div className="inline-block px-5 py-2 bg-transparent border border-gray-600 rounded-md text-sm md:text-base text-gray-300 font-light group-hover:border-gray-400 group-hover:text-white transition-all duration-300">
                                    {exp.role}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ExperienceSection;