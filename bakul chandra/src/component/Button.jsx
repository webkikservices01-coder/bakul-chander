// src/components/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
    text = "Click Here",
    link = "#",
    size = "md", // Options: 'sm', 'md', 'lg'
    className = "",
    onClick
}) => {
    // Size variants handle karne ke liye
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base md:text-lg",
        lg: "px-8 py-4 text-lg md:text-xl"
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block" // Ensures the motion div wraps tightly around the button
        >
            <Link
                to={link}
                onClick={onClick}
                // Glassmorphism classes yahan add ki gayi hain
                className={`inline-flex items-center gap-3 rounded-md text-white font-normal transition-all duration-500 
                bg-white/5 backdrop-blur-md border border-white/20 hover:text-black hover:bg-white hover:border-white/40 shadow-lg 
                ${sizeClasses[size]} ${className}`}
            >
                {text}
                <span className="text-2xl leading-none font-light">&rsaquo;</span>
            </Link>
        </motion.div>
    );
};

export default Button;