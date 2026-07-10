// import React, { useState, useRef, useEffect } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Button from '../Button';

// const WhoIAm = () => {
//     // Stats Data
//     const stats = [
//         { id: 1, value: 30, suffix: '+', label: 'Years of Experience' },
//         { id: 2, value: 1500, suffix: '+', label: 'Projects Done' },
//         { id: 3, value: 100, suffix: '%', label: 'Client Satisfaction' },
//     ];

//     // Variants for animations
//     const fadeInUp = {
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
//     };

//     return (
//         <section className="w-full bg-black text-white py-8 md:py-16 px-6 md:px-12 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
//             <div className="max-w-7xl mx-auto">

//                 {/* --- Top Section: Text & Image --- */}
//                 <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">

//                     {/* Left: Content */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeInUp}
//                         className="w-full lg:w-1/2 space-y-6"
//                     >
//                         <h2 className="text-3xl md:text-4xl font-light flex items-center gap-3 text-gray-300">
//                             <span className="text-xl">•</span> Who I am
//                         </h2>

//                         {/* TEXT UPDATED ACCORDING TO NEW CONTENT */}
//                         <div className="space-y-6 max-w-xl -mb-18">
//                             <p className="text-lg md:text-xl leading-relaxed text-gray-300">
//                                 I am a planner-architect by training, a strategist by instinct, and a systems thinker by discipline.
//                             </p>
                            
//                             <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light">
//                                 My work sits at the intersection of design, business, and decision-making—where architecture is not treated as an isolated act of creation, but as a tool to shape outcomes, influence behavior, and build long-term value.
//                             </p>
                            
//                             <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light">
//                                 Over the years, I have worked across architecture, planning, and advisory, developing a practice rooted in clarity, structure, and strategic intent. I believe design is not decoration. It is <strong className="text-white font-medium">alignment</strong>—between vision and viability, ambition and execution, people and place.
//                             </p>
//                         </div>

                        
//                     </motion.div>

//                     {/* Right: Profile Image */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 1 }}
//                         viewport={{ once: true }}
//                         className="w-full h-[48vh] lg:w-[50%] rounded-sm mt-16 overflow-hidden shadow-2xl"
//                     >
//                         <img
//                             src="/about/bakulsir.png"
//                             alt="Bakul Chandra"
//                             className="w-full h-full object-cover object-top grayscale"
//                         />
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-col lg:flex-col justify-between items-start gap-12 mb-16">
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeInUp}
//                         className="w-full space-y-6">
//                         <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light">
//                                 My approach is direct, analytical, and deeply contextual. I am interested in how things work, why they fail, and what makes them endure. Whether I am shaping a building, advising on growth, or solving institutional complexity, I approach every challenge as a design problem first—and a business decision always.
//                             </p>
                            
//                             <p className="text-base md:text-lg leading-relaxed text-gray-400 font-light">
//                                 I value precision over noise, systems over spectacle, and substance over performance.
//                             </p>

//                             <p className="text-lg md:text-xl leading-relaxed text-gray-300 pt-2">
//                                 At its core, my work is about one thing: <br className="hidden md:block" />
//                                 <strong className="text-white font-medium italic">bringing order to complexity, and turning intent into impact.</strong>
//                             </p>
//                     </motion.div>
//                             <div className="pt-0">
//                             <Button text="View my Portfolio" link="/portfolio" />
//                         </div>
//                 </div>

//                 {/* --- Bottom Section: Stats Cards --- */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//                     {stats.map((stat, index) => (
//                         <motion.div
//                             key={stat.id}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             variants={{
//                                 hidden: { opacity: 0, y: 30 },
//                                 visible: {
//                                     opacity: 1,
//                                     y: 0,
//                                     transition: { delay: index * 0.2, duration: 0.6 }
//                                 }
//                             }}
//                             className="relative p-10 md:p-12 rounded-xl bg-[#111111] border border-white/5 hover:bg-white hover:border-purple-600/50 transition-colors duration-500 group flex flex-col justify-between min-h-[200px]"
//                         >
//                             <div className="space-y-2">
//                                 <div className="flex items-baseline gap-1">
//                                     <Counter value={stat.value} />
//                                     <span className="text-5xl md:text-7xl font-normal text-white group-hover:text-black transition-colors">{stat.suffix}</span>
//                                 </div>
//                             </div>
//                             <p className="text-lg md:text-xl font-light text-gray-400 group-hover:text-gray-800 transition-colors">
//                                 {stat.label}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// };

// // --- Numbers Counter Animation Component ---
// const Counter = ({ value }) => {
//     const [count, setCount] = useState(0);
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-50px" });

