import React from 'react';
import { motion } from 'framer-motion';

const CareerAchievements = () => {
    const highlights = [
        {
            id: 1,
            title: "Honorary PhD",
            subtitle: "Architecture & Design",
            desc: "Conferred Doctor of Philosophy (Honoris Causa) by Mansarovar Global University for outstanding industry contributions.",
            icon: (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Top 50 Leader",
            subtitle: "Healthcare & Medtech",
            desc: "Consistently recognized as a top leader in Healthcare Infrastructure by Medgate Today (2023, 2024-25).",
            icon: (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "30+ Years",
            subtitle: "Of Excellence",
            desc: "Delivering massive scale projects, including a 1.5 million sq ft patient-centric healthcare ecosystem.",
            icon: (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Times of India",
            subtitle: "Excellence in Design",
            desc: "Honoured at the TIMES Leaders of Tomorrow – Seaboard Summit for long-term architectural resilience.",
            icon: (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        }
    ];

    const parablesData = [
        {
            id: 1,
            title: "The Academic Foundation",
            subtitle: "Planning & Landscape",
            desc: "My professional journey reflects a layered and disciplined engagement with the built environment, shaped by a rare continuity across planning, landscape, architecture, and urban development. My academic foundation began in physical planning, where I developed an early understanding of cities as complex systems shaped by infrastructure, policy, and social consequence. This was followed by formal training in landscape architecture, which sharpened my sensitivity to land, ecology, and the spatial logic of human settlement.",
            image: "/career/planning-landscape.webp"
        },
        {
            id: 2,
            title: "The Mechanics of Implementation",
            subtitle: "Urban Development Consultancy",
            desc: "This interdisciplinary grounding naturally informed my professional evolution. My early years in practice were rooted in urban development consultancy, where I gained direct exposure to the mechanics of implementation—land assembly, infrastructure coordination, regulatory systems, and the realities of execution. These formative experiences built a strong appreciation for cities not merely as designed objects, but as negotiated systems requiring precision, patience, and administrative clarity.",
            image: "/career/urban-development-consultancy.webp"
        },
        {
            id: 3,
            title: "Systems-Led Design",
            subtitle: "Architecture & Institutional Advisory",
            desc: "Over time, my work expanded into architecture, urban design, and institutional advisory, where I developed a practice defined by strategic thinking, contextual relevance, and systems-led design. My career has steadily evolved from technical specialization to broader leadership—bridging design, planning, governance, and mentorship. Across this progression, my work has remained grounded in a consistent belief: meaningful design is not driven by novelty, but by clarity, purpose, and long-term public relevance.",
            image: "/career/architecture-institutional-advisory.webp"
        }
    ];

    const timelineData = [
        {
            id: 1,
            period: "Oct 2012 – Present",
            role: "Founding Partner",
            company: "Renascent Consultants",
            desc: "Leading a premier design firm focused on shaping healthcare and institutional environments where planning logic, sustainability, and human experience align."
        },
        {
            id: 2,
            period: "Oct 2009 – Mar 2021",
            role: "Managing Director",
            company: "SCDC Associates Private Limited",
            desc: "Directed major urban, healthcare, and architectural projects, driving operational efficiency and high-performance building strategies."
        },
        {
            id: 3,
            period: "Jul 2006 – Sep 2016",
            role: "Founding Partner",
            company: "SCDC Associates",
            desc: "Spearheaded architectural innovations and mentored young talent in decision-making and responsible design."
        },
        {
            id: 4,
            period: "Oct 1999 – Mar 2010",
            role: "Founding Partner",
            company: "Satsangi Chandra Design Consultants",
            desc: "Established the foundation for a practice rooted in creating complex systems that work effortlessly without relying solely on visual novelty."
        },
        {
            id: 5,
            period: "Oct 1996 – Sep 1999",
            role: "Associate",
            company: "SCG Urban Development Consultants",
            desc: "Gained critical expertise in urban infrastructure and large-scale master planning."
        },
        {
            id: 6,
            period: "Jun 1996 – Sep 1996",
            role: "Associate",
            company: "School of Planning & Architecture",
            desc: "Began professional journey, contributing to academic and institutional architectural frameworks."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <main className="w-full bg-black text-white font-['Archivo'] py-10 md:py-20 px-5 md:px-12 selection:bg-white selection:text-black">
            <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">

                {/* HEADER */}
                {/* <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="border-b border-white/10 pb-6 md:pb-10"
                >
                    <p className="text-sm md:text-[17px] text-gray-400 font-light max-w-4xl leading-relaxed">
                        A chronological reflection of a 30+ year journey in architectural excellence, leadership, and industry recognition.
                    </p>
                </motion.div> */}

                {/* 1. HIGHLIGHTS GRID */}
                

                {/* 2. DEFINING PARABLES */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="mb-8 md:mb-20">
                        <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-white">
                            Defining Parables
                        </h2>
                        <p className="text-sm md:text-[17px] text-gray-400 font-light mt-2 md:mt-3 max-w-3xl leading-relaxed">
                            The evolution of a practice—from planning and infrastructure to architecture and institutional advisory.
                        </p>
                    </div>

                    <div className="space-y-10 md:space-y-10">
                        {parablesData.map((parable, index) => {
                            const isEven = index % 2 !== 0;
                            return (
                                <motion.div
                                    key={parable.id}
                                    variants={itemVariants}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 md:gap-10 lg:gap-20 group`}
                                >
                                    {/* Image */}
                                    <div className="w-full lg:w-1/2 h-[38vw] min-h-[180px] md:h-[55vh] overflow-hidden rounded-xl md:rounded-2xl shadow-xl bg-[#111] border border-white/5 relative">
                                        <img
                                            src={parable.image}
                                            alt={parable.title}
                                            className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>

                                    {/* Text */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <span className="text-[10px] md:text-[14px] tracking-widest text-gray-500 font-bold mb-2 md:mb-4 block">
                                            {parable.subtitle}
                                        </span>
                                        <h3 className="text-xl md:text-3xl font-normal text-white mb-3 md:mb-6 leading-tight">
                                            {parable.title}
                                        </h3>
                                        <p className="text-sm md:text-[16px] text-[#aaaaaa] text-justify font-light leading-relaxed border-l-2 border-gray-600 pl-4 md:pl-8">
                                            {parable.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* 3. TIMELINE */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="mb-8 md:mb-20">
                        <h2 className="text-2xl md:text-3xl font-normal tracking-wide text-white">
                            My Journey
                        </h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto pb-6 md:pb-10">
                        {/* Vertical line */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute left-[14px] md:left-1/2 top-0 w-px bg-[#333333] md:-translate-x-1/2 z-0"
                        />

                        {timelineData.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between pb-8 md:pb-10 w-full group z-10 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Spacer for alternate side on desktop */}
                                    <div className="hidden md:block w-5/12" />

                                    {/* Dot */}
                                    <div className="absolute left-[14px] md:left-1/2 top-1 md:top-auto transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#111] border-[2px] md:border-[3px] border-gray-500 rounded-full group-hover:border-white group-hover:bg-white transition-colors duration-500 z-20 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" />

                                    {/* Card */}
                                    <div className={`w-full pl-8 md:pl-0 md:w-5/12 flex flex-col ${isLeft ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                                        <div className="inline-block px-3 py-1 md:px-2 md:py-1 mb-3 md:mb-5 bg-[#111] border border-[#333] rounded-md text-[10px] md:text-[12px] text-gray-300 font-medium tracking-widest uppercase shadow-md">
                                            {item.period}
                                        </div>
                                        <h3 className="text-base md:text-[30px] font-normal text-white mb-1 md:mb-2 group-hover:text-gray-200 transition-colors leading-snug">
                                            {item.role}
                                        </h3>
                                        <h4 className="text-sm md:text-[18px] text-gray-400 font-medium mb-2 md:mb-5">
                                            {item.company}
                                        </h4>
                                        <p className="text-xs md:text-[16px] text-[#888888] font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

            </div>
        </main>
    );
};

export default CareerAchievements;
