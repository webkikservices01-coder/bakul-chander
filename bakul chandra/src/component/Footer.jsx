import React from 'react';
import { motion } from 'framer-motion';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    const architecturalImages = [
        '/footer/footer1.jpg',
        '/footer/footer2.jpg',
        '/footer/footer3.jpg',
        '/footer/footer4.jpg',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <footer className="bg-[#0a0a0a] text-white py-16 md:py-20 px-6 md:px-12 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* --- Left: Image Grid --- */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mx-auto lg:mx-0">
                    {architecturalImages.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative aspect-square overflow-hidden rounded-sm group shadow-2xl"
                        >
                            <img
                                src={image}
                                alt={`Architecture ${index + 1}`}
                                className="w-full h-full object-cover grayscale transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Right: Contact Details --- */}
                <div className="lg:col-span-7 flex flex-col justify-center lg:pl-10 space-y-12">

                    {/* Header, Name & LinkedIn Icon */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* <p className="text-gray-500 tracking-[0.2em] text-xs md:text-sm uppercase font-semibold">
                            Ready to start a project?
                        </p> */}

                        <div className="flex items-center gap-6">
                            {/* Animated Name Component */}
                            <div className="group relative inline-block cursor-pointer">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight transition-colors duration-300 group-hover:text-gray-300">
                                    Bakul Chandra
                                </h1>
                                {/* Strict Underline only for Name */}
                                <div className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></div>
                            </div>

                            {/* Independent Circular LinkedIn Icon */}
                            <a
                                href="https://linkedin.com/in/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 md:w-14 md:h-14 mt-2 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 group shadow-lg"
                                aria-label="LinkedIn Profile"
                            >
                                <AiFillLinkedin className="text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Info Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-400 font-light text-base md:text-lg">
                        <div className="space-y-6">
                            <div>
                                <p className="text-white text-xs uppercase tracking-widest mb-2 font-medium">Call Us</p>
                                <a href="tel:+917728991" className="hover:text-white transition-colors duration-300">
                                    +91-7728991
                                </a>
                            </div>
                            <div>
                                <p className="text-white text-xs uppercase tracking-widest mb-2 font-medium">Email</p>
                                <a
                                    href="mailto:Bakul@gmail.com"
                                    className="font-light tracking-tight transition-colors duration-300 hover:text-white"
                                >
                                    Bakul@gmail.com
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="text-white text-xs uppercase tracking-widest mb-2 font-medium">Visit Us</p>
                            <p className="leading-relaxed">
                                148 Lower Ground Floor,<br />
                                Jasola Pocket - II,<br />
                                New Delhi - 110025 (India)
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* --- Bottom Bar --- */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-gray-500 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-4"
            >
                <p>© {new Date().getFullYear()} Bakul Chandra. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { AiFillLinkedin } from 'react-icons/ai';

// const Footer = () => {
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
//         }
//     };

//     return (
//         <footer className="bg-[#000] text-white pt-16 pb-6 px-6 md:px-12 overflow-hidden" style={{ fontFamily: '"Archivo", sans-serif' }}>
//             <motion.div
//                 className="max-w-7xl mx-auto w-full flex flex-col justify-between  border-t border-white/10 pt-16"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-50px" }}
//             >
//                 {/* --- TOP: Massive Call To Action + Right Side Text --- */}
//                 <motion.div variants={itemVariants} className="w-full mb-16 md:mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    
//                     {/* Left: CTA */}
//                     <div>
//                         <p className="text-gray-500 tracking-[0.2em] text-xs md:text-sm uppercase font-medium mb-4 md:mb-6 flex items-center gap-3">
//                             <span className="w-8 h-[1px] bg-gray-500 inline-block"></span>
//                             Ready to start a project?
//                         </p>
                        
//                         <a 
//                             href="mailto:Bakul@gmail.com" 
//                             className="group inline-flex items-center text-[11vw] sm:text-[10vw] md:text-7xl lg:text-8xl font-light tracking-tighter leading-none text-white hover:text-gray-400 transition-colors duration-500"
//                         >
//                             Let's Talk.
//                             <span className="inline-block transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-3 text-gray-500 text-4xl md:text-6xl ml-4">
//                                 ↗
//                             </span>
//                         </a>
//                     </div>

//                     {/* Right: Closing Ethos / Manifesto (Fills the empty space elegantly) */}
//                     <div className="lg:max-w-sm xl:max-w-md lg:text-right lg:pb-2">
//                         <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
//                             Architecture is the discipline of resolving complexity with clarity. Whether it is master planning, healthcare, or institutional design, we build environments that perform, adapt, and endure.
//                         </p>
//                     </div>

//                 </motion.div>

//                 {/* --- MIDDLE: Clean Info Grid --- */}
//                 <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pb-10 border-b border-white/10 text-base md:text-lg text-gray-400 font-light">
                    
//                     {/* Column 1: Contact */}
//                     <div className="space-y-4">
//                         <h4 className="text-white text-xs uppercase tracking-widest font-medium mb-1">Contact</h4>
//                         <div className="flex flex-col space-y-1">
//                             <a href="mailto:Bakul@gmail.com" className="hover:text-white transition-colors duration-300 w-fit">
//                                 Bakul@gmail.com
//                             </a>
//                             <a href="tel:+917728991" className="hover:text-white transition-colors duration-300 w-fit">
//                                 +91-7728991
//                             </a>
//                         </div>
//                     </div>

//                     {/* Column 2: Studio */}
//                     <div className="space-y-4">
//                         <h4 className="text-white text-xs uppercase tracking-widest font-medium mb-1">Studio</h4>
//                         <p className="leading-relaxed max-w-xs text-sm md:text-base">
//                             148 Lower Ground Floor,<br />
//                             Jasola Pocket - II,<br />
//                             New Delhi - 110025 (India)
//                         </p>
//                     </div>

//                     {/* Column 3: Socials */}
//                     <div className="space-y-4 md:text-right">
//                         <h4 className="text-white text-xs uppercase tracking-widest font-medium mb-1">Connect</h4>
//                         <div className="flex items-center md:justify-end gap-4">
//                             <a
//                                 href="https://linkedin.com/in/your-profile"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300"
//                                 aria-label="LinkedIn Profile"
//                             >
//                                 <AiFillLinkedin className="text-2xl group-hover:scale-110 transition-transform duration-300" />
//                                 <span className="font-light text-sm md:text-base">LinkedIn</span>
//                             </a>
//                         </div>
//                     </div>

//                 </motion.div>

//                 {/* --- BOTTOM: Copyright & Credits --- */}
//                 <motion.div
//                     variants={itemVariants}
//                     className="w-full pt-6 text-[#5b6b80] text-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-3 tracking-widest"
//                 >
//                     <p>© {new Date().getFullYear()} Bakul Chandra.</p>
                    
//                     {/* Updated Developer Attribution from Screenshot */}
//                     <p className="font-medium">
//                         Designed & Developed by <a href="https://webkik.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Webkik Services</a>
//                     </p>
//                 </motion.div>

//             </motion.div>
//         </footer>
//     );
// };

// export default Footer;