import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MyVision = () => {
    // --- STATE ---
    const [activeModalData, setActiveModalData] = useState(null);

    // --- DATA ARRAYS & MODAL CONTENT ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const services = [
        {
            title: 'Architecture',
            short: 'I see architecture as the act of organizing relationships.',
            long: `Architecture as Strategy

I do not see architecture as the act of making objects. I see it as the act of organizing relationships—between people and space, vision and execution, ambition and reality.

A building is never just a building. It is an operational system, a financial decision, a cultural statement, and a long-term responsibility. My work begins by understanding that full picture.

This means I do more than design form.
I define priorities.
I align stakeholders.
I simplify complexity.
I translate ambition into workable systems.

The result is architecture that is not only well designed, but well reasoned.`
        },
        {
            title: 'Interior Design',
            short: 'Designing for performance—how environments function, adapt, and endure.',
            long: `Designing for Performance, Not Spectacle

My focus is on performance—how environments function, adapt, endure, and create value over time.

I am interested in how people move through space.
How institutions operate within it.
How systems support use.
How design reduces friction.
How built environments age.
How decisions made early determine outcomes much later.

This approach produces architecture that is measured not by visual noise, but by operational clarity, spatial intelligence, and long-term relevance.

I do not design for applause.
I design for performance.`
        },
        {
            title: 'Landscape Design',
            short: 'Studying where friction emerges and simplifying complexity without losing depth.',
            long: `Systems Thinking in Practice

Every project is a system, whether acknowledged or not.

My work is grounded in understanding how different parts of a project interact: spatial logic, user behavior, operational flow, financial constraints, regulatory realities, technical systems, and long-term maintenance.

I study where friction emerges, where inefficiencies hide, and where complexity can be simplified without losing depth.

This is where design becomes useful—not as expression alone, but as coordination.

I do not approach projects as isolated design problems.
I approach them as interconnected systems that must work as a whole.`
        },
        {
            title: 'Master Planning',
            short: 'Advising on design before the first line is drawn—aligning intent and risk.',
            long: `Strategic Advisory

A significant part of my work lies beyond drawings.

I advise institutions, healthcare-providers, and decision-makers on how to think about design before design begins. This includes defining project direction, evaluating priorities, identifying risks, aligning intent, and ensuring that what gets built is not only desirable, but necessary, viable, and sustainable.

Often, the most important design decisions are made long before plans are drawn.

My role is to bring structure to those decisions—so projects begin with clarity instead of correction.`
        }
    ];

    // Read More Text Data
    const visionFullText = {
        title: "My Vision",
        long: `Every project is a convergence of competing forces—space, structure, climate, cost, regulation, human behavior, institutional ambition, operational logic, and time. Good design does not eliminate this complexity; it organizes it. It gives structure to competing demands, aligns priorities, and transforms friction into coherence. When architecture is done well, it feels inevitable. Not because it is simple, but because complexity has been resolved so thoroughly that it appears effortless.

That effortlessness is the real measure of design maturity.

A building should not demand attention to prove its value. It should work—quietly, intelligently, and consistently. It should guide movement without confusion, support use without resistance, adapt without compromise, and endure without constant correction. The best spaces do not perform for applause. They perform for life.

This is why I strive for relevance over novelty.

Relevance asks harder questions than style ever will. It asks what a place must do, who it must serve, how it must evolve, and what responsibilities it must carry over time. It resists the temptation of trend in favor of usefulness, longevity, and cultural fit. A relevant building does not chase attention. It earns permanence.

I am interested in creating environments that remain valuable long after aesthetic fashions have expired—spaces that continue to serve people, institutions, and cities with quiet competence. Because architecture, at its best, is not frozen expression. It is living infrastructure.

That belief also shapes how I mentor young architects.

I do not spend much time teaching software. Tools change too quickly to confuse them with knowledge. Nor am I interested in teaching style as doctrine. Style can be borrowed. Judgment cannot.

What I try to teach instead is the discipline beneath design: how to think clearly, how to decide responsibly, how to recognize consequence, and how to distinguish what is essential from what is merely impressive.

Young architects are often taught how to draw. Far fewer are taught how to judge. Yet judgment is what determines whether a drawing becomes architecture or merely representation.

I mentor them to understand that design is not only an act of creation, but an act of responsibility. Every line has cost. Every decision has consequence. Every omission becomes someone else’s problem later—on site, in operation, in maintenance, or in public use.

To practice architecture well is not simply to design beautifully. It is to think rigorously, decide responsibly, and build with foresight.

That, to me, is the real work.`
    };

    const mentorshipFullText = {
        title: "Mentorship and Professional Development",
        long: `Alongside practice, I actively mentor young architects and design professionals.

Not in software.
Not in stylistic imitation.
But in judgment.

I focus on the parts of the profession that are harder to teach and easier to overlook: decision-making, critical thinking, professional responsibility, design ethics, and the discipline of understanding consequences.

Tools can be learned.
Taste can be borrowed.
Judgment must be built.

I mentor to help young professionals think more clearly, act more responsibly, and understand that design is not just about what can be made—but what should be made, and why.`
    };

    const ultimateDeliveryFullText = {
        title: "What My Work Ultimately Delivers",
        long: `At every scale, my work is about improving how things function—spatially, strategically, and systemically.

I help shape environments that are not only designed well, but thought through.
Projects that are not only visually resolved, but operationally intelligent.
Decisions that are not only ambitious, but durable.

I do not simply design buildings.

I design clarity, structure, and long-term value.`
    };

    // UPDATED GURUS ARRAY (Modal Ready)
    const gurus = [
        {
            title: "Prof. J.H. Ansari",
            short: "Planning is not about maps alone—it is about systems, people, and consequence.",
            long: `Prof. J.H. Ansari shaped my understanding of planning long before I understood the profession in full. As a student in the Department of Physical Planning at School of Planning and Architecture, New Delhi from 1990–1994, I learned from him that planning was never about maps alone—it was about systems, people, and consequence.

He taught with clarity, discipline, and uncommon intellectual rigor. What stayed with me most was his insistence that every planning decision carries social weight. He sharpened not just my academic thinking, but my judgment. Prof. Ansari did not merely teach planning; he taught us how to think responsibly, critically, and with long-term civic conviction.`
        },
        {
            title: "Prof. M. Shaheer",
            short: "Landscape is never ornamental—it is structural, civilizational, and deeply tied to memory.",
            long: `Prof. M. Shaheer shaped my understanding of landscape as both ecology and culture. As a student in the Department of Landscape Architecture at School of Planning and Architecture, New Delhi from 1994–1996, I learned from him that landscape was never ornamental—it was structural, civilizational, and deeply tied to memory.

He brought rare clarity to the relationship between land, water, vegetation, and human settlement. His teaching was rigorous, quiet, and deeply observant. What stayed with me was his insistence that design must begin with respect for terrain and context. Prof. Shaheer taught me to see landscape not as decoration, but as the enduring framework within which architecture must learn to belong.`
        },
        {
            title: "Prof. S.C. Gupta",
            short: "Urban development is not theory scaled up, but coordination made visible.",
            long: `Working with Prof. S.C. Gupta from 1996–1999 as an associate in his urban development consultancy was my first real education in the mechanics of cities. In practice, he was exacting, methodical, and relentlessly clear about the difference between drawings and delivery.

He taught me that urban development is not theory scaled up, but coordination made visible—land, infrastructure, governance, finance, and timing working in discipline. What shaped me most was his insistence on precision, accountability, and administrative realism. Under him, I learned to think beyond design intent and engage implementation as a serious professional responsibility. Prof. Gupta sharpened my understanding of cities as systems that must function before they can impress.`
        },
        {
            title: "Prof. M.S. Satsangi",
            short: "Design excellence is built on discipline, restraint, and intellectual honesty.",
            long: `Prof. M.S. Satsangi shaped my professional life not only as a mentor, but as a partner across two defining chapters—Satsangi Chandra Design Consultants (1999–2006) and SCDC Associates (2006–2011). Working alongside him taught me that design excellence is built on discipline, restraint, and intellectual honesty.

He brought rigor to every decision and never allowed style to outrun substance. What influenced me most was his ability to balance conceptual clarity with professional steadiness. From him, I learned that architecture is not sustained by talent alone, but by consistency, judgment, and trust. Prof. Satsangi’s impact on me was enduring—he refined both my practice and my temperament as a professional.`
        }
    ];

    const inspirations = [
        { name: "Frank Lloyd Wright", title: "Architect", desc: "Architecture that grows from land, not imposed on it. Horizontal, grounded, and sequential. Space unfolds, not reveals instantly." },
        { name: "Louis Kahn", title: "Architect", desc: "Silence, monumentality, and the idea that a building 'knows what it wants to be.' Kahn didn’t design buildings—he designed presence." },
        { name: "Charles Correa", title: "Architect", desc: "Made modernism Indian without costume drama. Open-to-sky as a design weapon with myth, geometry, and climate intertwined." },
        { name: "Geoffrey Bawa", title: "Architect", desc: "He made climate sensual. Landscape as architecture and tropical modernism with soul." },
        { name: "Amitabh Bachchan", title: "Actor", desc: "A presence that commands without excess. Build architecture with lasting authority—spaces that age with dignity without shouting." },
        { name: "Narendra Modi", title: "Politician", desc: "Leadership built on clarity, symbolism, and execution at scale. Design like governance—clear narrative and decisive moves." }
    ];

    const scribbleVariant = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: (i) => ({
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.5 + i * 0.2
            }
        })
    };

    const PencilScribble = ({ viewBox, d, className, custom }) => (
        <svg
            viewBox={viewBox}
            className={`absolute pointer-events-none ${className}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                d={d}
                fill="none"
                stroke="#666"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                custom={custom}
                variants={scribbleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            />
        </svg>
    );

    return (
        <section className="w-full bg-black text-white py-6 md:py-0 md:mb-16 px-6 md:px-12 overflow-hidden font-archivo">
            <motion.div
                className="max-w-7xl mx-auto space-y-10 md:space-y-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >

                {/* --- 1. MY VISION SECTION --- */}
                <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-8 md:mb-0">
                    <motion.div variants={fadeInUp} className="w-full lg:w-[70%] space-y-4">
                        <h2 className="text-3xl md:text-3xl font-normal uppercase flex items-center gap-3 text-gray-200">
                            My Vision
                        </h2>

                        <div className="space-y-4 text-base md:text-[16px] text-justify font-light leading-relaxed text-gray-400">
                            <p className="text-lg md:text-[16px] text-gray-300">
                                My work is rooted in a simple belief:
                            </p>

                            <h3 className="text-lg md:text-[16px] leading-snug font-medium text-white mb-2 border-l-2 border-gray-600 pl-4 md:pl-4">
                                "Good architecture is not about visual novelty—it is about making complex systems work effortlessly."
                            </h3>

                            <p>
                                Architecture has always been burdened by image. Too often, it is judged by how quickly it attracts attention rather than how well it performs over time. I have never found that convincing. Buildings are not objects to be admired in isolation; they are systems to be inhabited, operated, maintained, adapted, and relied upon. Their success is not measured by how dramatic they appear on day one, but by how intelligently they continue to function on day ten thousand.
                            </p>

                            <p className="text-gray-400 font-medium">
                                For me, architecture is the discipline of resolving complexity with clarity.
                            </p>

                            <p>{visionFullText.long.split('\n\n')[0]}</p>

                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="w-full lg:w-[40%] flex justify-center items-center relative py-4 mt-0 md:mt-16"
                    >
                        <PencilScribble viewBox="0 0 50 50" d="M10,25 C15,10 35,10 40,25 C45,40 25,45 20,35 C15,25 25,20 30,25" className="w-12 h-12 top-0 left-4 md:left-10" custom={0} />
                        <PencilScribble viewBox="0 0 40 40" d="M20,20 m-1,0 a1,1 0 1,0 2,0 a1,1 0 1,0 -2,0 M20,20 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 M20,20 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0" className="w-10 h-10 top-10 right-0 md:-right-4" custom={1} />
                        <PencilScribble viewBox="0 0 60 40" d="M5,20 C10,5 25,5 30,15 C35,25 20,35 15,30 C10,25 20,15 30,18 C40,21 45,35 55,25" className="w-16 h-10 -bottom-2 left-0 md:left-5" custom={2} />
                        <PencilScribble viewBox="0 0 50 50" d="M5,25 l10,-15 l15,20 l10,-25 l5,15 M5,25 c10,10 20,-10 30,10 c10,20 15,0 15,-10" className="w-14 h-14 top-1/2 -right-8 -translate-y-1/2" custom={3} />
                        <PencilScribble viewBox="0 0 30 30" d="M15,5 C5,5 5,25 15,25 C25,25 25,5 15,5 M15,10 C10,10 10,20 15,20 C20,20 20,10 15,10" className="w-8 h-8 bottom-4 right-8" custom={4} />

                        <motion.img
                            src="/about/about2.png"
                            alt="Bakul Chandra Sketch"
                            className="relative z-10 w-auto max-h-[350px] md:max-h-[500px] md:mt-16 object-contain grayscale opacity-90 drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] cursor-pointer"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, opacity: 1 }}
                        />
                    </motion.div>
                </div>

                {/* Remaining vision paragraphs - full width */}
                <motion.div variants={fadeInUp} className="w-full space-y-3 text-base md:text-[16px] text-justify font-light leading-relaxed text-gray-400">
                    {visionFullText.long.split('\n\n').slice(1).map((para, i) => {
                        const isHighlighted = para.startsWith('I do not spend much time teaching software') || para.startsWith('To practice architecture well');
                        return (
                            <p key={i} className={isHighlighted ? 'text-white font-medium border-l-2 border-gray-600 pl-4' : ''}>{isHighlighted ? `"${para}"` : para}</p>
                        );
                    })}
                </motion.div>

                {/* <motion.div variants={fadeInUp} className="w-full pb-16 border-b border-white/10">
                    <div className="text-base md:text-[18px] font-light leading-relaxed text-gray-400 max-w-4xl">
                        <button 
                            onClick={() => setActiveModalData(visionFullText)}
                            className="group flex items-center gap-2 mt-4 text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                        >
                            <span className="border-b border-gray-600 group-hover:border-white transition-colors pb-0.5">Read Full Vision</span>
                            <span>→</span>
                        </button>
                    </div>
                </motion.div> */}


                {/* --- 2. WHAT I DO SECTION --- */}
                <div className="space-y-6">
                    
                    {/* A. Intro Text */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-3xl font-normal uppercase flex items-center gap-3 text-gray-200">What I Do</h2>
                        
                        <div className="text-base md:text-[16px] text-gray-400 font-light leading-relaxed max-w-8xl space-y-4">
                            <p>
                                I work at the intersection of architecture, strategy, and systems thinking.
                            </p>
                            <p>
                                My work is not limited to designing buildings. I solve spatial, institutional, and operational problems through design—using architecture as a strategic tool rather than a purely visual exercise. I approach every project as a system of decisions, where built form is only one part of a much larger equation.
                            </p>
                            <p >
                                At its core, what I do is simple: I bring clarity to complexity.
                            </p>
                            <p>
                                Whether I am working on a building, a campus, a masterplan, or an institutional challenge, my role is to identify what truly matters, remove what does not, and create structures—physical and strategic—that perform with intelligence over time.
                            </p>
                        </div>
                    </div>

                    {/* B. Mentorship & Delivery */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-0">
                        <div className="space-y-4 text-base md:text-[16px] text-gray-400 font-light leading-relaxed text-justify">
                            <h3 className="text-2xl font-normal text-white mb-2">Mentorship and Professional Development</h3>
                            <p>
                                Alongside practice, I actively mentor young architects and design professionals. Not in software. Not in stylistic imitation. But in judgment.
                            </p>
                            {mentorshipFullText.long.split('\n\n').slice(1).map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                            {/* <button 
                                onClick={() => setActiveModalData(mentorshipFullText)}
                                className="group flex items-center gap-2 mt-4 text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                            >
                                <span className="border-b border-gray-600 group-hover:border-white transition-colors pb-0.5">Read More</span>
                                <span>→</span>
                            </button> */}
                        </div>

                        <div className="space-y-4 text-base md:text-[16px] text-gray-400 font-light leading-relaxed">
                            <h3 className="text-2xl font-normal text-white mb-2">What My Work Ultimately Delivers</h3>
                            <p>
                                At every scale, my work is about improving how things function—spatially, strategically, and systemically.
                            </p>
                            {ultimateDeliveryFullText.long.split('\n\n').slice(1).map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                            {/* <button 
                                onClick={() => setActiveModalData(ultimateDeliveryFullText)}
                                className="group flex items-center gap-2 mt-4 text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                            >
                                <span className="border-b border-gray-600 group-hover:border-white transition-colors pb-0.5">Read More</span>
                                <span>→</span>
                            </button> */}
                        </div>
                    </div>

                    {/* C. Interactive Services Cards */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.3)" }}
                                onClick={() => setActiveModalData(service)}
                                className="group p-8 bg-[#0a0a0a] border border-white/10 rounded-2xl cursor-pointer transition-all duration-300 h-full flex flex-col justify-between"
                            >
                                <h3 className="text-2xl font-normal text-white mb-4 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">{service.short}</p>
                                <span className="mt-8 text-xs uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">Read Manifesto →</span>
                            </motion.div>
                        ))}
                    </div> */}

                </div>

                {/* --- UNIVERSAL MODAL (The Overlay) --- */}
                <AnimatePresence>
                    {activeModalData && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                            onClick={() => setActiveModalData(null)}
                        >
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#050505] border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
                            >
                                <div className=" bg-transparent pb-4 mb-4 border-b border-white/5 z-10">
                                    <button onClick={() => setActiveModalData(null)} className="text-gray-500 hover:text-white text-sm uppercase tracking-widest transition-colors flex items-center gap-2">
                                        <span>←</span> Close
                                    </button>
                                </div>
                                
                                <h2 className="text-3xl md:text-4xl font-light mb-8 text-white mt-4">{activeModalData.title}</h2>
                                
                                <div className="text-gray-300 text-base md:text-[17px] leading-relaxed font-light whitespace-pre-line columns-1 md:columns-2 gap-12">
                                    {activeModalData.long}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>


                {/* --- 4. THE GUIDING PRINCIPLES (GURUS) --- */}
                <motion.div variants={containerVariants} className="space-y-8 md:space-y-10 pt-0">
                    <motion.div variants={fadeInUp} className="space-y-4 pt-0">
                        <h2 className="text-3xl md:text-3xl font-normal flex items-center gap-3 text-gray-200">
                            The Guiding Principles
                        </h2>
                        <p className="text-lg md:text-[16px] text-gray-400 font-light max-w-6xl">
                            Professionally, my entire personality and design philosophy is an expression of the profound knowledge imparted by my four gurus.
                        </p>
                    </motion.div>

                    {/* UPDATED GURU CARDS (Now Clickable) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {gurus.map((guru, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
                                className="bg-[#080808] border border-[#222] p-5 md:p-8 rounded-2xl hover:border-gray-500 hover:bg-[#111] transition-all duration-500 shadow-lg group cursor-pointer flex flex-col justify-between h-full"
                            >
                                <div>
                                    <h4 className="text-xl md:text-[20px] font-normal text-white mb-3 group-hover:text-gray-200 transition-colors">{guru.title}</h4>
                                    <p className="text-base md:text-[14px] text-gray-400 font-light leading-relaxed mb-0">{guru.short}</p>
                                </div>
                                <div className="space-y-3 mt-0 text-justify">
                                    {guru.long.split('\n\n').slice(0, 2).map((paragraph, idx) => (
                                        <p key={idx} className="text-[14px] text-gray-400 font-light leading-relaxed">{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- 5. INSPIRATIONS & INFLUENCES --- */}
                <motion.div variants={containerVariants} className="space-y-10 pt-0">
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <h2 className="text-3xl md:text-3xl font-normal flex items-center gap-3 text-gray-200">
                            Inspirations
                        </h2>
                        <p className="text-lg md:text-[16px] text-gray-400 font-light max-w-7
                        xl">
                            I operate somewhere between a monk and a strategist. I prefer silence over spectacle but know exactly when to make a statement. Here are the minds that shape my thinking.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {inspirations.map((insp, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-transparent border border-white/5 p-5 md:p-8 rounded-2xl hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <h4 className="text-xl md:text-[20px] font-normal text-white mb-1">{insp.name}</h4>
                                    <span className="text-xs md:text-[16px] lowercase tracking-widest text-gray-400 font-bold mb-4 block">
                                        {insp.title}
                                    </span>
                                    <p className="text-base md:text-[14px] text-gray-400 font-light leading-relaxed text-justify">
                                        "{insp.desc}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- 6. INNER & OUTER PURPOSE --- */}
                {/* <motion.div
                    variants={containerVariants}
                    className="border-t border-white/10 pt-8 md:pt-16 flex flex-col lg:flex-row gap-12 lg:gap-24"
                > */}
                    {/* Outer Purpose */}
                    {/* <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-3xl md:text-[36px] font-normal text-white">Outer Purpose</h3>
                        <div className="space-y-4 text-base md:text-[18px] text-gray-400 font-light leading-relaxed">
                            <p>
                                To be a sacred architect of growth—not just of structures or systems, but of people’s lives, institutions, and shared destinies.
                            </p>
                            <ul className="list-none space-y-4 mt-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-500 mt-2 text-[10px]">■</span>
                                    <span>Lead with quiet conviction, rather than authority.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-500 mt-2 text-[10px]">■</span>
                                    <span>Mentor others in thinking with clarity, speaking with grace, and working with purpose.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-500 mt-2 text-[10px]">■</span>
                                    <span>Infuse environments with integrity, alignment, and beauty.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div> */}

                    {/* Inner Purpose */}
                    {/* <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-3xl md:text-[36px] font-normal text-white">Inner Purpose</h3>
                        <div className="space-y-6 text-base md:text-[18px] text-gray-400 font-light leading-relaxed">
                            <p>
                                To live from my inner wholeness—where conviction meets compassion, and solitude births leadership.
                            </p>
                            <p>
                                My growth arises not from chasing the unmanifest, but from embodying the principles that I already am: calm, clear, and constant.
                            </p>
                            <div className="p-6 bg-[#0a0a0a] border-l-4 border-gray-500 rounded-r-xl mt-6">
                                <p className="text-white font-medium italic">
                                    "My leadership energy is subtle, discerning, and quietly transformative. I do not dominate but make others realign."
                                </p>
                            </div>
                        </div>
                    </motion.div> */}
                {/* </motion.div> */}

            </motion.div>
        </section>
    );
};

export default MyVision;