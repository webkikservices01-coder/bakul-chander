// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//     const fullName = "Bakul Chandra";
//     const [typedName, setTypedName] = useState("");
//     const [isTypingDone, setIsTypingDone] = useState(false);

    // const subheadings = [
    //     "Architectural Design Strategist & Mentor",
    //     "Founding Partner, Renascent Consultants",
    //     "Future-ready Healthcare & Institutional Environments through Strategy, Sustainability & Systems Thinking"
    // ];
//     const subheadings = [
//         "Design is not decoration. It is decision-making made visible",
//     ];
//     const [index, setIndex] = useState(0);

//     const menuItems = [
//         { name: "Biography", path: "/biography" },
//         { name: "Works & Portfolio", path: "/works-&-portfolio" },
//         { name: "Media", path: "/media" },
//         { name: "Career & Achievements", path: "/career-&-achievements" },
//         { name: "Awards & Recognition", path: "/awards-&-recognition" },
//         { name: "Travel & Photography", path: "/travel-&-photography" },
//         { name: "Quotations", path: "/quotations" },
//         { name: "Thoughts in Prose", path: "/thoughts-in-prose" },
//         { name: "Contact", path: "/contact" }
//     ];

//     useEffect(() => {
//         let currentIndex = 0;
//         const typingSpeed = 180; 

//         const typingInterval = setInterval(() => {
//             if (currentIndex <= fullName.length) {
//                 setTypedName(fullName.slice(0, currentIndex));
//                 currentIndex++;
//             } else {
//                 clearInterval(typingInterval);
//                 setIsTypingDone(true); 
//             }
//         }, typingSpeed);

//         return () => clearInterval(typingInterval);
//     }, []);

//     useEffect(() => {
//         if (!isTypingDone) return;
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % subheadings.length);
//         }, 3500); 
//         return () => clearInterval(timer);
//     }, [subheadings.length, isTypingDone]);


//     const contentVariants = {
//         hidden: { opacity: 0, pointerEvents: "none" },
//         visible: {
//             opacity: 1,
//             pointerEvents: "auto",
//             transition: { duration: 1 } 
//         }
//     };

//     const navContainerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { delayChildren: 0.3, staggerChildren: 0.1 }
//         }
//     };

//     const navItemVariants = {
//         hidden: { opacity: 0, y: 15 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
//     };

//     return (
//         <div
//             className="relative h-[100dvh] w-full bg-black text-white flex flex-col md:flex-row overflow-hidden"
//             style={{ fontFamily: '"Archivo", sans-serif' }}
//         >
//             {/* --- IMAGE CONTAINER --- */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.2 } }}
//                 className="absolute inset-0 z-0 md:relative md:w-1/2 md:order-2"
//             >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-10 md:hidden"></div>
//                 <img
//                     src="/home/hero-banner2.png"
//                     alt="Bakul Chandra Portrait"
//                     className="w-full h-full object-cover object-center md:object-right-top relative z-0"
//                 />
//             </motion.div>

//             {/* --- TEXT & NAVIGATION CONTAINER --- */}
//             <div className="relative z-10 flex-1 flex flex-col justify-end md:justify-center px-6 md:px-12 pb-10 pt-20 md:py-16 md:w-1/2 md:order-1">
//                 <div className="max-w-3xl">
                    
//                     <div className="h-[90px] sm:h-[80px] md:h-[50px] flex items-end mb-6"> 
//                         <AnimatePresence mode="wait">
//                             <motion.p
//                                 key={index}
//                                 initial={{ opacity: 0, y: 15 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -15 }}
//                                 transition={{ duration: 0.8, ease: "easeInOut" }} 
//                                 className="text-base sm:text-lg md:text-xl font-light text-zinc-300 max-w-3xl italic line-clamp-3 md:line-clamp-none"
//                             >
//                                 {subheadings[index]}
//                             </motion.p>
//                         </AnimatePresence>
//                     </div>
                    
//                     {/* --- MAIN NAME WITH CANELA FONT --- */}
//                     {/* Yahan 'font-canela' aur 'italic' add kiya hai */}
//                     <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-8xl tracking-tight font-playfair italic font-light leading-tight text-white">
//                         {typedName}
//                         {!isTypingDone && (
//                             <motion.span
//                                 animate={{ opacity: [1, 0] }}
//                                 transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
//                                 className="inline-block text-zinc-400 font-sans font-light ml-1"
//                             >
//                                 |
//                             </motion.span>
//                         )}
//                     </h1>

