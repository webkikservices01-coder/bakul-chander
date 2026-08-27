import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { architectureLabAssets } from '../../data/architectureLabAssets';

// --- DATA ---
const baseTravelPhotos = [
    {
        id: 1,
        src: "/home/travel/tra1_result.webp",
        title: "Symmetry in Concrete",
        location: "New Delhi",
        desc: "Exploring the brutalist geometry and bold concrete lines in modern institutional architecture.",
        aspectRatio: "aspect-[4/5]",
        category: "Architecture Lab"
    },
    {
        id: 2,
        src: "/home/travel/tra2_result.webp",
        title: "Urban Skyline",
        location: "Mumbai",
        desc: "A breathtaking view of the dense urban fabric merging with the coastal horizon.",
        aspectRatio: "aspect-[16/9]",
        category: "Travel"
    },
    {
        id: 3,
        src: "/home/travel/tra3_result.webp",
        title: "Heritage Corridors",
        location: "Tamil Nadu",
        desc: "The timeless play of natural light and shadows in traditional temple courtyards.",
        aspectRatio: "aspect-square",
        category: "Photography"
    },
    {
        id: 4,
        src: "/home/travel/tra4_result.webp",
        title: "Modern Facades",
        location: "Bengaluru",
        desc: "High-tech glass and steel structures reflecting the dynamic nature of the IT capital.",
        aspectRatio: "aspect-[3/4]",
        category: "Architecture Lab"
    },
    {
        id: 5,
        src: "/home/travel/tra5_result.webp",
        title: "Tropical Retreats",
        location: "Goa",
        desc: "Sustainable hospitality design seamlessly blending into the lush green topography.",
        aspectRatio: "aspect-[4/3]",
        category: "Travel"
    },
    {
        id: 6,
        src: "/home/travel/tra6_result.webp",
        title: "Backwater Serenity",
        location: "Kerala",
        desc: "Vernacular architecture meeting the serene waters, prioritizing natural ventilation.",
        aspectRatio: "aspect-[16/10]",
        category: "Slice of Life"
    },
    {
        id: 7,
        src: "/home/travel/tra1_result.webp",
        title: "Street Reflections",
        location: "New Delhi",
        desc: "Candid moments captured in the busy commercial arteries of the capital.",
        aspectRatio: "aspect-[4/5]",
        category: "Slice of Life"
    },
    {
        id: 8,
        src: "/home/travel/tra2_result.webp",
        title: "Monolith Minimalist",
        location: "Mumbai",
        desc: "A poster-worthy composition of stark geometry against an overcast sky.",
        aspectRatio: "aspect-[16/9]",
        category: "Posters & Pics"
    },
    {
        id: 9,
        src: "/home/travel/tra3_result.webp",
        title: "Ancient Textures",
        location: "Tamil Nadu",
        desc: "Close-up study of weathered stone carving details.",
        aspectRatio: "aspect-square",
        category: "Photography"
    },
    {
        id: 10,
        src: "/home/travel/tra4_result.webp",
        title: "Neon Streets",
        location: "Bengaluru",
        desc: "The city after dark through a cinematic lens.",
        aspectRatio: "aspect-[3/4]",
        category: "Posters & Pics"
    },
    {
        id: 11,
        src: "/home/travel/tra5_result.webp",
        title: "Coastal Rhythm",
        location: "Goa",
        desc: "Local life unfolding rhythmically along the shoreline.",
        aspectRatio: "aspect-[4/3]",
        category: "Slice of Life"
    },
    {
        id: 12,
        src: "/home/travel/tra6_result.webp",
        title: "The Horizon Line",
        location: "Kerala",
        desc: "An expansive landscape visual designed for large-format display.",
        aspectRatio: "aspect-[16/10]",
        category: "Posters & Pics"
    },
    {
        id: 13,
        src: "/balu.jpeg",
        title: "Happy Guru Purnima, Bakul Sir",
        location: "",
        desc: "A tribute poster celebrating Bakul Chandra as an architect, mentor and guiding inspiration.",
        aspectRatio: "aspect-[3/4]",
        category: "Posters & Pics"
    },
    {
        id: 14,
        src: "/balu%202.jpeg",
        title: "Design Philosophy",
        location: "",
        desc: "A tribute poster on Bakul Chandra's design philosophy — clarity, function, sustainability and impact.",
        aspectRatio: "aspect-[3/4]",
        category: "Posters & Pics"
    }
];

const travelPhotos = [
    ...baseTravelPhotos,
    ...architectureLabAssets.map((asset) => ({
        ...asset,
        category: 'ARCHITECTURE LAB'
    }))
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const TravelGallery = () => {
    const tabs = ["Travel", "Photography", "ARCHITECTURE LAB", "Slice of Life", "Posters & Pics"];
    
    const [activeTab, setActiveTab] = useState("ARCHITECTURE LAB");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Filter photos based on active tab
    const filteredPhotos = travelPhotos.filter(photo => photo.category === activeTab);

    // Lightbox Controls
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
    };

    // Keyboard Navigation for Lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, filteredPhotos]);

    return (
        <main className="w-full bg-black text-white font-['Archivo'] py-12 md:py-24 px-6 md:px-12 selection:bg-white selection:text-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER */}
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={itemVariants}
                    className="mb-8 text-center md:text-left border-b border-white/10 pb-8"
                >
                    <h1 className="text-4xl md:text-[56px] font-light tracking-wide mb-4">
                        Travel & <span className="font-normal">Photography</span>
                    </h1>
                    <p className="text-[18px] text-gray-400 font-light max-w-2xl mx-auto md:mx-0">
                        A curated visual diary capturing the intersection of architecture, urban landscapes, and human experience across India.
                    </p>
                </motion.div>

                {/* SUB-TABS NAVIGATION */}
                <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/10 pb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2.5 rounded-full text-sm tracking-wider transition-all duration-300 border ${
                                activeTab === tab 
                                    ? "bg-white text-black border-white font-medium shadow-md" 
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/40 hover:text-white"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* COPYRIGHT CREDIT NOTICE (For Architecture Lab or general usage) */}
                {activeTab === "ARCHITECTURE LAB" && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 text-xs tracking-widest text-gray-500 uppercase"
                    >
                        * Visual assets courtesy of Architecture Lab. Curated by Bakul Chandra for reference purposes only, {new Date().getFullYear()}.
                    </motion.div>
                )}

                {/* MASONRY GALLERY GRID */}
                <motion.section
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {filteredPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id + "-" + index}
                            variants={itemVariants}
                            onClick={() => openLightbox(index)}
                            className="group relative rounded-3xl overflow-hidden cursor-pointer border border-[#222222] bg-[#0a0a0a] shadow-lg transition-all duration-500 hover:border-gray-500"
                        >
                            {/* Image */}
                            <div className={`w-full ${photo.aspectRatio} relative overflow-hidden bg-[#111]`}>
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.section>
            </div>

            {/* LIGHTBOX OVERLAY */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-50 p-2"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Prev Button */}
                        <button 
                            onClick={prevImage}
                            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2 md:p-4 hidden md:block"
                        >
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button 
                            onClick={nextImage}
                            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 p-2 md:p-4 hidden md:block"
                        >
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Main Image Container */}
                        <motion.div 
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
                        >
                            <img
                                src={filteredPhotos[currentIndex].src}
                                alt={filteredPhotos[currentIndex].title}
                                className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default TravelGallery;