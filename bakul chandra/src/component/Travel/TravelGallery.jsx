import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { architectureLabAssets } from '../../data/architectureLabAssets';

// --- DATA ---
const baseTravelPhotos = [
    {
        id: 1,
        src: "/home/travel/tra1.jpg",
        title: "Symmetry in Concrete",
        location: "",
        desc: "",
        aspectRatio: "aspect-[4/3]",
        category: "Travel"
    },
    {
        id: 2,
        src: "/home/travel/tra2.jpg",
        title: "Urban Skyline",
        location: "",
        desc: "",
        aspectRatio: "aspect-[4/3]",
        category: "Travel"
    },
    {
        id: 3,
        src: "/home/travel/tra3.jpg",
        title: "Heritage Corridors",
        location: "",
        desc: "",
        aspectRatio: "aspect-[4/3]",
        category: "Photography"
    }
    // Add more photos here. Rule: no text or quotes on the photos.
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
    visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
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
        <main className="w-full bg-black text-white font-['Archivo'] py-10 md:py-16 px-5 md:px-12 selection:bg-white selection:text-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER */}
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={itemVariants}
                    className="mb-6 text-left border-b border-white/10 pb-6"
                >
                    <p className="text-base font-light max-w-2xl">
                        A curated visual diary capturing the intersection of architecture, urban landscapes, and human experience across India.
                    </p>
                </motion.div>

                {/* SUB-TABS NAVIGATION */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 border-b border-white/10 pb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm tracking-wider transition-all duration-300 border ${
                                activeTab === tab 
                                    ? "bg-white text-black border-white font-medium shadow-md" 
                                    : "bg-transparent text-zinc-400 border-white/10 hover:border-white/40 hover:text-white"
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
                        className="mb-8 text-xs tracking-widest text-zinc-500 uppercase"
                    >
                        * Visual assets courtesy of Architecture Lab. Curated by Bakul Chandra for reference purposes only, {new Date().getFullYear()}.
                    </motion.div>
                )}

                {filteredPhotos.length === 0 && (
                    <p className="text-base font-light py-10">Photos coming soon.</p>
                )}

                {/* MASONRY GALLERY GRID */}
                <motion.section
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                >
                    {filteredPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id + "-" + index}
                            variants={itemVariants}
                            onClick={() => openLightbox(index)}
                            className="group relative overflow-hidden cursor-pointer border border-[#222222] bg-[#0a0a0a] transition-all duration-500 hover:border-zinc-500"
                        >
                            {/* Image */}
                            <div className={`w-full ${photo.aspectRatio} relative overflow-hidden bg-[#111]`}>
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
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
                                className="w-full max-h-[70vh] object-contain shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default TravelGallery;