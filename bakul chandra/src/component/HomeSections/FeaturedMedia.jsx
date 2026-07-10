import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';

const FeaturedMedia = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animDuration, setAnimDuration] = useState(0.8);

    const mediaItems = [
        { 
            id: 1, 
            src: "/home/Featured/Featured1_result.webp", 
            title: "Window & Façade Magazine", 
            desc: "The Intelligent Envelope – Redefining the Future of Façade and Fenestration (Nov-Dec 2025).", 
            link: "https://e.issuu.com/embed.html?d=window_and_facade_magazine_india_november-decembe&u=wfm-india" 
        },
        { 
            id: 2, 
            src: "/home/Featured/Featured2_result.webp", 
            title: "The Hindu", 
            desc: "Designing the new arena: the rise of sports infrastructure in India.", 
            link: "https://www.thehindu.com/life-and-style/homes-and-gardens/designing-the-new-arena-the-rise-of-sports-infrastructure-in-india/article70590826.ece#google_vignette" 
        },
        { 
            id: 3, 
            src: "/home/Featured/Featured3_result.webp", 
            title: "Architecture + Design", 
            desc: "From Aspiration to Inspiration: My journey to the cover of Architecture + Design Magazine.", 
            link: "https://www.linkedin.com/pulse/from-aspiration-inspiration-my-journey-cover-design-magazine-chandra-oebhc/" 
        },
        { 
            id: 4, 
            src: "/home/Featured/Featured4_result.webp", 
            title: "Medgate Today", 
            desc: "Top Healthcare Infrastructure Companies: Coverage on Renascent Consultants.", 
            link: "https://medgatetoday.com/top-healthcare-infrastructure-companies/" 
        },
        { 
            id: 5, 
            src: "/home/Featured/Featured5_result.webp", 
            title: "Healthcare Radius", 
            desc: "Special Coverage on Renascent Consultants (February 2024).", 
            link: "https://www.healthcareradius.in/magazine-issue/february-2024" 
        },
        { 
            id: 6, 
            src: "/home/Featured/Featured6_result.webp", 
            title: "Architect & Interiors India", 
            desc: "Take a leap into the future of healthcare with 1.5 million sq ft of patient-centric ecosystem.", 
            link: "https://www.architectandinteriorsindia.com/projects/take-a-leap-into-the-future-of-healthcare-with-1-5-million-sq-ft-of-patient-centric-ecosystem-in-uttarakhand" 
        },
        { 
            id: 7, 
            src: "/home/Featured/Featured7_result.webp", 
            title: "Healthcare Radius Cover", 
            desc: "Cover Story on 'Addressing India’s Rural Care Gap' featuring Bakul Chandra.", 
            link: "https://www.healthcareradius.in/emagazine" 
        },
        { 
            id: 8, 
            src: "/home/Featured/Featured8_result.webp", 
            title: "WFM Media", 
            desc: "Window & Facade Magazine India Cover Story featuring Bakul Chandra (Mar-Apr 2024).", 
            link: "https://wfmmedia.com/magazine/window-facade-magazine-india-mar-apr-2024/" 
        },
        { 
            id: 9, 
            src: "/home/Featured/Featured9_result.webp", 
            title: "Commercial Design India", 
            desc: "Rapid fire round: Insights into design and architecture strategy.", 
            link: "https://www.commercialdesignindia.com/people/rapid-fire-round-with-bakul-chandra-co-founder-mentor-design-strategist-insights-into-design-inspiration-and-mentoring-2" 
        },
        { 
            id: 10, 
            src: "/home/Featured/Featured10_result.webp", 
            title: "ACE Update Magazine", 
            desc: "Sustainable Healthcare Design of Graphic Era Hospital.", 
            link: "https://aceupdate.com/sustainable-healthcare-design-of-graphic-era-hospital/" 
        },
        { 
            id: 11, 
            src: "/home/Featured/Featured11_result.webp", 
            title: "WFM Media Interview", 
            desc: "In-depth interview on Cutting-Edge Cladding Solutions and Responsible Architecture (Jul-Aug 2024).", 
            link: "https://wfmmedia.com/magazine/window-facade-magazine-india-jul-aug-2024/" 
        },
        { 
            id: 12, 
            src: "/home/Featured/Featured12_result.webp", 
            title: "Archello", 
            desc: "Graphic Era Hospital feature by Renascent Consultants.", 
            link: "https://archello.com/project/graphic-era-hospital" 
        }
    ];

    const displayItems = [...mediaItems, ...mediaItems, ...mediaItems];

    useEffect(() => {
        const updateLayout = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setActiveIndex(mediaItems.length);
        };
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, [mediaItems.length]);

    const handleAnimationComplete = () => {
        if (activeIndex >= mediaItems.length * 2) {
            setAnimDuration(0); 
            setActiveIndex(mediaItems.length); 
        } else if (activeIndex <= mediaItems.length - 1) {
            setAnimDuration(0);
            setActiveIndex(mediaItems.length * 2 - 1);
        } else if (animDuration === 0) {
            setAnimDuration(0.8); 
        }
    };

    const handlePanEnd = (event, info) => {
        if (!isMobile) return; 
        
        const swipeThreshold = 30; 
        
        if (info.offset.x < -swipeThreshold) {
            setAnimDuration(0.8);
            setActiveIndex((prev) => prev + 1);
        } else if (info.offset.x > swipeThreshold) {
            setAnimDuration(0.8);
            setActiveIndex((prev) => prev - 1);
        }
    };

    const getTransform = () => {
        if (isMobile) {
            return `calc(50vw - 140px - ${activeIndex * 296}px)`;
        } else {
            return `calc(50vw - 316px - ${activeIndex * 332}px)`;
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    return (
        <section className="relative w-full bg-black text-white py-0 md:py-10 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto mb-10 md:mb-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 px-6 md:px-0">
                    <h2 className="text-3xl md:text-[36px] font-light flex items-center gap-3">
                        <span className="text-2xl md:text-[36px] mt-1 text-gray-400">•</span> Featured In
                    </h2>
                    <p className="text-lg md:text-[18px] font-light text-gray-400 max-w-sm md:text-right font-sans">
                        Latest Magazine Insights where I featured in
                    </p>
                </div>
            </div>

            <div className="relative z-10 w-full overflow-hidden touch-pan-y">
                <motion.div
                    onPanEnd={handlePanEnd}
                    animate={{ x: getTransform() }}
                    transition={{ 
                        duration: animDuration, 
                        ease: animDuration === 0 ? "linear" : [0.25, 1, 0.5, 1] 
                    }}
                    onAnimationComplete={handleAnimationComplete}
                    className={`flex w-max gap-4 md:gap-8 ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''}`}
                >
                    {displayItems.map((item, index) => {
                        const isActiveCard = isMobile 
                            ? index === activeIndex 
                            : index === activeIndex || index === activeIndex + 1;

                        return (
                            <div
                                key={`${item.id}-${index}`}
                                className={`
                                    group relative rounded-3xl overflow-hidden shrink-0 border border-white/10
                                    transition-all duration-700 w-[280px] md:w-[300px] aspect-[3/4]
                                    ${isActiveCard 
                                        ? 'opacity-100 scale-100 blur-none' 
                                        : 'opacity-30 scale-[0.85] blur-[2px]'
                                    }
                                `}
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-100 group-hover:grayscale-0 pointer-events-none"
                                />

                                {/* =========================================
                                    FIXED: SEPARATED BLUR LAYER 
                                    Isme slide (translate) nahi hai, sirf OPACITY hai. 
                                    Isliye hover/slide karte hi instant blur aayega!
                                    =========================================
                                */}
                                <div className={`
                                    absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out z-0
                                    ${isMobile 
                                        ? (isActiveCard ? 'opacity-100' : 'opacity-0')
                                        : 'opacity-0 group-hover:opacity-100'
                                    }
                                `}>
                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                                    {/* Masked Blur */}
                                    <div className="absolute inset-0 backdrop-blur-lg 
                                        [mask-image:linear-gradient(to_bottom,transparent_10%,black_65%)] 
                                        [-webkit-mask-image:linear-gradient(to_bottom,transparent_10%,black_65%)]" 
                                    />
                                </div>

                                {/* =========================================
                                    SEPARATED TEXT LAYER
                                    Isme sirf Text hai, jo smoothly slide up hoke aayega.
                                    =========================================
                                */}
                                <div className={`
                                    absolute inset-0 flex flex-col justify-end p-6 md:p-8 
                                    transition-all duration-500 overflow-hidden z-10 ease-out
                                    ${isMobile 
                                        ? (isActiveCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
                                        : 'opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'
                                    }
                                `}>
                                    <motion.div
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate={(isMobile ? isActiveCard : true) ? "visible" : "hidden"}
                                    >
                                        <h3 className="text-xl md:text-[24px] font-normal mb-2 leading-tight drop-shadow-md">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs md:text-[14px] text-zinc-300 mb-4 font-light line-clamp-3 drop-shadow-sm">
                                            {item.desc}
                                        </p>
                                        <div className="pt-2 relative z-50">
                                            <div onPointerDown={(e) => e.stopPropagation()}>
                                                <Button text="Read Feature" link={item.link} size="sm" target="_blank" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* 5s PROGRESS BAR PAGINATION */}
            <div className="flex flex-col items-center mt-12 md:mt-16 relative z-10 px-6">
                <div className="w-full max-w-[200px] md:max-w-lg h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div
                        key={activeIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        onAnimationComplete={() => {
                            if (animDuration !== 0) {
                                setActiveIndex((prev) => prev + 1);
                            }
                        }}
                        className="absolute top-0 left-0 h-full bg-white rounded-full shadow-[0_0_10px_#fff]"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturedMedia;