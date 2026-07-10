import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    // Skills Data from image 2
    const skills = [
        'Architecture',
        'Interior Design',
        'Landscape Design',
        'Master Planning',
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-black text-white py-8 md:py-16 px-6 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* --- TOP SECTION: Statement & Skills (Image 2 Style) --- */}
                <div className="space-y-12">
                    {/* Main Statement */}
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-xl md:text-2xl lg:text-3xl font-light leading-snug"
                    >
                        I am a person who believes in making <span className="italic text-gray-400 font-normal">masterpieces through render sketches</span>
                    </motion.h1>

                    {/* What I Do Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="w-full lg:w-[35%] space-y-4"
                        >
                            <h2 className="text-2xl md:text-3xl font-light flex items-center gap-3">
                                <span className="text-xl mt-1">•</span> What I do
                            </h2>
                            <p className="text-base md:text-lg font-light text-gray-400 leading-relaxed">
                                I am a disciplinary Architect I have been working in this industry from past <span className="text-white">28+ years</span> and my skills are:
                            </p>
                        </motion.div>

                        {/* Skill Tags */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="w-full lg:w-[60%] flex flex-wrap gap-3 md:gap-4 lg:justify-end"
                        >
                            {skills.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
                                    className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-light text-gray-300 bg-[#111111] border border-white/5 rounded-lg transition-all shadow-xl"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;