// import React from 'react';
// import { motion } from 'framer-motion';

// const ExpertiseSection = () => {
//     // Skills array
//     const skills = [
//         "Architecture",
//         "Interior Design",
//         "Landscape Design",
//         "Master Planning"
//     ];

//     // Placeholder logos array (Aap inki jagah apne asli logo paths daalna)
//     const logos = [
//         "/home/awards/logo1.png",
//         "/home/awards/logo2.png",
//         "/home/awards/logo3.png",
//         // Ek baar aur repeat kar dete hain taaki screen bhari hui lage
//         "/home/awards/logo1.png",
//         "/home/awards/logo2.png",
//         "/home/awards/logo3.png"
//     ];

//     // Scroll animation settings for text
//     const containerVariant = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.15 }
//         }
//     };

//     const itemVariant = {
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//     };

//     return (
//         <section className="w-full bg-black text-white py-8 md:py-0 md:pb-16 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
//             <div className="max-w-7xl mx-auto px-6 md:px-0 space-y-8 md:space-y-24">

//                 {/* --- TOP SECTION: What I do --- */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-start">

//                     {/* Left: Text Content */}
//                     <motion.div
//                         variants={containerVariant}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, margin: "-100px" }}
//                         className="space-y-6 w-[90%]"
//                     >
//                         <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-light flex items-center gap-3">
//                             <span className="text-2xl mt-1">•</span> What I do
//                         </motion.h2>

//                         <motion.p variants={itemVariant} className="text-gray-300 font-light leading-relaxed text-base md:text-lg max-w-lg">
//                             I am a disciplinary Architect I have been working in this industry from past 28+ years and my skills are:
//                         </motion.p>
//                     </motion.div>

//                     {/* Right: Skill Tags (Pills) */}
//                     <motion.div
//                         variants={containerVariant}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, margin: "-100px" }}
//                         className="flex flex-wrap gap-4 lg:justify-end w-[110%]"
//                     >
//                         {skills.map((skill, index) => (
//                             <motion.div
//                                 key={index}
//                                 variants={itemVariant}
//                                 whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
//                                 className="px-4 md:px-6 py-2 md:px-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] md:text-base font-light backdrop-blur-sm cursor-default transition-colors duration-300"
//                             >
//                                 {skill}
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>

//                 {/* --- BOTTOM SECTION: Awards Marquee --- */}
//                 <motion.div
//                     variants={containerVariant}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: "-100px" }}
//                     className="space-y-10 mt-10 md:mt-0"
//                 >
//                     <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-light flex items-center gap-3">
//                         <span className="text-2xl mt-1">•</span> Awards
//                     </motion.h2>

//                     {/* Marquee Container (with Top & Bottom borders just like the design) */}
//                     <motion.div variants={itemVariant} className="relative w-full border-y border-white/10 py-8 md:py-12 overflow-hidden flex">

//                         {/* Gradient Masks for fading effect on left and right edges (Optional but looks premium) */}
//                         <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
//                         <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

//                         {/* Framer Motion Infinite Scroll */}
//                         <motion.div
//                             className="flex items-center gap-14 md:gap-20 min-w-max pr-16 md:pr-32"
//                             animate={{ x: ["0%", "-50%"] }} // Yeh element ko exact half shift karega
//                             transition={{
//                                 repeat: Infinity,
//                                 ease: "linear",
//                                 duration: 20 // Speed control karne ke liye (kam value = tez speed)
//                             }}
//                         >
//                             {/* Hum logos array ko 2 baar render kar rahe hain taaki seamless loop ban sake */}
//                             {[...logos, ...logos].map((logo, index) => (
//                                 <img
//                                     key={index}
//                                     src={logo}
//                                     alt="Award Logo"
//                                     className="h-10 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
//                                 />
//                             ))}
//                         </motion.div>

//                     </motion.div>
//                 </motion.div>

//             </div>
//         </section>
//     );
// };

// export default ExpertiseSection;




