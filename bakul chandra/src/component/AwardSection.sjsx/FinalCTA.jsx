import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';

const FinalCTA = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full bg-black text-white py-8 md:py-10 px-6 md:px-12 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* --- Left Content Section --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 space-y-8 md:space-y-12"
                    >
                        {/* <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
                        >
                            Don’t just <br />
                            <span className="text-zinc-500">take my words</span>
                        </motion.h2>

                        <motion.div variants={fadeInUp}>

                            <Button
                                text="Book a Call Now"
                                link="/contact?tab=call"
                                size="md"
                            />
                        </motion.div> */}
                    </motion.div>

                    {/* --- Right Image Section --- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariant}
                        className="w-full lg:w-1/2 relative group"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <img
                                src="/award/award2.jpeg" // Apni image ka path yahan dalein
                                alt="Award Ceremony"
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />

                            {/* Subtle Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                        </div>

                        {/* Background subtle glow effect */}
                        <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FinalCTA;