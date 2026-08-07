// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const location = useLocation(); // Current path get karne ke liye
//     const [currentTitle, setCurrentTitle] = useState('Bakul Chandra');

//     const menuItems = [
//         "Home",
//         "Biography",
//         "Career & Achievements",
//         "Works & Portfolio",
//         "Awards & Recognition",
//         "Media",
//         "Travel & Photography",
//         "Contact"
//     ];

//     // URL change hone par Title update karne ka logic
//     useEffect(() => {
//         const path = location.pathname;

//         // Agar Home page par hain
//         if (path === '/') {
//             setCurrentTitle('Bakul Chandra');
//         } else {
//             // URL se title nikalna aur format karna (e.g., "/about-us" -> "About Us")
//             // Projects detail page (/projects/:slug) ke liye special case
//             if (path.startsWith('/projects/')) {
//                 setCurrentTitle('Project Details');
//             } else {
//                 const rawTitle = path.replace('/', '').replace(/-/g, ' ');
//                 // Capitalize har word ka pehla letter
//                 const formattedTitle = rawTitle.replace(/\b\w/g, char => char.toUpperCase());

//                 // Agar Awards & Honours hai toh special check (kyunki URL me & url-encoded hota hai ya hata diya jata hai)
//                 if (formattedTitle.toLowerCase().includes('awards')) {
//                     setCurrentTitle('Awards & Honours');
//                 } else {
//                     setCurrentTitle(formattedTitle);
//                 }
//             }
//         }
//     }, [location]);

//     // Animation settings for the dropdown
//     const dropdownVariants = {
//         hidden: { opacity: 0, y: -10, height: 0 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             height: "auto",
//             transition: { duration: 0.3, ease: "easeOut" }
//         },
//         exit: {
//             opacity: 0,
//             y: -10,
//             height: 0,
//             transition: { duration: 0.2, ease: "easeIn" }
//         }
//     };

//     return (
//         <div
//             className="fixed top-4 right-4 md:top-8 md:right-8 z-50"
//             style={{ fontFamily: '"Archivo", sans-serif' }}
//         >
//             <div
//                 className="relative w-48 md:w-64" // Thodi width badhayi hai bade text ke liye
//                 onMouseEnter={() => setIsOpen(true)}
//                 onMouseLeave={() => setIsOpen(false)}
//             >
//                 {/* Main Toggle Button */}
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className={`flex items-center justify-between w-full px-4 py-2 md:px-5 md:py-3 bg-black/40 backdrop-blur-md border border-white/30 text-white transition-colors duration-300
//                         ${isOpen ? 'bg-black/40 backdrop-blur-md border border-white/30' : 'bg-transparent border border-white/30 hover:bg-white/5'}
//                     `}
//                 >
//                     {/* Animated Title Change */}
//                     <AnimatePresence mode="wait">
//                         <motion.span
//                             key={currentTitle} // Key change hone par animation trigger hoga
//                             initial={{ opacity: 0, y: 5 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -5 }}
//                             transition={{ duration: 0.2 }}
//                             className="text-base md:text-lg font-light tracking-wide truncate pr-2"
//                         >
//                             {currentTitle}
//                         </motion.span>
//                     </AnimatePresence>

//                     <motion.span
//                         animate={{ rotate: isOpen ? 180 : 0 }}
//                         className="text-xl md:text-2xl font-light leading-none"
//                     >
//                         {isOpen ? '−' : '+'}
//                     </motion.span>
//                 </button>

//                 {/* Dropdown Menu with Framer Motion */}
//                 <AnimatePresence>
//                     {isOpen && (
//                         <motion.div
//                             variants={dropdownVariants}
//                             initial="hidden"
//                             animate="visible"
//                             exit="exit"
//                             className="absolute top-full left-0 w-full overflow-hidden"
//                         >
//                             <div className="border border-t-0 border-white/30 bg-black/40 backdrop-blur-md shadow-lg">
//                                 <ul className="flex flex-col py-2 md:py-3">
//                                     {menuItems.map((item, index) => {
//                                         const path = item.toLowerCase() === 'home'
//                                             ? '/'
//                                             : `/${item.replace(/\s+/g, '-').replace(/&/g, '&').toLowerCase()}`; // Fixed pathing for special chars

//                                         // Highlight current page in menu
//                                         const isActive = location.pathname === path || (item === 'Works' && location.pathname.startsWith('/projects'));

