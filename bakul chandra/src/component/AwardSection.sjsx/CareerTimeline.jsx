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

    // --- AWARDS DATA 1 (Top List — Most Recent) ---
    const awardsList1 = [
        { title: "Top 50 Architects in India 2026", date: "May 2026", badge: "A+D Magazine" },
        { title: "Best Medical College Architecture Design Firm", date: "Apr 2026", badge: "Six Sigma" },
        { title: "Most Visionary Sustainable Architecture Consultants", date: "2026", badge: "Prime Insights" },
        { title: "Top 10 Sustainable Architecture Consultants 2025", date: "2025", badge: "Silicon India" },
        { title: "Excellence in Healthcare Architecture & Design", date: "Nov 2025", badge: "TIMES of India" },
        { title: "Outstanding Design Leadership in Education & Healthcare", date: "Aug 2025", badge: "India Business" },
        { title: "KUDOS Award, Commercial Spaces", date: "Aug 2025", badge: "IFJ Index Plus" },
        { title: "Smartex 2025 Award, Healthcare Category", date: "Feb 2025", badge: "Smartex" },
        { title: "Top 50 Healthcare & Medtech Leaders 2024 – 25", date: "Jan 2025", badge: "Medgate Today" },
        { title: "Golden Door Award for Excellence in Consultancy", date: "Jun 2024", badge: "Elite Awards" },
        { title: "Most Prominent & Innovative Architecture Firm 2024", date: "Jun 2024", badge: "Elite Awards" },
    ];

    // --- AWARDS DATA 2 (Bottom List — Earlier) ---
    const awardsList2 = [
        { title: "Outstanding Designing of Religious Projects", date: "May 2024", badge: "Architect's WOW" },
        { title: "Top 50 Healthcare & Medtech Leaders 2023", date: "Jun 2023", badge: "Medgate Today" },
        { title: "Most Promising Personality in Healthcare Planning", date: "Apr 2023", badge: "Medgate Today" },
        { title: "Excellence in Healthcare & Institutional Projects", date: "Apr 2023", badge: "Eldrok India" },
        { title: "10 Most Promising Healthcare Architecture Companies", date: "2022", badge: "Silicon India" },
        { title: "Excellent Healthcare Architect", date: "2022", badge: "Apex Awards" },
        { title: "Excellence in Medical College & Teaching Hospital Design", date: "2022", badge: "Apex Awards" },
        { title: "Promising Company, Indian Achievers' Award", date: "Aug 2022", badge: "Indian Achievers" },
        { title: "Most Trusted Healthcare Architecture Consultancy Firm", date: "Aug 2022", badge: "National Fame" },
        { title: "Innovation in Designing Healthcare Architecture", date: "May 2022", badge: "Architect's WOW" },
        { title: "Innovation in Designing of Hospitality Spaces", date: "Apr 2022", badge: "Eldrok India" },
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


    return (
        <section className="w-full bg-black text-white py-10 md:py-14 px-5 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- Honors Section --- */}
                <motion.div
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="mb-10 md:mb-12"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="heading-section">
                            Honors
                        </h2>
                    </motion.div>
                    <div className="flex flex-col gap-6">
                        {honorsData.map((honor) => (
                            <motion.div
                                variants={itemVariants}
                                key={honor.id}
                                className="border border-[#222222] bg-[#080808] p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 group transition-all duration-500 hover:border-zinc-500"
                            >
                                <div className="max-w-3xl space-y-3">
                                    <h3 className="heading-sub">
                                        {honor.title}
                                    </h3>
                                    <p className="heading-eyebrow">
                                        Conferred by <span className="text-zinc-300">{honor.conferredBy}</span>
                                    </p>
                                    <p className="text-base font-light">
                                        {honor.description}
                                    </p>
                                </div>
                                <div className="shrink-0 border border-[#333333] rounded-full px-6 py-3 text-xs md:text-sm font-medium tracking-widest uppercase text-zinc-300 w-full md:w-auto text-center transition-colors group-hover:bg-white group-hover:text-black">
                                    {honor.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- Header Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-3 md:gap-6 border-b border-white/10 pb-5 md:pb-6">
                    <motion.h2
                        initial={false}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="heading-section"
                    >
                        Awards and Accolades
                    </motion.h2>
                    <motion.p
                        initial={false}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-base max-w-md font-light"
                    >
                        Industry recognition is fortunate, but what matters most is creating environments that serve people long after trends have passed.
                    </motion.p>
                </div>

                {/* Photos side by side, then the full list in two even columns (no empty gaps) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-10">
                    <div className="aspect-[4/3] overflow-hidden bg-[#111]">
                        <img src="/award/award1.jpeg" alt="Award ceremony" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[4/3] overflow-hidden bg-[#111]">
                        <img src="/award/award2.jpeg" alt="Award ceremony" className="w-full h-full object-cover object-top" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                    {[...awardsList1, ...awardsList2].map((award, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center gap-4 border-b border-white/10 py-3"
                        >
                            <div className="flex-1 min-w-0 space-y-1">
                                <h3 className="heading-sub" style={{ fontSize: '16px' }}>
                                    {award.title}
                                </h3>
                                <p className="text-xs font-medium uppercase tracking-wider">
                                    {award.date}
                                </p>
                            </div>
                            <div className="shrink-0 w-[110px] md:w-[130px] px-2 py-1.5 bg-[#111] border border-white/10 text-[10px] text-zinc-300 text-center uppercase tracking-widest font-semibold">
                                {award.badge}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AwardsRecognition;