//                     <motion.div
//                         variants={contentVariants}
//                         initial="hidden"
//                         animate={isTypingDone ? "visible" : "hidden"}
//                         className="flex flex-col"
//                     >
//                         {/* Navigation Menu */}
//                         <motion.div 
//                             variants={navContainerVariants}
//                             animate={isTypingDone ? "visible" : "hidden"}
//                             className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-4 md:pt-10 max-w-2xl"
//                         >
//                             {menuItems.map((item, idx) => (
//                                 <motion.div key={idx} variants={navItemVariants}>
//                                     <Link
//                                         to={item.path}
//                                         className="block px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs sm:text-sm md:text-base font-light text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:text-white"
//                                     >
//                                         {item.name}
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </motion.div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const fullName = "Bakul Chandra";
    const [typedName, setTypedName] = useState("");
    const [isTypingDone, setIsTypingDone] = useState(false);

    const subledding = [
        // Short version for review. Bakul sir to confirm or refine the wording.
        "Healthcare and Institutional Infrastructure Strategist, Renascent Consultants",
        "",
        ""
    ];

    const subheadings = [
        "Design is not decoration. It is decision making made visible.",
    ];
    const [index, setIndex] = useState(0);

    const menuItems = [
        { name: "Biography", path: "/biography" },
        { name: "Academic and Career Progression", path: "/academic-&-career-progression" },
        { name: "Awards and Accolades", path: "/awards-&-recognition" },
        { name: "Media", path: "/media" },
        { name: "Works and Portfolio", path: "/works-&-portfolio" },
        { name: "Thoughts in Prose", path: "/thoughts-in-prose" },
        { name: "Travel and Photography", path: "/travel-&-photography" },
        { name: "Contact", path: "/contact" }
    ];

    useEffect(() => {
        let currentIndex = 0;
        const typingSpeed = 140; 

        const typingInterval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setTypedName(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setIsTypingDone(true); 
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        if (!isTypingDone) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % subheadings.length);
        }, 3500); 
        return () => clearInterval(timer);
    }, [subheadings.length, isTypingDone]);


    // --- PERFECTED ANIMATION VARIANTS ---
    const contentVariants = {
        hidden: { opacity: 0, pointerEvents: "none" },
        visible: {
            opacity: 1,
            pointerEvents: "auto",
            transition: { duration: 0.8, delay: 0.1 } // 0.3s overall delay
        }
    };

    const navContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            // 0.5s ke delay ke baad shuru hoga, aur har button 0.05s ke fast gap pe aayega
            transition: { delayChildren: 0.1, staggerChildren: 0.05 } 
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <div
            className="relative h-[100dvh] w-full bg-black text-white flex flex-col lg:flex-row overflow-hidden"
            style={{ fontFamily: '"Archivo", sans-serif' }}
        >
            {/* --- IMAGE CONTAINER --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.2 } }}
                className="absolute inset-0 z-0 lg:relative lg:w-1/2 lg:order-2"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/20 z-10 lg:hidden"></div>
                
                {/* Mobile Image: Sirf mobile screens par dikhegi (lg:hidden) */}
                <img
                    src="/home/hero-banner-mobile.jpeg" // <-- Yahan apni MOBILE image ka path daalein
                    alt="Bakul Chandra Portrait Mobile"
                    className="block lg:hidden w-full h-full object-contain object-top relative z-0"
                />

                {/* Desktop Image: Sirf tablet/desktop screens par dikhegi (hidden lg:block) */}
                <img
                    src="/home/hero-banner3.png"
                    alt="Bakul Chandra Portrait Desktop"
                    className="hidden lg:block w-full h-full object-cover object-top lg:w-[80%] lg:ml-35 lg:object-right-top relative z-0"
                />
            </motion.div>

            {/* --- TEXT & NAVIGATION CONTAINER --- */}
            <div className="relative z-10 flex-1 flex flex-col justify-end lg:justify-center px-5 sm:px-8 lg:px-12 pb-13 sm:pb-10 pt-20 lg:py-16 lg:w-1/2 lg:order-1">
                <div className="w-full max-w-lg lg:max-w-3xl">

                    <div className="mb-0 lg:-mb-2">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="whitespace-nowrap text-[clamp(8px,2.45vw,14px)] lg:text-[clamp(10px,1.05vw,17px)] uppercase tracking-wide font-light"
                            >
                                {subheadings[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* --- MAIN NAME WITH PLAYFAIR FONT --- */}
                    <h1 className="whitespace-nowrap text-[clamp(40px,14vw,72px)] lg:text-[clamp(64px,7.5vw,128px)] uppercase tracking-[0.06em] lg:tracking-wide font-playfair font-light leading-tight text-white">
                        {typedName}
                        {!isTypingDone && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                                className="inline-block text-zinc-400 font-sans font-light"
                            >
                                |
                            </motion.span>
                        )}
                    </h1>

                    <div className="mt-0 mb-4 lg:mt-0 lg:mb-6">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="text-[12px] sm:text-sm lg:text-[17px] font-light"
                            >
                                {subledding[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Dhyan do: animate={"visible"} fixed hai, ye typing ka wait nahi karega */}
                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col "
                    >
                        {/* Navigation Menu */}
                        <motion.div
                            variants={navContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-2 lg:gap-3 pt-1 lg:pt-4 max-w-3xl"
                        >
                            {menuItems.map((item, idx) => (
                                <motion.div key={idx} variants={navItemVariants}>
                                    <Link
                                        to={item.path}
                                        className="block px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] sm:text-xs lg:text-[16px] font-light text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:text-white whitespace-nowrap"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;