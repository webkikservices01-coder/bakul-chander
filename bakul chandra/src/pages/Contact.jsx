import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useLocation } from 'react-router-dom';
import PageHeroSection from '../component/PageHeroSection';

const clean = (v) => (!v || v.trim().toUpperCase() === 'VALUE' ? '' : v.trim());

function Contact() {
    const [searchParams, setSearchParams] = useSearchParams();
    const routerLocation = useLocation();
    const tabFromUrl = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState(tabFromUrl === 'call' ? 'call' : 'message');

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [autoFilled, setAutoFilled] = useState(false);
    const formRef = useRef(null);

    // Read form data from router state (passed by chatbot via navigate('/contact', { state: { formData } }))
    useEffect(() => {
        const data = routerLocation.state?.formData;
        if (!data) return;
        const filled = {
            name:    clean(data.name),
            email:   clean(data.email),
            subject: clean(data.subject),
            message: clean(data.message),
        };
        if (filled.name || filled.email) {
            setForm(filled);
            setAutoFilled(true);
            setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
        }
    }, [routerLocation.state]);

    useEffect(() => {
        if (tabFromUrl === 'call' || tabFromUrl === 'message') setActiveTab(tabFromUrl);
    }, [tabFromUrl]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    const handleChange = (e) => {
        setAutoFilled(false);
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white font-archivo flex flex-col">

            <PageHeroSection
                image="/about/about-hero.png"
                title="Contact"
                clastyle="grayscale-75"
            />

            <section className="flex-grow py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">

                    {/* Toggle */}
                    <div className="flex justify-center mb-16 md:mb-20">
                        <div className="flex items-center p-1.5 bg-[#111] rounded-full border border-white/5 shadow-inner relative">
                            <button
                                onClick={() => handleTabChange('message')}
                                className={`relative z-10 px-8 py-3 md:px-10 md:py-3.5 rounded-full text-sm md:text-base font-medium uppercase tracking-widest transition-colors duration-300 ${activeTab === 'message' ? 'text-black' : 'text-zinc-500 hover:text-zinc-300'}`}
                            >
                                {activeTab === 'message' && (
                                    <motion.div layoutId="contactTabBg" className="absolute inset-0 bg-white rounded-full -z-10 shadow-md" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                                )}
                                Send Message
                            </button>
                            <button
                                onClick={() => handleTabChange('call')}
                                className={`relative z-10 px-8 py-3 md:px-10 md:py-3.5 rounded-full text-sm md:text-base font-medium uppercase tracking-widest transition-colors duration-300 ${activeTab === 'call' ? 'text-black' : 'text-zinc-500 hover:text-zinc-300'}`}
                            >
                                {activeTab === 'call' && (
                                    <motion.div layoutId="contactTabBg" className="absolute inset-0 bg-white rounded-full -z-10 shadow-md" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                                )}
                                Book a Call
                            </button>
                        </div>
                    </div>

                    <div className="min-h-[600px]">
                        <AnimatePresence mode="wait">

                            {/* Message Form */}
                            {activeTab === 'message' && (
                                <motion.div
                                    key="message"
                                    ref={formRef}
                                    variants={tabVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl"
                                >
                                    <div className="text-center mb-10">
                                        <h2 className="text-2xl md:text-3xl font-light mb-3">Let's Discuss Your Project</h2>
                                        <p className="text-zinc-500 font-light">Fill out the form below and our team will get back to you shortly.</p>
                                    </div>

                                    {/* Auto-fill notice */}
                                    <AnimatePresence>
                                        {autoFilled && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="mb-6 flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-300"
                                            >
                                                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Form filled by AI Assistant — review and send when ready.
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-zinc-400 pl-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className={`w-full bg-[#111] border rounded-xl px-4 py-4 text-white font-light placeholder:text-zinc-700 focus:outline-none transition-colors ${autoFilled && form.name ? 'border-white/20' : 'border-white/5 focus:border-white/20'}`}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-zinc-400 pl-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className={`w-full bg-[#111] border rounded-xl px-4 py-4 text-white font-light placeholder:text-zinc-700 focus:outline-none transition-colors ${autoFilled && form.email ? 'border-white/20' : 'border-white/5 focus:border-white/20'}`}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-zinc-400 pl-1">Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="Architecture Consultation"
                                                className={`w-full bg-[#111] border rounded-xl px-4 py-4 text-white font-light placeholder:text-zinc-700 focus:outline-none transition-colors ${autoFilled && form.subject ? 'border-white/20' : 'border-white/5 focus:border-white/20'}`}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-zinc-400 pl-1">Message</label>
                                            <textarea
                                                rows="5"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project..."
                                                className={`w-full bg-[#111] border rounded-xl px-4 py-4 text-white font-light placeholder:text-zinc-700 focus:outline-none transition-colors resize-none ${autoFilled && form.message ? 'border-white/20' : 'border-white/5 focus:border-white/20'}`}
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="button"
                                            className="w-full bg-white text-black py-4 rounded-xl text-sm uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors mt-4"
                                        >
                                            Send Message
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}

                            {/* Calendly Embed */}
                            {activeTab === 'call' && (
                                <motion.div
                                    key="call"
                                    variants={tabVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-[#0A0A0A] p-4 md:p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col items-center"
                                >
                                    <div className="text-center mb-6">
                                        <h2 className="text-2xl md:text-3xl font-light mb-3">Schedule a Meeting</h2>
                                        <p className="text-zinc-500 font-light">Choose a time that works best for you.</p>
                                    </div>
                                    <div className="w-full h-[600px] rounded-xl overflow-hidden bg-white/5 relative">
                                        <iframe
                                            src="https://calendly.com/your-calendly-link"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            title="Calendly Scheduling"
                                            className="absolute inset-0"
                                        />
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contact;
