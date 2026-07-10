import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectData'; // Data import
import PageHeroSection from '../component/PageHeroSection';

// Icon Helper for Table
const getIcon = (label) => {
    switch (label) {
        case 'Client': return '👤';
        case 'Location': return '📍';
        case 'Size': return '📏';
        case 'Type': return '🏗️';
        case 'Category': return '🏥';
        case 'Services': return '🛠️';
        case 'Year': return '📅';
        default: return '✨';
    }
};

const ProjectDetailPage = () => {
    const { slug } = useParams(); // URL se slug nikalna
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Data me slug find karo
        const foundProject = projectsData.find(p => p.slug === slug);
        if (foundProject) {
            setProject(foundProject);
        } else {
            // Agar slug galat hai toh wapas bhej do
            navigate('/works');
        }
    }, [slug, navigate]);

    if (!project) return <div className="pt-32 text-center text-white min-h-screen bg-black">Loading...</div>;

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <>
            <PageHeroSection
                image={project.heroImage}
                title={project.title}
            />
            <section className="w-full bg-[#050505] text-white py-24 px-6 md:px-12 font-archivo min-h-screen pt-32">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl max-w-5xl  mx-auto md:text-5xl font-light text-center uppercase tracking-widest"
                    >
                        {project.title}
                    </motion.h1>

                    {/* --- 1. Project Description --- */}
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* --- 2. Project Info Table --- */}
                    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-3xl mx-auto">
                        {project.info.map((item, index) => (
                            <motion.div key={index} variants={fadeInUp} className={`flex justify-between items-center py-4 md:py-5 border-b border-white/10 group ${index === 0 ? 'border-t' : ''}`}>
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <span className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                                        {getIcon(item.label)}
                                    </span>
                                    <span className="text-sm md:text-base font-normal tracking-wide">{item.label}</span>
                                </div>
                                <div className="text-right text-sm md:text-base font-light text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 capitalize">
                                    {item.value}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* --- 3. Project Gallery (Asymmetric Grid) --- */}
                    <div className="space-y-8">
                        <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-xl md:text-2xl font-light flex items-center gap-3">
                            <span className="text-lg mt-1 text-zinc-500">•</span> Project Gallery
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                            {project.gallery.map((img, idx) => {
                                let colSpanClass = "md:col-span-6";
                                if (idx === 0) colSpanClass = "md:col-span-7";
                                if (idx === 1) colSpanClass = "md:col-span-5";
                                if (idx === 2) colSpanClass = "md:col-span-5";
                                if (idx === 3) colSpanClass = "md:col-span-7";

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className={`relative overflow-hidden rounded-md group bg-[#111] border border-white/5 aspect-[4/3] md:aspect-auto ${colSpanClass}`}
                                    >
                                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </> // <-- Yahan syntax theek kar diya hai
    );
};

export default ProjectDetailPage;