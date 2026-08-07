import React from 'react';
import { motion } from 'framer-motion';

const AwardsRecognition = () => {
    // --- HONORS DATA ---
    const honorsData = [
        {
            id: 1,
            title: "Honorary Degree of Doctor of Philosophy (Honoris Causa)",
            conferredBy: "Mansarovar Global University, Bhopal",
            description: "Conferred to Bakul Chandra as recognition and celebration of his outstanding contributions to the fields of architecture and design, his innovative strategies, and his unwavering commitment to excellence.",
            date: "28th June 2024"
        }
    ];

    // --- AWARDS DATA 1 (Top List) ---
    const awardsList1 = [
        { title: "Excellence in Healthcare Architecture & Design", date: "Nov 2025", badge: "TIMES of India" },
        { title: "Outstanding Design Leadership", date: "Aug 2025", badge: "India Business" },
        { title: "Top 50 Healthcare & Medtech Leaders 2024-25", date: "Jan 2025", badge: "Medgate Today" },
        { title: "Doctor of Philosophy (Honoris Causa)", date: "Jun 2024", badge: "Mansarovar Uni" },
        { title: "Golden Door Award for Excellence", date: "Jun 2024", badge: "Elite Awards" },
        { title: "Outstanding Designing of Religious Projects", date: "May 2024", badge: "Architect's WOW" },
    ];

    // --- AWARDS DATA 2 (Bottom List) ---
    const awardsList2 = [
        { title: "Top 50 Healthcare & Medtech Leaders 2023", date: "Jun 2023", badge: "Medgate Today" },
        { title: "Excellence in Healthcare Design", date: "Apr 2023", badge: "Eldrok India" },
        { title: "Most Promising Personality in Healthcare", date: "Apr 2023", badge: "Medgate Today" },
        { title: "Ten Top-notch Versatile Business Leader", date: "Apr 2023", badge: "Business Touch" },
        { title: "Excellent Healthcare Architect", date: "Aug 2022", badge: "Apex Awards" },
        { title: "Innovation in Healthcare Architecture", date: "May 2022", badge: "Architect's WOW" },
        { title: "Innovation in Hospitality Spaces", date: "Apr 2022", badge: "Eldrok India" },
    ];

    // --- ANIMATION VARIANTS ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { x: 30, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-black text-white py-10 md:py-16 px-5 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- Honors Section --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="mb-10 md:mb-20"
                >
                    <motion.div variants={itemVariants} className="mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white">
                            <span className="text-gray-600 mr-3 md:mr-4">•</span>Honors
                        </h2>
                    </motion.div>
                    <div className="flex flex-col gap-6">
                        {honorsData.map((honor) => (
                            <motion.div
                                variants={itemVariants}
                                key={honor.id}
                                className="border border-[#222222] bg-[#080808] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 group transition-all duration-500 hover:border-gray-500 shadow-lg"
                            >
                                <div className="max-w-3xl space-y-4 md:space-y-5">
                                    <h3 className="text-2xl md:text-3xl font-normal leading-snug text-white">
                                        {honor.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium tracking-wide uppercase text-xs md:text-sm">
                                        Conferred by <span className="text-gray-300">{honor.conferredBy}</span>
                                    </p>
                                    <p className="text-[#999999] leading-relaxed text-sm md:text-base font-light">
                                        {honor.description}
                                    </p>
                                </div>
                                <div className="shrink-0 border border-[#333333] rounded-full px-6 py-3 text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300 w-full md:w-auto text-center mt-4 md:mt-0 transition-colors group-hover:bg-white group-hover:text-black">
                                    {honor.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- Header Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-3 md:gap-6 border-b border-white/10 pb-5 md:pb-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-light tracking-wide flex items-center gap-3 text-white hidden md:block"
                    >
                        Awards & Recognitions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[14px] md:text-[16px] text-zinc-400 max-w-md md:text-right font-light leading-relaxed"
                    >
                        Industry recognition is fortunate, but what matters most is creating environments that serve people long after trends have passed.
                    </motion.p>
                </div>

                {/* =========================================
                    BLOCK 1: IMAGE LEFT | AWARDS RIGHT 
                ========================================= */}
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 mb-10 md:mb-20">
                    
                    {/* Left: Image 1 */}
                    <motion.div
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full h-[35vh] md:h-[65vh] lg:w-1/2 rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative group shrink-0"
                    >
                        <img
                            src="/award/award1.jpeg" 
                            alt="Awards and Accolades"
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                    </motion.div>

                    {/* Right: Awards List 1 (No internal scroll, natural height) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col justify-center space-y-4"
                    >
                        {awardsList1.map((award, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex justify-between items-start sm:items-center gap-3 group border-b border-white/5 pb-3 md:pb-4"
                            >
                                <div className="space-y-1.5 w-[65%] sm:w-[70%]">
                                    <h3 className="text-[15px] md:text-[17px] font-normal flex items-start gap-2 md:gap-3 text-gray-300 group-hover:text-white transition-colors leading-snug">
                                        <span className="text-gray-500 mt-1 md:mt-1.5 text-[10px] md:text-sm">✦</span>
                                        {award.title}
                                    </h3>
                                    <p className="text-[10px] md:text-[10px] text-zinc-500 font-medium ml-4 md:ml-6 uppercase tracking-wider">
                                        {award.date}
                                    </p>
                                </div>

                                <div className="shrink-0 px-2.5 py-1.5 md:px-4 md:py-2 bg-[#111] border border-white/10 rounded-lg text-[9px] md:text-[10px] text-zinc-400 group-hover:bg-gray-900 group-hover:text-white group-hover:border-[#9F1C44] transition-all duration-300 min-w-[90px] md:min-w-[120px] text-center uppercase tracking-widest font-bold shadow-lg mt-1 sm:mt-0">
                                    {award.badge}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* =========================================
                    BLOCK 2: AWARDS LEFT | IMAGE RIGHT 
                ========================================= */}
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 mb-10">
                    
                    {/* Image 2 (Mobile me upar aayegi, Desktop me right side) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariant}
                        className="w-full h-[35vh] md:h-[75vh] lg:w-1/2 rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative group shrink-0 lg:order-last"
                    >
                        <img
                            src="/award/award2.jpeg" 
                            alt="Award Ceremony"
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                        <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </motion.div>

                    {/* Awards List 2 (No internal scroll) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 "
                    >
                        {awardsList2.map((award, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex justify-between items-start sm:items-center gap-3 group border-b border-white/5 pb-3 md:pb-4"
                            >
                                <div className="space-y-1.5 w-[65%] sm:w-[70%]">
                                    <h3 className="text-[15px] md:text-[17px] font-normal flex items-start gap-2 md:gap-3 text-gray-300 group-hover:text-white transition-colors leading-snug">
                                        <span className="text-gray-500 mt-1 md:mt-1.5 text-[10px] md:text-sm">✦</span>
                                        {award.title}
                                    </h3>
                                    <p className="text-[10px] md:text-[10px] text-zinc-500 font-medium ml-4 md:ml-6 uppercase tracking-wider">
                                        {award.date}
                                    </p>
                                </div>

                                <div className="shrink-0 px-2.5 py-1.5 md:px-4 md:py-2 bg-[#111] border border-white/10 rounded-lg text-[9px] md:text-[10px] text-zinc-400 group-hover:bg-gray-900 group-hover:text-white group-hover:border-[#9F1C44] transition-all duration-300 min-w-[90px] md:min-w-[120px] text-center uppercase tracking-widest font-bold shadow-lg mt-1 sm:mt-0">
                                    {award.badge}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default AwardsRecognition;