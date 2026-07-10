import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ---
const travelPhotos = [
    {
        id: 1,
        src: "/home/travel/tra1_result.webp", // Replace with your actual paths
        title: "Symmetry in Concrete",
        location: "New Delhi",
        desc: "Exploring the brutalist geometry and bold concrete lines in modern institutional architecture.",
        aspectRatio: "aspect-[4/5]" // Tall image
    },
    {
        id: 2,
        src: "/home/travel/tra2_result.webp",
        title: "Urban Skyline",
        location: "Mumbai",
        desc: "A breathtaking view of the dense urban fabric merging with the coastal horizon.",
        aspectRatio: "aspect-[16/9]" // Wide image
    },
    {
        id: 3,
        src: "/home/travel/tra3_result.webp",
        title: "Heritage Corridors",
        location: "Tamil Nadu",
        desc: "The timeless play of natural light and shadows in traditional temple courtyards.",
        aspectRatio: "aspect-square" // Square image
    },
    {
        id: 4,
        src: "/home/travel/tra4_result.webp",
        title: "Modern Facades",
        location: "Bengaluru",
        desc: "High-tech glass and steel structures reflecting the dynamic nature of the IT capital.",
        aspectRatio: "aspect-[3/4]" // Tall image
    },
    {
        id: 5,
        src: "/home/travel/tra5_result.webp",
        title: "Tropical Retreats",
        location: "Goa",
        desc: "Sustainable hospitality design seamlessly blending into the lush green topography.",
        aspectRatio: "aspect-[4/3]" // Standard photo
    },
    {
        id: 6,
        src: "/home/travel/tra6_result.webp",
        title: "Backwater Serenity",
        location: "Kerala",
        desc: "Vernacular architecture meeting the serene waters, prioritizing natural ventilation.",
        aspectRatio: "aspect-[16/10]" // Wide image
    },
    {
        id: 7,
        src: "/home/travel/tra1_result.webp", // Replace with your actual paths
        title: "Symmetry in Concrete",
        location: "New Delhi",
        desc: "Exploring the brutalist geometry and bold concrete lines in modern institutional architecture.",
        aspectRatio: "aspect-[4/5]" // Tall image
    },
    {
        id: 8,
        src: "/home/travel/tra2_result.webp",
        title: "Urban Skyline",
        location: "Mumbai",
        desc: "A breathtaking view of the dense urban fabric merging with the coastal horizon.",
        aspectRatio: "aspect-[16/9]" // Wide image
    },
    {
        id: 9,
        src: "/home/travel/tra3_result.webp",
        title: "Heritage Corridors",
        location: "Tamil Nadu",
        desc: "The timeless play of natural light and shadows in traditional temple courtyards.",
        aspectRatio: "aspect-square" // Square image
    },
    {
        id: 10,
        src: "/home/travel/tra4_result.webp",
        title: "Modern Facades",
        location: "Bengaluru",
        desc: "High-tech glass and steel structures reflecting the dynamic nature of the IT capital.",
        aspectRatio: "aspect-[3/4]" // Tall image
    },
    {
        id: 11,
        src: "/home/travel/tra5_result.webp",
        title: "Tropical Retreats",
        location: "Goa",
        desc: "Sustainable hospitality design seamlessly blending into the lush green topography.",
        aspectRatio: "aspect-[4/3]" // Standard photo
    },
    {
        id: 12,
        src: "/home/travel/tra6_result.webp",
        title: "Backwater Serenity",
        location: "Kerala",
        desc: "Vernacular architecture meeting the serene waters, prioritizing natural ventilation.",
        aspectRatio: "aspect-[16/10]" // Wide image
    },
    {
        id: 13,
        src: "/home/travel/tra6_result.webp",
        title: "Backwater Serenity",
        location: "Kerala",
        desc: "Vernacular architecture meeting the serene waters, prioritizing natural ventilation.",
        aspectRatio: "aspect-[16/10]" // Wide image
    },
    {
        id: 14,
        src: "/home/travel/tra6_result.webp",
        title: "Backwater Serenity",
        location: "Kerala",
        desc: "Vernacular architecture meeting the serene waters, prioritizing natural ventilation.",
        aspectRatio: "aspect-[16/10]" // Wide image
    }
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
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Lightbox Controls
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto'; // Restore background scrolling
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === travelPhotos.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? travelPhotos.length - 1 : prev - 1));
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
    }, [lightboxOpen]);

    return (
        <main className="w-full bg-black text-white font-['Archivo'] py-12 md:py-24 px-6 md:px-12 selection:bg-white selection:text-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER */}
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={itemVariants}
                    className="mb-12 md:mb-20 text-center md:text-left border-b border-white/10 pb-8"
                >
                    <h1 className="text-4xl md:text-[56px] font-light tracking-wide mb-4">
                        Travel & <span className="font-normal">Photography</span>
                    </h1>
                    <p className="text-[18px] text-gray-400 font-light max-w-2xl mx-auto md:mx-0">
                        A curated visual diary capturing the intersection of architecture, urban landscapes, and human experience across India.
                    </p>
                </motion.div>

                {/* MASONRY GALLERY GRID */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    // CSS Columns trick for perfect Masonry layout
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    {travelPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            variants={itemVariants}
                            onClick={() => openLightbox(index)}
                            // break-inside-avoid prevents images from being cut across columns
                            className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-[#222222] bg-[#0a0a0a] break-inside-avoid shadow-lg transition-all duration-500 hover:border-gray-500`}
                        >
                            {/* Image */}
                            <div className={`w-full ${photo.aspectRatio} relative overflow-hidden bg-[#111]`}>
                                <img 
                                    src={photo.src} 
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            {/* Gradient Overlay & Text (Visible on Hover) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-[12px] md:text-[14px] font-bold tracking-widest text-[#aaaaaa] uppercase mb-1">
                                        {photo.location}
                                    </p>
                                    <h3 className="text-xl md:text-[24px] font-normal text-white drop-shadow-md">
                                        {photo.title}
                                    </h3>
                                </motion.div>
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
                            key={currentIndex} // Animate on image change
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
                        >
                            <img 
                                src={travelPhotos[currentIndex].src} 
                                alt={travelPhotos[currentIndex].title}
                                className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                            />
                            
                            {/* Caption */}
                            <div className="mt-6 text-center max-w-2xl w-full">
                                <h3 className="text-2xl md:text-[36px] font-normal text-white mb-2">
                                    {travelPhotos[currentIndex].title}
                                </h3>
                                <p className="text-sm md:text-[16px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                                    {travelPhotos[currentIndex].location}
                                </p>
                                <p className="text-[18px] font-light text-gray-300">
                                    {travelPhotos[currentIndex].desc}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default TravelGallery;