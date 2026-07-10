import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BiographyPage = () => {
    // --- ANIMATION VARIANTS ---
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    // --- DATA ---
    const stats = [
        { id: 1, value: "28+", label: 'Years of Experience' },
        { id: 2, value: "150+", label: 'Projects Done' },
        { id: 3, value: "96%", label: 'Client Satisfaction' },
    ];

    const skills = ['Architecture', 'Interior Design', 'Landscape Design', 'Master Planning'];

    const gurus = [
        { name: "Prof. Jamal H Ansari", lesson: "Taught me how to express my views in few words." },
        { name: "Prof. M Shaheer", lesson: "Taught me how to explain my views with conviction and self-confidence." },
        { name: "Prof. SC Gupta", lesson: "Taught me how to get my point across with logic." },
        { name: "Prof. MS Satsangi", lesson: "Taught me that success follows quality, achieved only through honesty and dedication." }
    ];

    return (
        <main className="w-full bg-black text-white font-['Archivo'] selection:bg-white selection:text-black">

            {/* 1. HERO SECTION (As per your first screenshot) */}
            <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center bg-[#111] overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for the background office/desk image */}
                    <img
                        src="/about/hero-bg.jpg"
                        alt="Biography Background"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-[72px] font-light tracking-wide"
                    >
                        Biography
                    </motion.h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24 md:space-y-32">

                {/* 2. WHO I AM SECTION */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col lg:flex-row justify-between items-start gap-12"
                >
                    <motion.div variants={fadeUp} className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-[36px] font-normal flex items-center gap-3 text-gray-200">
                            <span className="text-gray-500">•</span> Who I am
                        </h2>
                        <div className="space-y-6 text-base md:text-[18px] text-gray-400 font-light leading-relaxed">
                            <p>
                                Over the years, I’ve learned that most buildings don’t underperform because of poor design talent—they underperform because <strong className="text-white font-medium italic">clarity arrives too late.</strong>
                            </p>
                            <p>
                                As a Founding Partner at <strong className="text-white font-normal underline underline-offset-4 decoration-gray-600">Renascent Consultants</strong>, I focus on shaping healthcare and institutional environments where planning logic, operational efficiency, sustainability, and human experience are aligned from day one.
                            </p>
                            <p>
                                If you are interested in future-ready healthcare design, institutional architecture, or meaningful collaboration grounded in thought rather than noise, we will likely have a good conversation.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className="w-full lg:w-[45%] h-[50vh] md:h-[60vh]">
                        <img
                            src="/about/bakulsir.png"
                            alt="Bakul Chandra"
                            className="w-full h-full object-cover grayscale rounded-sm shadow-2xl"
                        />
                    </motion.div>
                </motion.section>

                {/* 3. STATS SECTION */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {stats.map((stat) => (
                        <motion.div key={stat.id} variants={fadeUp} className="bg-[#0a0a0a] border border-[#222] p-10 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg hover:border-gray-500 transition-colors duration-500">
                            <h3 className="text-5xl md:text-[64px] font-normal text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400 font-light md:text-[18px]">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.section>

                {/* 4. MY VISION SECTION */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col-reverse lg:flex-row justify-between items-start gap-12"
                >
                    <motion.div variants={fadeUp} className="w-full lg:w-[55%] space-y-8">
                        <h2 className="text-3xl md:text-[36px] font-normal flex items-center gap-3 text-gray-200">
                            <span className="text-gray-500">•</span> My Vision
                        </h2>
                        <div className="space-y-6 text-base md:text-[18px] text-gray-300 font-light leading-relaxed">
                            <p>My work is rooted in a simple belief:</p>
                            <h3 className="text-2xl md:text-[32px] leading-snug font-medium text-white my-6 border-l-2 border-gray-500 pl-6">
                                "Good architecture is not about visual novelty—it is about making complex systems work effortlessly."
                            </h3>
                            <p>
                                I strive for <strong className="text-white font-medium">relevance</strong>—creating environments that serve people, institutions, and cities long after trends have passed.
                            </p>
                            <p>
                                Alongside practice, I actively mentor young architects. Not in software or styles, but in <strong className="text-white font-medium">judgment, decision-making, and responsibility</strong>—the things no tool can automate.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                        <img
                            src="/about/about-sketch.png"
                            alt="Bakul Chandra Sketch"
                            className="w-[80%] lg:w-full object-contain grayscale opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </motion.div>
                </motion.section>

                {/* 5. WHAT I DO SECTION */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-t border-white/10 pt-16"
                >
                    <motion.div variants={fadeUp} className="w-full lg:w-1/2 space-y-4">
                        <h2 className="text-3xl md:text-[36px] font-normal flex items-center gap-3 text-gray-200">
                            <span className="text-gray-500">•</span> What I do
                        </h2>
                        <p className="text-base md:text-[18px] text-gray-400 font-light leading-relaxed">
                            I am a disciplinary Architect working in this industry from past 28+ years and my core expertise includes:
                        </p>
                    </motion.div>
                    <motion.div variants={containerVariants} className="w-full lg:w-1/2 flex flex-wrap gap-3 lg:justify-end">
                        {skills.map((skill) => (
                            <motion.span key={skill} variants={fadeUp} className="px-6 py-3 text-[16px] text-gray-300 bg-[#111] border border-[#333] rounded-lg cursor-default hover:border-gray-400 transition-colors">
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.section>

                {/* =========================================
                    NEW ADDITIONS FROM DOCUMENTS
                    ========================================= */}

                {/* 6. THE BACKSTORY (Lineage & Early Career) */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="bg-[#080808] border border-[#222] rounded-3xl p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gray-600"></div>
                    <motion.div variants={fadeUp} className="space-y-6">
                        <h2 className="text-3xl md:text-[36px] font-normal text-white mb-8">
                            Lineage & Early Foundation
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-base md:text-[18px] text-gray-400 font-light leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    I belong to a family of zamindars and bureaucrats, which inherently instilled a quiet sense of authority in my persona. Interestingly, my pet name in childhood amongst friends and family was <strong className="text-white">"RAJA"</strong>—a subtle reflection of my lineage.
                                </p>
                                <p>
                                    Even during my hostel days in college, I preferred wearing kurta-pajamas over casual wear and was often recognized as someone who carried themselves with a certain regal dignity.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Early on in my career, I had the distinct honor of dealing one-to-one with some of the biggest developers, industrialists, and politicians in Delhi.
                                </p>
                                <p>
                                    Meeting stalwarts like KP Singh (DLF), Sushil Ansal, Ajay Shriram, Capt. CP Krishnan Nair, and Rajmata Vijay Raje Scindia gave me the quiet confidence to navigate complex conversations, irrespective of the status of the people across the table.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* 7. THE GUIDING LIGHT (Gurus) */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={fadeUp} className="mb-12">
                        <h2 className="text-3xl md:text-[36px] font-normal flex items-center gap-3 text-gray-200">
                            <span className="text-gray-500">•</span> The Guiding Principles
                        </h2>
                        <p className="text-base md:text-[18px] text-gray-400 font-light mt-4 max-w-2xl">
                            Professionally, my entire personality and design philosophy is an expression of the profound knowledge imparted by my four gurus.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {gurus.map((guru, idx) => (
                            <motion.div key={idx} variants={fadeUp} className="bg-transparent border border-[#333] p-8 rounded-2xl hover:bg-[#111] transition-colors">
                                <h4 className="text-xl md:text-[24px] font-normal text-white mb-3">{guru.name}</h4>
                                <p className="text-sm md:text-[18px] text-gray-400 font-light">{guru.lesson}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 8. INNER & OUTER PURPOSE */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="border-t border-white/10 pt-16 md:pt-24 flex flex-col lg:flex-row gap-12 lg:gap-24"
                >
                    {/* Outer Purpose */}
                    <motion.div variants={fadeUp} className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl md:text-[32px] font-normal text-white">Outer Purpose</h3>
                        <div className="space-y-4 text-base md:text-[18px] text-gray-400 font-light leading-relaxed">
                            <p>To be a sacred architect of growth—not just of structures or systems, but of people’s lives, institutions, and shared destinies.</p>
                            <ul className="list-none space-y-3 mt-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-white mt-1.5 text-[10px]">■</span>
                                    <span>Lead with quiet conviction, rather than authority.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white mt-1.5 text-[10px]">■</span>
                                    <span>Mentor others in thinking with clarity, speaking with grace, and working with purpose.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-white mt-1.5 text-[10px]">■</span>
                                    <span>Infuse environments with integrity, alignment, and beauty.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Inner Purpose */}
                    <motion.div variants={fadeUp} className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl md:text-[32px] font-normal text-white">Inner Purpose</h3>
                        <div className="space-y-4 text-base md:text-[18px] text-gray-400 font-light leading-relaxed">
                            <p>To live from my inner wholeness—where conviction meets compassion, and solitude births leadership.</p>
                            <p>My growth arises not from chasing the unmanifest, but from embodying the principles that I already am: calm, clear, and constant.</p>
                            <p className="pt-2 border-t border-[#333]">
                                <strong className="text-white font-medium">My leadership energy is subtle, discerning, and quietly transformative. I do not dominate but make others realign.</strong>
                            </p>
                        </div>
                    </motion.div>
                </motion.section>

            </div>
        </main>
    );
};

export default BiographyPage;