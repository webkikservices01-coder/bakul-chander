import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button'; 

// ==========================================
// CUSTOM COMPONENT: Chhoti "Jalebi" (Spiral)
// ==========================================
const JalebiSpiral = ({ className, delay }) => (
    <motion.svg 
        className={`absolute ${className} text-gray-400 z-20 pointer-events-none md:hidden`} 
        viewBox="0 0 50 50" 
        fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        // Hawa me tairne (float) ka animation
        animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: delay }}
    >
        <motion.path
            // Yeh path ekdum perfect 'Jalebi' (spiral) draw karta hai
            d="M 25 25 A 3 3 0 0 1 31 25 A 6 6 0 0 1 19 25 A 9 9 0 0 1 37 25 A 12 12 0 0 1 13 25 A 15 15 0 0 1 43 25"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: delay }}
        />
    </motion.svg>
);

const AboutSection = () => {
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full bg-black text-white py-0 pb-8 md:py-24 px-6 md:px-12 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">

                {/* --- ROW 1: "Who I am" --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                    
                    {/* Left: Building Sketch Image (HIDDEN ON MOBILE) */}
                    <motion.div
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="hidden md:block w-full" 
                    >
                        <img
                            src="/home/about1.png"
                            alt="Architectural Building Sketch"
                            className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                        />
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-light flex items-center gap-3">
                            <span className="text-2xl mt-1 text-gray-500">•</span> Who I am
                        </motion.h2>

                        <div className="text-gray-300 font-light leading-relaxed space-y-5 text-base md:text-lg">
                            <motion.p variants={itemVariant}>
                                Over the years, I’ve learned that most buildings don’t underperform because of poor design talent—they underperform because <strong className="text-white font-medium italic">clarity arrives too late.</strong>
                            </motion.p>
                            
                            <motion.p variants={itemVariant}>
                                As a Founding Partner at <strong className="text-white font-medium underline underline-offset-4 decoration-gray-600">Renascent Consultants</strong>, I focus on shaping healthcare and institutional environments where planning logic, operational efficiency, sustainability, and human experience are aligned from day one.
                            </motion.p>

                            <motion.p variants={itemVariant} className="text-gray-400">
                                If you are interested in future-ready healthcare design, institutional architecture, or meaningful collaboration grounded in thought rather than noise, we will likely have a good conversation.
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariant} className="pt-4">
                            <Button text="View my Portfolio" link="/portfolio" size="md" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* --- ROW 2: "My Vision" --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                    
                    {/* Left: Text Content (Order 2 on mobile, 1 on desktop) */}
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6 order-2 md:order-1"
                    >
                        <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-light flex items-center gap-3">
                            <span className="text-2xl mt-1 text-gray-500">•</span> My Vision
                        </motion.h2>

                        <div className="text-gray-300 font-light leading-relaxed space-y-5 text-base md:text-lg">
                            <motion.p variants={itemVariant}>
                                My work is rooted in a simple belief: <br />
                                <strong className="text-white font-medium text-xl md:text-2xl block mt-2">
                                    "Good architecture is not about visual novelty—it is about making complex systems work effortlessly."
                                </strong>
                            </motion.p>

                            <motion.p variants={itemVariant}>
                                I strive for <strong className="text-white font-medium">relevance</strong>—creating environments that serve people, institutions, and cities long after trends have passed.
                            </motion.p>

                            <motion.p variants={itemVariant}>
                                Alongside practice, I actively mentor young architects. Not in software or styles, but in <strong className="text-white font-medium">judgment, decision-making, and responsibility</strong>—the things no tool can automate.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Right: Portrait Sketch Image (Order 1 on mobile, 2 on desktop) */}
                    <motion.div
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full flex justify-center md:justify-end order-1 md:order-2 mt-8 md:mt-0"
                    >
                        {/* =================================================
                            MOBILE JALEBI & FLOATING IMAGE CONTAINER
                            (Overflow-visible rakha hai taaki jalebi bahar nikal sake)
                            ================================================= 
                        */}
                        <motion.div 
                            className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-full md:h-auto md:aspect-auto flex items-center justify-center cursor-pointer md:cursor-auto group"
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* 4 Chhote-chhote jalebi type rings image ke aaju-baju (Only Mobile) */}
                            <JalebiSpiral className="-top-4 -left-4 w-12 h-12 -rotate-12" delay={0.2} />
                            <JalebiSpiral className="top-6 -right-6 w-16 h-16 rotate-45" delay={0.5} />
                            <JalebiSpiral className="-bottom-2 -right-2 w-10 h-10 rotate-90" delay={0.8} />
                            <JalebiSpiral className="bottom-10 -left-8 w-14 h-14 -rotate-45" delay={1.1} />

                            {/* Main Image */}
                            <motion.img
                                src="/home/about2.png"
                                alt="Bakul Chandra Portrait Sketch"
                                // Image ko manually mobile pe circle (rounded-full) kiya hai
                                className="w-full h-full md:max-w-sm lg:max-w-md object-cover md:object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale relative z-10 rounded-full md:rounded-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] md:shadow-none"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            />

                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;