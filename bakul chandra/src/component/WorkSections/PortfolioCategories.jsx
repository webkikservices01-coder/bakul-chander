import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { portfolioCategories } from '../../data/portfolioCategories';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const ProjectCard = ({ project, onOpen }) => {
    const photoCount = project.gallery?.length || 1;
    return (
        <motion.button
            type="button"
            onClick={() => onOpen(project)}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 text-left cursor-pointer"
        >
            <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Expand hint */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2} />
            </div>

            {/* Photo count badge */}
            {photoCount > 1 && (
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] text-gray-200 font-light">
                    <Images className="w-3 h-3" strokeWidth={1.5} />
                    {photoCount}
                </div>
            )}

            <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm md:text-base font-normal text-white leading-snug line-clamp-2">
                    {project.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-gray-400 font-light">
                    <MapPin className="w-3 h-3 shrink-0" strokeWidth={1.5} />
                    {project.location}
                </p>
            </div>
        </motion.button>
    );
};

const ProjectLightbox = ({ project, categoryLabel, onClose }) => {
    const images = useMemo(
        () => (project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]),
        [project]
    );
    const [index, setIndex] = useState(0);

    const next = () => setIndex(i => (i + 1) % images.length);
    const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose, images.length]);

    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" strokeWidth={2} />
                </button>

                {/* Main image with nav arrows */}
                <div className="relative w-full aspect-[16/10] bg-black shrink-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            src={images[index]}
                            alt={project.title}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </AnimatePresence>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                aria-label="Previous photo"
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                            </button>
                            <button
                                onClick={next}
                                aria-label="Next photo"
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" strokeWidth={2} />
                            </button>
                            <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] text-gray-200 font-light">
                                {index + 1} / {images.length}
                            </div>
                        </>
                    )}
                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                    <div className="flex gap-2 px-6 md:px-8 pt-4 overflow-x-auto shrink-0" style={{ scrollbarWidth: 'none' }}>
                        {images.map((img, i) => (
                            <button
                                key={img}
                                onClick={() => setIndex(i)}
                                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-colors ${
                                    i === index ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}

                <div className="p-6 md:p-8 pt-4 overflow-y-auto">
                    <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium mb-2">
                        {categoryLabel}
                    </p>
                    <h3 className="text-xl md:text-2xl font-light text-white leading-snug mb-3">
                        {project.title}
                    </h3>
                    <p className="flex items-center gap-2 text-sm text-zinc-400 font-light">
                        <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                        {project.location}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const PortfolioCategories = () => {
    const [activeSlug, setActiveSlug] = useState(portfolioCategories[0].slug);
    const [openProject, setOpenProject] = useState(null);
    const activeCategory = portfolioCategories.find(c => c.slug === activeSlug);

    return (
        <section className="w-full bg-black text-white py-8 md:py-12 px-6 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-light flex items-center gap-3">
                            <span className="text-xl mt-1">•</span> Complete Project Portfolio
                        </h2>
                        <p className="text-sm text-zinc-500 font-light mt-2 max-w-xl">
                            Real, delivered work across Renascent Consultants — organized the way our practice is structured.
                        </p>
                    </div>
                    <motion.a
                        href="https://renascent.co.in/projects/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs md:text-sm font-medium uppercase tracking-widest whitespace-nowrap hover:bg-zinc-200 transition-colors shrink-0"
                    >
                        View Full Portfolio <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                    </motion.a>
                </div>

                {/* Category Tabs */}
                <div
                    className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-1 px-1"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {portfolioCategories.map((cat) => (
                        <button
                            key={cat.slug}
                            onClick={() => setActiveSlug(cat.slug)}
                            className={`relative shrink-0 px-4 py-2.5 rounded-full text-xs md:text-sm font-light whitespace-nowrap border transition-colors duration-300 ${
                                activeSlug === cat.slug
                                    ? 'text-black border-transparent'
                                    : 'text-zinc-400 border-white/10 hover:text-white hover:border-white/30'
                            }`}
                        >
                            {activeSlug === cat.slug && (
                                <motion.div
                                    layoutId="activePortfolioTab"
                                    className="absolute inset-0 bg-white rounded-full -z-10"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                />
                            )}
                            {cat.label}
                            <span className="ml-2 text-[10px] opacity-60">{cat.projects.length}</span>
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSlug}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
                    >
                        {activeCategory.projects.map((project, idx) => (
                            <ProjectCard
                                key={`${activeSlug}-${idx}`}
                                project={project}
                                onOpen={setOpenProject}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>

            <AnimatePresence>
                {openProject && (
                    <ProjectLightbox
                        project={openProject}
                        categoryLabel={activeCategory.label}
                        onClose={() => setOpenProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default PortfolioCategories;