//                                         return (
//                                             <li key={index}>
//                                                 <Link
//                                                     to={path}
//                                                     onClick={() => setIsOpen(false)}
//                                                     className={`block px-4 py-2 md:px-5 md:py-2 transition-colors text-sm md:text-base font-light tracking-wide hover:bg-white/10
//                                                         ${isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'}
//                                                     `}
//                                                 >
//                                                     {item}
//                                                 </Link>
//                                             </li>
//                                         );
//                                     })}
//                                 </ul>
//                             </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>

//             </div>
//         </div>
//     );
// };

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Menu items ki list
const menuItems = [
    { name: 'Biography', path: '/biography' },
    { name: 'Academic & Career Progression', path: '/academic-&-career-progression' },
    { name: 'Awards & Recognition', path: '/awards-&-recognition' },
    { name: 'Media', path: '/media' },
    { name: 'Works & Portfolio', path: '/works-&-portfolio' },
    { name: 'Thoughts in Prose', path: '/thoughts-in-prose' },
    { name: 'Travel & Photography', path: '/travel-&-photography' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Mobile Dropdown States
    const [isOpen, setIsOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('Menu');

    // Home page par Navbar hide rahega
    if (location.pathname === '/') {
        return null;
    }

    // Current page ko list se hatane ka logic (Desktop & Mobile dono list ke liye)
    const filteredMenu = menuItems.filter(item => item.path !== location.pathname);

    // URL change hone par Mobile dropdown ka title update karne ka logic
    useEffect(() => {
        const currentItem = menuItems.find(item => item.path === location.pathname);
        if (currentItem) {
            setCurrentTitle(currentItem.name);
        } else {
            setCurrentTitle('Menu');
        }
    }, [location.pathname]);

    // Glassmorphism design classes (Taaki pure navbar me consistency rahe)
    const glassStyle = "bg-black/40 backdrop-blur-md border border-white/20 text-gray-300 transition-all duration-300 shadow-xl";
    const glassHoverStyle = "hover:bg-white/10 hover:border-white/50 hover:text-white";

    // Mobile Dropdown Animation
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, height: 0 },
        visible: {
            opacity: 1,
            y: 0,
            height: "auto",
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -10,
            height: 0,
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // Main layout: Flex between taaki Back button left me rahe aur Dropdown right me (mobile par)
            className="fixed top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 z-50 flex items-center justify-between gap-4 md:gap-8"
            style={{ fontFamily: '"Archivo", sans-serif' }}
        >
            {/* --- BACK BUTTON (Mobile & Desktop dono par dikhega) --- */}
            <button
                onClick={() => navigate(-1)}
                className={`w-fit shrink-0 group flex items-center gap-3 pl-1.5 pr-5 py-1.5 md:py-1.5 rounded-full ${glassStyle} ${glassHoverStyle}`}
            >
                <motion.span 
                    className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 border border-white/10 transition-transform duration-300 group-hover:-translate-x-1"
                >
                    <span className="text-xl md:text-[15px] font-light leading-none relative -top-[1px]">
                        ←
                    </span>
                </motion.span>
                <span className="text-sm md:text-[15px] font-light tracking-wide">
                    Back
                </span>
            </button>

            {/* --- DESKTOP MENU (Sirf Desktop par dikhega) --- */}
            <div
                className={`hidden lg:flex gap-1.5 xl:gap-2 items-center border py-2 px-2 xl:px-3 rounded-full overflow-x-auto ${glassStyle}`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {filteredMenu.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="px-2.5 xl:px-3.5 py-1.5 text-[13px] xl:text-[15px] font-light rounded-full whitespace-nowrap hover:text-white transition-colors duration-300 shrink-0"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* --- MOBILE DROPDOWN MENU (Sirf Mobile & Tablet par dikhega) --- */}
            <div className="block lg:hidden relative w-48 sm:w-56">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-full ${glassStyle} ${isOpen ? 'bg-white/10 border-white/50 text-white' : ''}`}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentTitle}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="text-sm font-light tracking-wide truncate pr-2"
                        >
                            {currentTitle}
                        </motion.span>
                    </AnimatePresence>
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-lg font-light leading-none"
                    >
                        {isOpen ? '−' : '+'}
                    </motion.span>
                </button>

                {/* Dropdown Items List */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full right-0 w-full mt-2 overflow-hidden"
                        >
                            <div className={`rounded-2xl flex flex-col py-2 ${glassStyle}`}>
                                {filteredMenu.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2.5 transition-colors text-sm font-light tracking-wide text-gray-300 hover:text-white hover:bg-white/10"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
    );
};

export default Navbar;