import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { buildSystemPrompt } from '../data/websiteKnowledge';
import { projectsData } from '../data/projectData';

const STORAGE_KEY  = 'bakul_chat_session';
const LEADS_KEY    = 'bakul_leads';
const API_KEY      = import.meta.env.VITE_GROQ_API_KEY;

// ── Update these two with real values ────────────────────────────────────────
const WHATSAPP_NUMBER  = '917728991'; // 91 + 10-digit mobile (no + or -)
const CALENDLY_LINK    = 'https://calendly.com/your-calendly-link';
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_MESSAGE = {
    role: 'bot',
    content: "Hello! I'm Bakul Chandra's AI Assistant. Ask me anything about his work, biography, projects, or how to get in touch.",
};

// ── Lead capture ─────────────────────────────────────────────────────────────
const saveLead = (data) => {
    try {
        const leads = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
        const alreadyExists = leads.some(l => l.email && l.email === data.email);
        if (!alreadyExists) {
            leads.push({ ...data, id: Date.now(), timestamp: new Date().toISOString(), page: window.location.pathname });
            localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
        }
    } catch (_) {}
};

// ── Session history ──────────────────────────────────────────────────────────
const loadHistory = () => {
    // Clear history on browser refresh (performance API detects reload)
    const navType = performance.getEntriesByType?.('navigation')[0]?.type;
    if (navType === 'reload') {
        sessionStorage.removeItem(STORAGE_KEY);
        return [INITIAL_MESSAGE];
    }
    try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
    } catch (_) {}
    return [INITIAL_MESSAGE];
};

const saveHistory = (msgs) => {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(msgs.slice(-40)));
    } catch (_) {}
};

// ── Parse AI response ────────────────────────────────────────────────────────
const parseResponse = (text) => {
    const redirectMatch = text.match(/\[\[REDIRECT:([^\]]+)\]\]/);
    const fillMatch     = text.match(/\[\[FILL_FORM:([\s\S]*?)\]\]/);
    const projectMatch  = text.match(/\[\[SHOW_PROJECT:([^\]]+)\]\]/);

    const clean = text
        .replace(/\[\[REDIRECT:[^\]]+\]\]/g, '')
        .replace(/\[\[FILL_FORM:[\s\S]*?\]\]/g, '')
        .replace(/\[\[SHOW_PROJECT:[^\]]+\]\]/g, '')
        .trim();

    // Parse form data (JSON with manual fallback)
    let formData = null;
    if (fillMatch) {
        try {
            formData = JSON.parse(fillMatch[1].trim());
        } catch (_) {
            const raw = fillMatch[1];
            const get = (key) => { const m = raw.match(new RegExp(`"${key}"\\s*:\\s*"([^"]*)"`, 'i')); return m ? m[1] : ''; };
            const name = get('name'), email = get('email');
            if (name || email) formData = { name, email, subject: get('subject'), message: get('message') };
        }
    }

    // Parse project slugs
    const projectSlugs = projectMatch
        ? projectMatch[1].split(',').map(s => s.trim()).filter(Boolean)
        : [];

    return { reply: clean, redirectTo: redirectMatch?.[1]?.trim() ?? null, formData, projectSlugs };
};

// Build conversation history for AI (skip project/lead card messages)
const buildHistory = (messages) =>
    messages
        .filter(m => m.role === 'bot' || m.role === 'user')
        .slice(-6)
        .map(m => ({
            role: m.role === 'bot' ? 'assistant' : 'user',
            content: m.content.replace(/\[\[[\s\S]*?\]\]/g, '').trim(),
        }));

// ── Groq API call ─────────────────────────────────────────────────────────────
const callGroq = async (userText, history, systemPrompt) => {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
        body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            max_tokens: 500,
            messages: [{ role: 'system', content: systemPrompt }, ...history, { role: 'user', content: userText }],
        }),
    });
    if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e?.error?.message || `API ${res.status}`); }
    return (await res.json()).choices[0].message.content;
};

