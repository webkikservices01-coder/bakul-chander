import React, { useState, useEffect, useMemo } from 'react';
import AutoSlider, { SliderCard } from '../AutoSlider';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { portfolioCategories } from '../../data/portfolioCategories';

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
                className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
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
                            <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] text-zinc-200 font-light">
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
                                className={`relative w-16 h-12 overflow-hidden shrink-0 border-2 transition-colors ${
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

const ALL_PROJECTS_CATEGORY = {
    slug: 'all',
    label: 'All Projects',
    projects: portfolioCategories.flatMap((cat) =>
        cat.projects.map((project) => ({ ...project, categoryLabel: cat.label }))
    ),
};

const tabCategories = [ALL_PROJECTS_CATEGORY, ...portfolioCategories];

const PortfolioCategories = () => {
    const [activeSlug, setActiveSlug] = useState(ALL_PROJECTS_CATEGORY.slug);
    const [openProject, setOpenProject] = useState(null);
    const activeCategory = tabCategories.find(c => c.slug === activeSlug);


    return (
        <section className="w-full bg-black text-white py-8 md:py-12 px-5 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Button comes right after the page heading (banner) */}
                <div className="mb-6">
                    <motion.a
                        href="https://renascent.co.in/projects/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs md:text-sm font-medium uppercase tracking-widest whitespace-nowrap hover:bg-zinc-200 transition-colors"
                    >
                        View Full Portfolio <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                    </motion.a>
                </div>

                {/* Category Tabs — auto-scrolling marquee */}
                <div className="relative mb-6 overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                    <div className="flex w-max gap-2 py-1 animate-[portfolio-marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
                        {[...tabCategories, ...tabCategories].map((cat, i) => (
                            <button
                                key={`${cat.slug}-${i}`}
                                onClick={() => setActiveSlug(cat.slug)}
                                className={`relative shrink-0 px-4 py-2.5 rounded-full text-xs md:text-sm font-light whitespace-nowrap border transition-colors duration-300 ${
                                    activeSlug === cat.slug
                                        ? 'bg-white text-black border-transparent'
                                        : 'text-zinc-400 border-white/10 hover:text-white hover:border-white/30'
                                }`}
                            >
                                {cat.label}
                                <span className="ml-2 text-[10px] opacity-60">{cat.projects.length}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes portfolio-marquee {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                ` }} />

                {/* Projects: auto-sliding cards */}
                <p className="text-sm font-light mb-3">
                    {activeCategory.label} · {activeCategory.projects.length} projects
                </p>
                <AutoSlider
                    key={activeSlug}
                    items={activeCategory.projects}
                    getKey={(project, idx) => `${activeSlug}-${idx}`}
                    renderItem={(project) => (
                        <SliderCard
                            image={project.image}
                            title={project.title}
                            meta={project.location}
                            onClick={() => setOpenProject(project)}
                        />
                    )}
                />

            </div>

            <AnimatePresence>
                {openProject && (
                    <ProjectLightbox
                        project={openProject}
                        categoryLabel={openProject.categoryLabel || activeCategory.label}
                        onClose={() => setOpenProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default PortfolioCategories;