//     useEffect(() => {
//         if (isInView) {
//             let start = 0;
//             const end = value;
//             const duration = 2000; // 2 seconds
//             const increment = end / (duration / 16); // 60fps logic

//             const timer = setInterval(() => {
//                 start += increment;
//                 if (start >= end) {
//                     setCount(end);
//                     clearInterval(timer);
//                 } else {
//                     setCount(Math.floor(start));
//                 }
//             }, 16);
//             return () => clearInterval(timer);
//         }
//     }, [isInView, value]);

//     return (
//         <span ref={ref} className="text-5xl md:text-7xl font-normal text-white group-hover:text-black transition-colors duration-300 tabular-nums">
//             {count}
//         </span>
//     );
// };

// export default WhoIAm;




import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../Button';

const WhoIAm = () => {
    // Stats Data
    const stats = [
        { id: 1, value: 30, suffix: '+', label: 'Years of Experience' },
        { id: 2, value: 1500, suffix: '+', label: 'Projects Done' },
        { id: 3, value: 100, suffix: '%', label: 'Client Satisfaction' },
    ];

    // Purpose Data (Outer & Inner) - Updated with Titles and Subtitles
    const purposeData = {
        inner: {
            title: "Inner Purpose",
            subtitle: "The Foundation Within",
            description: (
                <>
                    To live from my <strong className="text-white font-medium">inner wholeness</strong> — where conviction meets compassion, and solitude births leadership. My growth arises not from chasing the unmanifest, but from embodying the divine principle that I already am: calm, clear, and constant.
                </>
            ),
            points: [
                "Deepen my inner equanimity, sustaining non-reactiveness even in distorted outer environments.",
                "Channel my fierce independence into compassionate presence, not just truthful solitude.",
                "Ripen into a state where being myself is so powerful, it elevates everyone around me."
            ],
            footer: "My highest form of inner awakening comes through serving without noise, leading without posture — unmoved, unshaken, but always showing the way."
        },
        outer: {
            title: "Outer Purpose",
            subtitle: "The Architect of Growth",
            description: (
                <>
                    To be a <strong className="text-white font-medium">sacred architect of growth</strong> — not just of structures or systems, but of people’s lives, institutions, and shared destinies. I am meant to build spaces — outer and inner — where truth, elegance, and elevation can happen.
                </>
            ),
            points: [
                "Lead with quiet conviction, rather than authority.",
                "Mentor others in thinking with clarity, speaking with grace, and working with purpose.",
                "Infuse environments — may they be physical, intellectual, or emotional — with integrity, alignment, and beauty."
            ],
            footer: "In my relationship with others — family, colleagues, society — my role is to be the conscience they can lean on, the strategist who sees the full path, and the presence that anchors them when winds shake their certainty."
        }
    };

    // Variants for animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="w-full bg-black text-white py-10 md:py-10 md:pt-16 px-5 md:px-12 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="max-w-7xl mx-auto">

                {/* --- Top Section: Text & Image --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-12 mb-10 md:mb-0">

                    {/* Left: Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-light flex items-center gap-3 text-gray-300">
                            WHO I AM
                        </h2>

                        <div className="space-y-4 md:space-y-3 max-w-xl mb-0 md:mb-0 text-justify">
                            <p className="text-base md:text-[16px] leading-normal text-gray-400 font-light">
                                I am a planner-architect by training, a strategist by instinct, and a systems thinker by discipline.
                            </p>
                            
                            <p className="text-base md:text-[16px] leading-normal text-gray-400 font-light">
                                My work sits at the intersection of design, business, and decision-making—where architecture is not treated as an isolated act of creation, but as a tool to shape outcomes, influence behavior, and build long-term value.
                            </p>
                            
                            <p className="text-base md:text-[16px] leading-normal text-gray-400 font-light">
                                Over the years, I have worked across architecture, planning, and advisory, developing a practice rooted in clarity, structure, and strategic intent. I believe design is not decoration. It is alignment — between vision and viability, ambition and execution, people and place.
                            </p>
                            <p className="text-base md:text-[16px] leading-normal text-gray-400 font-light">
                            My approach is direct, analytical, and deeply contextual. I am interested in how things work, why they fail, and what makes them endure. Whether I am shaping a building, advising on growth, or solving institutional complexity, I approach every challenge as a design problem first—and a business decision always.
                        </p>
                        
                        <p className="text-base md:text-[16px] leading-normal text-gray-400 font-light">
                            I value precision over noise, systems over spectacle, and substance over performance.
                        </p>

                        <p className="text-lg md:text-[16px] leading-normal text-gray-400 pt-2 font-light">
                            At its core, my work is about one thing: <br className="hidden md:block" />
                            <strong className="text-gray-400 uppercase">bringing order to complexity, and turning intent into impact.</strong>
                        </p>
                        </div>
                        {/* <div className="pt-10">
                        <Button text="View my Portfolio" link="/portfolio" />
                    </div> */}
                    </motion.div>

                    {/* Right: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-full h-[45vh] md:h-[67vh] lg:w-[50%] rounded-sm mt-6 md:mt-16 overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/about/bakulsir.png"
                            alt="Bakul Chandra"
                            className="w-full h-full object-cover object-top grayscale"
                        />
                    </motion.div>
                </div>

                {/* Middle Section: More Text */}
                <div className="flex flex-col justify-between items-start gap-8 md:gap-12 mb-4 md:mb-16">
                    {/* Commented out original text area kept intact as per your request */}
                </div>

                {/* --- NEW SPLIT PURPOSE SECTION (Replaced Tabs) --- */}
                <div className="mb-8 md:mb-0">
                    {/* Top Centered Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-left mb-6 md:mb-6"
                    >
                        {/* <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#9F1C44] font-medium mb-3">Core Mission</h2> */}
                        <h3 className="text-3xl md:text-3xl font-light text-white uppercase">
                            The Core Purpose of My Life
                        </h3>
                    </motion.div>

                    {/* Left & Right Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        
                        {/* LEFT SIDE: Inner Purpose */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col h-auto md:h-[60vh] bg-transparent p-0 rounded-xl"
                        >
                            <div className="mb-3 pb-3 border-b border-white/10">
                                <h4 className="text-2xl md:text-[28px] font-light text-white mb-2">{purposeData.inner.title}</h4>
                                <p className="text-xs tracking-wider uppercase text-gray-500">{purposeData.inner.subtitle}</p>
                            </div>
                            
                            <p className="text-base md:text-[16px] text-gray-400 font-light text-justify leading-relaxed mb-3">
                                {purposeData.inner.description}
                            </p>

                            <ul className="space-y-2 mb-2 flex-grow">
                                {purposeData.inner.points.map((point, index) => (
                                    <li key={index} className="flex gap-4 items-start group">
                                        <span className="text-gray-400 font-medium text-sm mt-1 opacity-80 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                        <p className="text-gray-300 font-light leading-relaxed text-justify text-sm md:text-[16px]">{point}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="pb-4 border-b border-white/10 mt-4 md:mt-auto">
                                <p className="text-sm md:text-[16px] text-justify text-gray-500 italic font-light leading-relaxed">
                                    "{purposeData.inner.footer}"
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE: Outer Purpose */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col h-auto md:h-[60vh] bg-transparent p-0 rounded-xl"
                        >
                            <div className="mb-3 pb-3 border-b border-white/10">
                                <h4 className="text-2xl md:text-[28px] font-light text-white mb-2">{purposeData.outer.title}</h4>
                                <p className="text-xs tracking-wider uppercase text-gray-500">{purposeData.outer.subtitle}</p>
                            </div>
                            
                            <p className="text-base md:text-[16px] text-gray-400 font-light text-justify leading-relaxed mb-3">
                                {purposeData.outer.description}
                            </p>

                            <ul className="space-y-2 mb-2 flex-grow">
                                {purposeData.outer.points.map((point, index) => (
                                    <li key={index} className="flex gap-4 items-start group">
                                        <span className="text-gray-400 font-medium text-sm mt-1 opacity-80 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                        <p className="text-gray-300 font-light leading-relaxed text-justify text-sm md:text-[16px]">{point}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="pb-4 border-b border-white/10 mt-4 md:mt-auto">
                                <p className="text-sm md:text-[16px] text-gray-500 italic font-light leading-relaxed">
                                    "{purposeData.outer.footer}"
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* --- Bottom Section: Stats Cards --- */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: index * 0.2, duration: 0.6 }
                                }
                            }}
                            className="relative p-8 md:p-12 rounded-xl bg-[#111111] border border-white/5 hover:bg-white hover:border-[#9F1C44]/50 transition-colors duration-500 group flex flex-col justify-between min-h-[160px] md:min-h-[200px]"
                        >
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-1">
                                    <Counter value={stat.value} />
                                    <span className="text-4xl md:text-7xl font-normal text-white group-hover:text-[#9F1C44] transition-colors">{stat.suffix}</span>
                                </div>
                            </div>
                            <p className="text-base md:text-xl font-light text-gray-400 group-hover:text-gray-800 transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div> */}

            </div>
        </section>
    );
};

// --- Numbers Counter Animation Component ---
const Counter = ({ value }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps logic

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-4xl md:text-7xl font-normal text-white group-hover:text-black transition-colors duration-300 tabular-nums">
            {count}
        </span>
    );
};

export default WhoIAm;