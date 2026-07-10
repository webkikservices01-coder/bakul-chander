import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TravelPhotography = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Photos Data
    const photos = [
        {
            id: 1,
            src: "/home/travel/tra1.jpg",
            title: "Tamil Nadu",
            desc: "Lorem ipsum dolor sit amet consectetur. Semper et arcu porta suspendisse libero fringilla id nulla aliquam."
        },
        {
            id: 2,
            src: "/home/travel/tra2.jpg",
            title: "New Delhi",
            desc: "Modern architectural marvel capturing the essence of the city's fast-paced development and sustainable design principles."
        },
        {
            id: 3,
            src: "/home/travel/tra3.jpg",
            title: "Mumbai",
            desc: "A stunning interplay of light and shadow on this contemporary facade, standing tall against the skyline."
        },
        {
            id: 4,
            src: "/home/travel/tra1.jpg",
            title: "Kerala",
            desc: "Blending traditional materials with modern forms to create a space that breathes and interacts with nature."
        },
        {
            id: 5,
            src: "/home/travel/tra2.jpg",
            title: "Bengaluru",
            desc: "High-tech workspace environment focusing on employee well-being and collaborative energy."
        },
        {
            id: 6,
            src: "/home/travel/tra3.jpg",
            title: "Goa",
            desc: "A resort layout that respects the coastal topography while providing luxury and comfort."
        },
    ];

    // Mobile Auto-Play Interval (3 Seconds)
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % photos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [photos.length]);

    // Animations
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Mobile specific Cinematic Fade variants
    const mobileFadeVariants = {
        initial: { opacity: 0, scale: 0.95, filter: "blur(5px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
        exit: { opacity: 0, scale: 1.05, filter: "blur(5px)", transition: { duration: 0.6, ease: "easeIn" } }
    };

    return (
        <section className="w-full bg-black text-white py-12 md:py-16 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-0">

                {/* --- Header Section --- */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-10 md:mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-light flex items-center gap-3 text-gray-200">
                        <span className="text-2xl mt-1 text-gray-500">•</span> Travel and Photography
                    </h2>
                </motion.div>

                {/* =========================================
                    DESKTOP VIEW (GRID LAYOUT)
                ========================================== */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                            />

                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Hover Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                <div className="bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl">
                                    <h3 className="text-xl font-medium text-white mb-2">{photo.title}</h3>
                                    <p className="text-sm font-light text-gray-300 leading-relaxed line-clamp-3">
                                        {photo.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* =========================================
                    MOBILE VIEW (CINEMATIC FADE SLIDESHOW)
                ========================================== */}
                <div className="md:hidden flex flex-col items-center w-full">
                    
                    {/* Fixed Height Container for the fading images */}
                    <div className="relative w-[90%] max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                variants={mobileFadeVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Image */}
                                <img
                                    src={photos[activeIndex].src}
                                    alt={photos[activeIndex].title}
                                    className="w-full h-full object-cover grayscale"
                                />
                                
                                {/* Always visible text overlay for Mobile */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                                    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4">
                                        <h3 className="text-xl font-medium text-white mb-1.5">{photos[activeIndex].title}</h3>
                                        <p className="text-sm font-light text-gray-300 line-clamp-3">
                                            {photos[activeIndex].desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Progress Bar */}
                    {/* <div className="w-[80%] max-w-[250px] h-1.5 bg-white/10 rounded-full overflow-hidden relative mt-8">
                        <motion.div
                            key={activeIndex}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                            className="absolute top-0 left-0 h-full bg-white rounded-full shadow-[0_0_8px_#fff]"
                        />
                    </div> */}

                </div>

            </div>
        </section>
    );
};

export default TravelPhotography;