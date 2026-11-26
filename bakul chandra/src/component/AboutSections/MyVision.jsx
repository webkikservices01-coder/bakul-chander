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
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const visionFullText = {
        title: "My Vision",
        long: `Every project is a convergence of competing forces: space, structure, climate, cost, regulation, human behavior, institutional ambition, operational logic, and time. Good design does not eliminate this complexity; it organizes it. It gives structure to competing demands, aligns priorities, and transforms friction into coherence. When architecture is done well, it feels inevitable. Not because it is simple, but because complexity has been resolved so thoroughly that it appears effortless.

That effortlessness is the real measure of design maturity.

A building should not demand attention to prove its value. It should work, quietly, intelligently, and consistently. It should guide movement without confusion, support use without resistance, adapt without compromise, and endure without constant correction. The best spaces do not perform for applause. They perform for life.

This is why I strive for relevance over novelty.

Relevance asks harder questions than style ever will. It asks what a place must do, who it must serve, how it must evolve, and what responsibilities it must carry over time. It resists the temptation of trend in favor of usefulness, longevity, and cultural fit. A relevant building does not chase attention. It earns permanence.

I am interested in creating environments that remain valuable long after aesthetic fashions have expired: spaces that continue to serve people, institutions, and cities with quiet competence. Because architecture, at its best, is not frozen expression. It is living infrastructure.

That belief also shapes how I mentor young architects.

I do not spend much time teaching software. Tools change too quickly to confuse them with knowledge. Nor am I interested in teaching style as doctrine. Style can be borrowed. Judgment cannot.

What I try to teach instead is the discipline beneath design: how to think clearly, how to decide responsibly, how to recognize consequence, and how to distinguish what is essential from what is merely impressive.

Young architects are often taught how to draw. Far fewer are taught how to judge. Yet judgment is what determines whether a drawing becomes architecture or merely representation.

I mentor them to understand that design is not only an act of creation, but an act of responsibility. Every line has cost. Every decision has consequence. Every omission becomes someone else’s problem later: on site, in operation, in maintenance, or in public use.

To practice architecture well is not simply to design beautifully. It is to think rigorously, decide responsibly, and build with foresight.

That, to me, is the real work.`
    };

    const mentorshipFullText = {
        title: "Mentorship and Professional Development",
        long: `Alongside practice, I actively mentor young architects and design professionals. Not in software. Not in stylistic imitation. But in judgment.

I focus on the parts of the profession that are harder to teach and easier to overlook: decision making, critical thinking, professional responsibility, design ethics, and the discipline of understanding consequences.

Tools can be learned.
Taste can be borrowed.
Judgment must be built.

I mentor to help young professionals think more clearly, act more responsibly, and understand that design is not just about what can be made, but what should be made, and why.`
    };

    const ultimateDeliveryFullText = {
        title: "What My Work Ultimately Delivers",
        long: `At every scale, my work is about improving how things function: spatially, strategically, and systemically.

I help shape environments that are not only designed well, but thought through.
Projects that are not only visually resolved, but operationally intelligent.
Decisions that are not only ambitious, but durable.

I do not simply design buildings.

I design clarity, structure, and long term value.`
    };

    const gurus = [
        {
            title: "Prof. J.H. Ansari",
            short: "Planning is not about maps alone. It is about systems, people, and consequence.",
            paragraphs: [
                "Prof. J.H. Ansari shaped my understanding of planning long before I understood the profession in full. As a student in the Department of Physical Planning at School of Planning and Architecture, New Delhi from 1990 to 1994, I learned from him that planning was never just about maps.",
                "He taught with clarity, discipline, and uncommon intellectual rigor. What stayed with me most was his insistence that every planning decision carries social weight. He sharpened not just my academic thinking, but my judgment. Prof. Ansari did not merely teach planning; he taught us how to think responsibly, critically, and with long term civic conviction."
            ]
        },
        {
            title: "Prof. M. Shaheer",
            short: "Landscape is never ornamental. It is structural, civilizational, and deeply tied to memory.",
            paragraphs: [
                "Prof. M. Shaheer shaped my understanding of landscape as both ecology and culture. As a student in the Department of Landscape Architecture at School of Planning and Architecture, New Delhi from 1994 to 1996, I learned from him that landscape was never merely ornamental.",
                "He brought rare clarity to the relationship between land, water, vegetation, and human settlement. His teaching was rigorous, quiet, and deeply observant. What stayed with me was his insistence that design must begin with respect for terrain and context. Prof. Shaheer taught me to see landscape not as decoration, but as the enduring framework within which architecture must learn to belong."
            ]
        },
        {
            title: "Prof. S.C. Gupta",
            short: "Urban development is not theory scaled up, but coordination made visible.",
            paragraphs: [
                "Working with Prof. S.C. Gupta from 1996 to 1999 as an associate in his urban development consultancy was my first real education in the mechanics of cities. In practice, he was exacting, methodical, and relentlessly clear about the difference between drawings and delivery.",
                "He taught me that real coordination shows up in the details: land, infrastructure, governance, finance, and timing working in discipline. What shaped me most was his insistence on precision, accountability, and administrative realism. Under him, I learned to think beyond design intent and engage implementation as a serious professional responsibility. Prof. Gupta sharpened my understanding of cities as systems that must function before they can impress."
            ]
        },
        {
            title: "Prof. M.S. Satsangi",
            short: "Design excellence is built on discipline, restraint, and intellectual honesty.",
            paragraphs: [
                "Prof. M.S. Satsangi shaped my professional life not only as a mentor, but as a partner across two defining chapters: Satsangi Chandra Design Consultants (1999 – 2006) and SCDC Associates (2006 – 2011). Working alongside him taught me the standards that would define my own practice.",
                "He brought rigor to every decision and never allowed style to outrun substance. What influenced me most was his ability to balance conceptual clarity with professional steadiness. From him, I learned that architecture is not sustained by talent alone, but by consistency, judgment, and trust. Prof. Satsangi’s impact on me was enduring. He refined both my practice and my temperament as a professional."
            ]
        }
    ];

    return (
        <section className="w-full bg-black text-white py-6 md:py-0 md:mb-16 px-5 md:px-12 overflow-hidden font-archivo">

            <motion.div
                className="max-w-7xl mx-auto space-y-6 md:space-y-10"
                initial="visible"
                whileInView="visible"
                viewport={{
                    once: true,
                    margin: "-100px"
                }}
                variants={containerVariants}
            >

                {/* --- 1. MY VISION SECTION --- */}

                <div className="mb-4!">

                    <motion.div
                        variants={fadeInUp}
                        className="w-full space-y-4"
                    >
                        <h2 className="heading-section">
                            My Vision
                        </h2>

                        <div className="space-y-4 text-base md:text-[16px] font-light">

                            <p>
                                My work is rooted in a simple belief:
                            </p>

                            <p className="font-medium border-l-2 border-zinc-600 pl-4">
                                "Good architecture is not about visual novelty. It is about making complex systems work effortlessly."
                            </p>

                            <p>
                                Architecture has always been burdened by image. Too often, it is judged by how quickly it attracts attention rather than how well it performs over time. I have never found that convincing. Buildings are not objects to be admired in isolation; they are systems to be inhabited, operated, maintained, adapted, and relied upon. Their success is not measured by how dramatic they appear on day one, but by how intelligently they continue to function on day ten thousand.
                            </p>

                            <p className="font-medium">
                                For me, architecture is the discipline of resolving complexity with clarity.
                            </p>

                            <p>
                                {visionFullText.long.split('\n\n')[0]}
                            </p>

                        </div>
                    </motion.div>

                </div>

                {/* Remaining vision paragraphs - full width */}

                <motion.div
                    variants={fadeInUp}
                    className="w-full space-y-4 text-base md:text-[16px] font-light"
                >
                    {visionFullText.long
                        .split('\n\n')
                        .slice(1)
                        .map((para, i) => {
                            const isHighlighted =
                                para.startsWith('I do not spend much time teaching software') ||
                                para.startsWith('To practice architecture well');

                            return (
                                <p
                                    key={i}
                                    className={
                                        isHighlighted
                                            ? 'font-medium border-l-2 border-zinc-600 pl-4'
                                            : ''
                                    }
                                >
                                    {isHighlighted ? `"${para}"` : para}
                                </p>
                            );
                        })}
                </motion.div>

                {/* --- 2. WHAT I DO SECTION --- */}

                <div className="space-y-6">

                    <div className="space-y-4">

                        <h2 className="heading-section">
                            What I Do
                        </h2>

                        <div className="text-base md:text-[16px] font-light max-w-full space-y-4">

                            <p>
                                I work at the intersection of architecture, strategy, and systems thinking.
                            </p>

                            <p>
                                My work is not limited to designing buildings. I solve spatial, institutional, and operational problems through design, using architecture as a strategic tool rather than a purely visual exercise. I approach every project as a system of decisions, where built form is only one part of a much larger equation.
                            </p>

                            <p>
                                At its core, what I do is simple: I bring clarity to complexity.
                            </p>

                            <p>
                                Whether I am working on a building, a campus, a masterplan, or an institutional challenge, my role is to identify what truly matters, remove what does not, and create structures, physical and strategic, that perform with intelligence over time.
                            </p>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 pt-0">

                        <div className="space-y-4 text-base md:text-[16px] font-light">

                            <h3 className="heading-sub mb-2">
                                Mentorship and Professional Development
                            </h3>

                            {mentorshipFullText.long
                                .split('\n\n')
                                .map((paragraph, idx) => (
                                    <p key={idx}>
                                        {paragraph}
                                    </p>
                                ))}

                        </div>

                        <div className="space-y-4 text-base md:text-[16px] font-light">

                            <h3 className="heading-sub mb-2">
                                What My Work Ultimately Delivers
                            </h3>

                            <p>
                                At every scale, my work is about improving how things function: spatially, strategically, and systemically.
                            </p>

                            {ultimateDeliveryFullText.long
                                .split('\n\n')
                                .slice(1)
                                .map((paragraph, idx) => (
                                    <p key={idx}>
                                        {paragraph}
                                    </p>
                                ))}

                        </div>
                    </div>
                </div>

                {/* --- UNIVERSAL MODAL --- */}

                <AnimatePresence>
                    {activeModalData && (
                        <motion.div
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                            onClick={() => setActiveModalData(null)}
                        >
                            <motion.div
                                initial={{
                                    y: 50,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    y: 50,
                                    opacity: 0
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#050505] border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
                            >

                                <div className="bg-transparent pb-4 mb-4 border-b border-white/5 z-10">

                                    <button
                                        onClick={() => setActiveModalData(null)}
                                        className="text-zinc-500 hover:text-white text-sm uppercase tracking-widest transition-colors flex items-center gap-2"
                                    >
                                        <span>←</span> Close
                                    </button>

                                </div>

                                <h2 className="text-3xl md:text-4xl font-light mb-8 text-white mt-4">
                                    {activeModalData.title}
                                </h2>

                                <div className="text-zinc-300 text-base md:text-[17px] leading-relaxed font-light whitespace-pre-line columns-1 md:columns-2 gap-12">
                                    {activeModalData.long}
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- 4. THE GUIDING PRINCIPLES (GURUS) --- */}

                <motion.div
                    variants={containerVariants}
                    className="space-y-8 md:space-y-10 pt-0"
                >

                    <motion.div
                        variants={fadeInUp}
                        className="space-y-2 pt-0"
                    >

                        <h2 className="heading-section">
                            The Guiding Principles
                        </h2>

                        <p className="text-base md:text-[16px] font-light max-w-4xl">
                            Professionally, my entire personality and design philosophy is an expression of the profound knowledge imparted by my four gurus.
                        </p>

                    </motion.div>

                    {/* GURU CARDS */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">

                        {gurus.map((guru, idx) => (

                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-[#080808] border border-[#222] p-5 md:p-8 flex flex-col justify-start h-full space-y-3"
                            >
                                <h4 className="heading-sub">
                                    {guru.title}
                                </h4>

                                {/* Key line, highlighted the same way on every card */}
                                <p className="text-base font-medium italic border-l-2 border-zinc-600 pl-4">
                                    {guru.short}
                                </p>

                                {guru.paragraphs.map((pText, pIdx) => (
                                    <p key={pIdx} className="text-base font-light">
                                        {pText}
                                    </p>
                                ))}
                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </motion.div>
        </section>
    );
};

export default MyVision;