import React from 'react';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
    // Skills array
    const skills = [
        "Architecture",
        "Interior Design",
        "Landscape Design",
        "Master Planning"
    ];

    // Top 10 Awards Data (Combined from PDF & Web)
    // All Awards Extracted from LinkedIn Screenshots (Live URL Icons for testing)
    const awardsMarqueeData = [
        { 
            id: 1, 
            title: "Excellence in Healthcare Architecture & Design", 
            subtitle: "Times of India - ET (Nov 2025)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png" 
        },
        { 
            id: 2, 
            title: "Outstanding Design Leadership", 
            subtitle: "India Business Awards (Aug 2025)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/2966/2966334.png" 
        },
        { 
            id: 3, 
            title: "Top 50 Healthcare & Medtech Leaders", 
            subtitle: "Medgate Today (Jan 2025)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/2065/2065157.png" 
        },
        { 
            id: 4, 
            title: "Doctor of Philosophy (Honoris Causa)", 
            subtitle: "Mansarovar Global Univ. (Jun 2024)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/2231/2231435.png" 
        },
        { 
            id: 5, 
            title: "Golden Door Award for Consultancy", 
            subtitle: "Elite Architecture Awards (Jun 2024)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/1997/1997928.png" 
        },
        { 
            id: 6, 
            title: "Outstanding Designing of Religious Projects", 
            subtitle: "Architect’s WOW Awards (May 2024)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/3133/3133284.png" 
        },
        { 
            id: 7, 
            title: "Top 50 Healthcare & Medtech Leaders", 
            subtitle: "Medgate Today (Jun 2023)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/2065/2065157.png" 
        },
        { 
            id: 8, 
            title: "Excellence in Healthcare Projects", 
            subtitle: "Eldrok India Architecture (Apr 2023)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/5938/5938392.png" 
        },
        { 
            id: 9, 
            title: "Most Promising Personality in Healthcare", 
            subtitle: "MT India Healthcare Awards (Apr 2023)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/3063/3063206.png" 
        },
        { 
            id: 10, 
            title: "Ten Top-notch Versatile Business Leader", 
            subtitle: "Business Touch Magazine (Apr 2023)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png" 
        },
        { 
            id: 11, 
            title: "Excellent Healthcare Architect", 
            subtitle: "Apex Healthcare Excellency (Aug 2022)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png" 
        },
        { 
            id: 12, 
            title: "Innovation in Healthcare Architecture", 
            subtitle: "Architect’s WOW Awards (May 2022)", 
            logoUrl: "https://cdn-icons-png.flaticon.com/512/2000/2000887.png" 
        }
    ];

    // Scroll animation settings for text
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-black text-white py-8 md:py-0 md:pb-16 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-0 space-y-8 md:space-y-24">

                {/* --- TOP SECTION: What I do --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-start">

                    {/* Left: Text Content */}
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6 w-[90%]"
                    >
                        <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-light flex items-center gap-3">
                            <span className="text-2xl mt-1 text-gray-500">•</span> What I do
                        </motion.h2>

                        <motion.p variants={itemVariant} className="text-gray-300 font-light leading-relaxed text-base md:text-lg max-w-lg">
                            I am a disciplinary Architect. I have been working in this industry for the past 28+ years and my skills are:
                        </motion.p>
                    </motion.div>

                    {/* Right: Skill Tags (Pills) */}
                    <motion.div
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-wrap gap-4 lg:justify-end w-full py-2"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariant}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                className="px-4 md:px-5 py-2 md:py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[13px] md:text-[15px] font-light backdrop-blur-sm cursor-default transition-colors duration-300"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* --- BOTTOM SECTION: Awards Marquee --- */}
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-10 mt-10 md:mt-0"
                >
                    <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-light flex items-center gap-3">
                        <span className="text-2xl mt-1 text-gray-500">•</span> Awards & Recognitions
                    </motion.h2>

                    {/* Marquee Container */}
                    <motion.div variants={itemVariant} className="relative w-full border-y border-white/10 py-6 md:py-10 overflow-hidden flex">

                        {/* Gradient Masks for fading effect */}
                        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                        {/* Framer Motion Infinite Scroll */}
                        <motion.div
                            className="flex items-center gap-8 md:gap-12 min-w-max pr-8 md:pr-12"
                            animate={{ x: ["0%", "-50%"] }} 
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40 // Badhaya gaya hai taaki text easily padha ja sake
                            }}
                        >
                            {/* Array ko 2 baar render kiya for seamless loop */}
                            {[...awardsMarqueeData, ...awardsMarqueeData].map((award, index) => (
                                <div 
                                    key={`${award.id}-${index}`} 
                                    className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                                >
                                    {/* Agar image load na ho, toh Alt text ganda na dikhe isliye w/h fixed hai */}
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center overflow-hidden shrink-0">
                                        <img
                                            src={award.logoUrl}
                                            alt={award.title}
                                            className="w-full h-full object-cover grayscale opacity-80"
                                            // Agar image file missing ho toh error handle karke placeholder icon/text dikha sakte hain
                                            onError={(e) => { e.target.style.display = 'none'; }} 
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">{award.title}</span>
                                        <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap">{award.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default ExpertiseSection;