// ── Sub-components ────────────────────────────────────────────────────────────
const MessageContent = ({ text }) => {
    const parts = text.split(/(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[a-z]{2,}|\+?\d[\d\s\-]{7,}\d)/gi);
    return (
        <>
            {parts.map((part, i) => {
                if (/^https?:\/\//i.test(part))
                    return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-blue-400 hover:text-blue-300 break-all">{part}</a>;
                if (/^[\w.+-]+@[\w-]+\.[a-z]{2,}$/i.test(part))
                    return <a key={i} href={`mailto:${part}`} className="underline underline-offset-2 text-blue-400 hover:text-blue-300">{part}</a>;
                if (/^\+?\d[\d\s\-]{7,}\d$/.test(part.trim()))
                    return <a key={i} href={`tel:${part.replace(/[\s-]/g, '')}`} className="underline underline-offset-2 text-blue-400 hover:text-blue-300">{part}</a>;
                return <span key={i}>{part}</span>;
            })}
        </>
    );
};

const ProjectCard = ({ slug, onNavigate }) => {
    const unique = projectsData.filter((p, i, a) => a.findIndex(x => x.id === p.id) === i);
    const project = unique.find(p => p.slug === slug);
    if (!project) return null;
    const type = project.info.find(i => i.label === 'Type')?.value ?? 'Architecture';
    const year = project.info.find(i => i.label === 'Year')?.value ?? '';
    return (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#2a2a2a] w-full max-w-[260px]">
            <div className="h-32 overflow-hidden">
                <img src={project.src} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-3 space-y-2">
                <div>
                    <p className="text-white text-sm font-medium leading-snug">{project.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{project.location}</p>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                    <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">{type}</span>
                    {year && <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">{year}</span>}
                </div>
                <button onClick={() => onNavigate(`/projects/${slug}`)}
                    className="w-full text-xs bg-white text-black py-1.5 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    View Project →
                </button>
            </div>
        </motion.div>
    );
};

// Lead captured badge (shown inline in chat)
const LeadBadge = ({ name, email }) => (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-[11px] text-green-400/80 bg-green-500/5 border border-green-500/15 rounded-lg px-3 py-2 max-w-[85%]">
        <span className="text-green-400">✓</span>
        <span>Lead saved{name ? ` — ${name}` : ''}{email ? ` (${email})` : ''}</span>
    </motion.div>
);

const SUGGESTIONS = [
    "Who is Bakul Chandra?",
    "Show me his projects",
    "I want to send a message",
    "What are his skills?",
];

// ═════════════════════════════════════════════════════════════════════════════
const ChatbotWidget = () => {
    const [isOpen, setIsOpen]               = useState(false);
    const [messages, setMessages]           = useState(loadHistory);
    const [input, setInput]                 = useState('');
    const [isLoading, setIsLoading]         = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const messagesEndRef       = useRef(null);
    const messagesContainerRef = useRef(null);
    const inputRef             = useRef(null);
    const navigate             = useNavigate();
    const location             = useLocation();

    // Always scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Scroll to bottom and focus when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
                inputRef.current?.focus();
            }, 300);
        }
    }, [isOpen]);

    useEffect(() => { saveHistory(messages); }, [messages]);
    useEffect(() => { if (messages.some(m => m.role === 'user')) setShowSuggestions(false); }, [messages]);

    // Auto-focus input after bot replies (loading ends)
    useEffect(() => {
        if (!isLoading && isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isLoading, isOpen]);

    const addMsg = useCallback((msg) => setMessages(prev => [...prev, msg]), []);

    const sendMessage = useCallback(async (text) => {
        const userText = (text || input).trim();
        if (!userText || isLoading) return;

        if (!API_KEY || API_KEY === 'your_api_key_here') {
            addMsg({ role: 'user', content: userText });
            addMsg({ role: 'bot', content: '⚠️ API key missing. Add VITE_GROQ_API_KEY in .env' });
            setInput('');
            return;
        }

        addMsg({ role: 'user', content: userText });
        setInput('');
        setIsLoading(true);
        setShowSuggestions(false);

        try {
            const rawReply = await callGroq(userText, buildHistory(messages), buildSystemPrompt(location.pathname));
            const { reply, redirectTo, formData, projectSlugs } = parseResponse(rawReply);

            if (reply) addMsg({ role: 'bot', content: reply });

            // Project cards
            if (projectSlugs.length > 0) {
                addMsg({ role: 'projects', slugs: projectSlugs });
            }

            // Form fill + lead capture
            if (formData) {
                saveLead({ name: formData.name, email: formData.email, subject: formData.subject, message: formData.message, source: 'form_fill' });
                addMsg({ role: 'lead', name: formData.name, email: formData.email });
                if (!reply) addMsg({ role: 'bot', content: '✓ Opening the contact form now...' });
                // Pass form data directly via router state — no timing issues
                setTimeout(() => navigate('/contact', { state: { formData } }), 900);
                return;
            }

            // Email mentioned in conversation → partial lead
            const emailInText = userText.match(/[\w.+-]+@[\w-]+\.[a-z]{2,}/i);
            if (emailInText) saveLead({ email: emailInText[0], source: 'chat_mention' });

            // Redirect
            if (redirectTo) {
                const targetPath = redirectTo.split('?')[0];
                if (targetPath !== location.pathname) setTimeout(() => navigate(redirectTo), 800);
            }
        } catch (err) {
            console.error('Chatbot error:', err);
            const msg = err.message || '';
            if (msg.includes('429') || msg.toLowerCase().includes('rate'))
                addMsg({ role: 'bot', content: "Rate limit reached. Please wait 30 seconds and try again." });
            else if (msg.includes('401') || msg.toLowerCase().includes('auth'))
                addMsg({ role: 'bot', content: "⚠️ API key invalid. Please check VITE_GROQ_API_KEY in .env and restart the dev server." });
            else
                addMsg({ role: 'bot', content: `Error: ${msg || 'Unknown error'}. Please try again.` });
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading, messages, location.pathname, navigate, addMsg]);

    const handleSubmit = (e) => { e.preventDefault(); sendMessage(); };

    // WhatsApp pre-filled message
    const waMessage = encodeURIComponent("Hi, I visited Bakul Chandra's portfolio website and would like to connect.");
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-archivo">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.94 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="absolute bottom-[72px] right-0 w-80 sm:w-[380px] bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col"
                        style={{ maxHeight: 'calc(100vh - 120px)', height: '560px' }}
                    >
                        {/* ── Header ── */}
                        <div className="bg-[#111] border-b border-[#2a2a2a] px-4 py-3 flex items-center justify-between flex-shrink-0 rounded-t-2xl">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium text-white select-none">BC</div>
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#111]" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium leading-none">Webkik AI Assistant</p>
                                    <p className="text-gray-500 text-[11px] mt-0.5">Bakul Chandra's Website</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-white transition-colors p-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* ── Quick Actions: WhatsApp + Book a Call ── */}
                        <div className="px-3 py-2 bg-[#0d0d0d] border-b border-[#1a1a1a] flex gap-2 flex-shrink-0">
                            <a href={waLink} target="_blank" rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 bg-[#111] border border-[#252525] rounded-xl py-2 text-[11px] text-gray-400 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/5 transition-all group">
                                {/* WhatsApp icon */}
                                <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-green-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                WhatsApp
                            </a>
                            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 bg-[#111] border border-[#252525] rounded-xl py-2 text-[11px] text-gray-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
                                {/* Calendar icon */}
                                <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book a Call
                            </a>
                        </div>

                        {/* ── Messages ── */}
                        <div ref={messagesContainerRef}
                            className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3 chat-scroll"
                            style={{ overscrollBehavior: 'contain' }}
                            onWheel={(e) => e.stopPropagation()}>

                            {messages.map((msg, i) => {
                                // Project cards
                                if (msg.role === 'projects') {
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            {msg.slugs.map(slug => (
                                                <ProjectCard key={slug} slug={slug} onNavigate={navigate} />
                                            ))}
                                        </div>
                                    );
                                }
                                // Lead badge
                                if (msg.role === 'lead') {
                                    return <div key={i}><LeadBadge name={msg.name} email={msg.email} /></div>;
                                }
                                // Normal bot / user message
                                return (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                                            msg.role === 'user'
                                                ? 'bg-white text-black rounded-br-sm font-light'
                                                : 'bg-[#151515] border border-[#2a2a2a] text-gray-200 rounded-bl-sm font-light'
                                        }`}>
                                            {msg.role === 'bot' ? <MessageContent text={msg.content} /> : msg.content}
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {isLoading && (
                                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                                    <div className="bg-[#151515] border border-[#2a2a2a] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                                        {[0, 0.15, 0.3].map((delay, i) => (
                                            <motion.span key={i} className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                                animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay }} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* ── Suggestion Chips ── */}
                        <AnimatePresence>
                            {showSuggestions && !isLoading && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                    className="px-3 pb-2 pt-2 flex flex-wrap gap-1.5 flex-shrink-0 border-t border-[#1a1a1a]">
                                    {SUGGESTIONS.map((s) => (
                                        <button key={s} onClick={() => sendMessage(s)}
                                            className="text-[11px] text-gray-400 border border-[#2a2a2a] rounded-full px-3 py-1 hover:border-gray-500 hover:text-white transition-all bg-[#111]">
                                            {s}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* ── Input ── */}
                        <form onSubmit={handleSubmit} className="px-3 pt-2.5 pb-2 bg-[#111] border-t border-[#2a2a2a] flex gap-2 flex-shrink-0">
                            <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask anything about Bakul Chandra..."
                                disabled={isLoading}
                                className="flex-1 bg-black border border-[#2a2a2a] text-white text-sm px-4 py-2.5 rounded-xl focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-600 disabled:opacity-50" />
                            <button type="submit" disabled={isLoading || !input.trim()}
                                className="bg-white text-black px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors disabled:opacity-40 flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>

                        {/* ── Powered by ── */}
                        <div className="bg-[#111] rounded-b-2xl pb-2.5 flex justify-center flex-shrink-0">
                            <p className="text-[10px] text-gray-600 tracking-wide">
                                Powered by <span className="text-gray-500 font-medium">Webkik Services</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Toggle Button ── */}
            <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.93 }} onClick={() => setIsOpen(o => !o)}
                className="w-14 h-14 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center border border-white/10 relative">
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }} className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    ) : (
                        <motion.svg key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </motion.svg>
                    )}
                </AnimatePresence>
                {!isOpen && <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />}
            </motion.button>

            <style>{`
                .chat-scroll { scrollbar-width: thin; scrollbar-color: #3a3a3a transparent; }
                .chat-scroll::-webkit-scrollbar { width: 5px; }
                .chat-scroll::-webkit-scrollbar-track { background: transparent; margin: 4px 0; }
                .chat-scroll::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 6px; }
                .chat-scroll::-webkit-scrollbar-thumb:hover { background: #555; }
            `}</style>
        </div>
    );
};

export default ChatbotWidget;
