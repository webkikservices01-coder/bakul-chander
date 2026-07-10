// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const SketchToMasterpiece = () => {
//     const [sliderPosition, setSliderPosition] = useState(50); // Position in percentage
//     const [isDragging, setIsDragging] = useState(false);
//     const containerRef = useRef(null);

//     // Mouse aur Touch dono ko handle karne ke liye logic
//     const handleMove = (event) => {
//         if (!isDragging && event.type !== 'click') return;

//         const containerRect = containerRef.current.getBoundingClientRect();
//         const x = event.pageX || event.touches[0].pageX;
//         const relativeX = x - containerRect.left;
//         const containerWidth = containerRect.width;

//         let newPosition = (relativeX / containerWidth) * 100;

//         // Limit setting (0% se 100% ke beech rahe)
//         if (newPosition < 0) newPosition = 0;
//         if (newPosition > 100) newPosition = 100;

//         setSliderPosition(newPosition);
//     };

//     const handleMouseDown = () => setIsDragging(true);
//     const handleMouseUp = () => setIsDragging(false);

//     // Window level par mouse up listen karna taaki agar mouse container se bahar jaye toh dragging ruk jaye
//     useEffect(() => {
//         window.addEventListener('mouseup', handleMouseUp);
//         window.addEventListener('touchend', handleMouseUp);
//         return () => {
//             window.removeEventListener('mouseup', handleMouseUp);
//             window.removeEventListener('touchend', handleMouseUp);
//         };
//     }, []);

//     return (
//         <section className="w-full bg-black text-white py-8 md:py-16 px-6 md:px-12" style={{ fontFamily: '"Archivo", sans-serif' }}>
//             <div className="max-w-7xl mx-auto">

// {/* --- Header --- */}
// <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="mb-10 md:mb-16 px-6 md:px-0"
// >
//     <h2 className="text-2xl md:text-3xl font-light flex items-center gap-3 text-gray-300">
//         <span className="text-xl mt-1">•</span> I convert sketches into masterpiece
//     </h2>
// </motion.div>

//                 {/* --- Comparison Slider Container --- */}
//                 <div
//                     ref={containerRef}
//                     className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
//                     onMouseMove={handleMove}
//                     onTouchMove={handleMove}
//                     onMouseDown={handleMouseDown}
//                     onTouchStart={handleMouseDown}
//                 >
//                     {/* 1. Masterpiece Image (Background - The "After") */}
//                     <img
//                         src="/about/cor.png" // Colored Image Path
//                         alt="Masterpiece"
//                         className="absolute inset-0 w-full h-full object-cover"
//                     />

//                     {/* 2. Sketch Image (Foreground - The "Before") */}
//                     {/* Iska width slider ki position ke hisaab se change hoga */}
//                     <div
//                         className="absolute inset-0 w-full h-full overflow-hidden"
//                         style={{ width: `${sliderPosition}%` }}
//                     >
//                         <img
//                             src="/about/sck.png" // Sketch Image Path
//                             alt="Sketch"
//                             className="absolute inset-0 w-[100vw] h-full object-cover max-w-none md:w-[80vw] lg:w-[1280px]"
//                             // Note: Image ki width container se badi honi chahiye taaki resize pe stretch na ho
//                             style={{ width: containerRef.current?.offsetWidth }}
//                         />
//                     </div>

//                     {/* 3. The Slider Line & Handle */}
//                     <div
//                         className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
//                         style={{ left: `${sliderPosition}%` }}
//                     >
//                         {/* Handle Circle */}
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-black/20 rounded-full flex items-center justify-center shadow-2xl">
//                             <div className="flex gap-1">
//                                 <div className="w-[2px] h-4 bg-black/40 rounded-full"></div>
//                                 <div className="w-[2px] h-4 bg-black/40 rounded-full"></div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* 4. Labels (Optional) */}
//                     <div className="absolute bottom-6 left-6 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded text-xs uppercase tracking-widest text-gray-300 pointer-events-none">
//                         Sketch
//                     </div>
//                     <div className="absolute bottom-6 right-6 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded text-xs uppercase tracking-widest text-gray-300 pointer-events-none">
//                         Masterpiece
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default SketchToMasterpiece;





import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

const SketchToMasterpiece = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Smooth movement ke liye Spring animation use karenge
    const springX = useSpring(50, { stiffness: 100, damping: 20 });

    // Entry Animation: Jab section view me aaye, ek baar 30% se 70% move ho
    useEffect(() => {
        if (isInView) {
            // Chota sa delay taaki user ko movement dikhe
            setTimeout(() => {
                springX.set(30);
                setTimeout(() => springX.set(50), 800);
            }, 500);
        }
    }, [isInView, springX]);

    // Spring value change hone par slider position update karein
    useEffect(() => {
        const unsubscribe = springX.on("change", (latest) => {
            setSliderPosition(latest);
        });
        return () => unsubscribe();
    }, [springX]);

    const handleMove = (event) => {
        if (!isDragging && event.type !== 'click') return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const x = event.pageX || (event.touches ? event.touches[0].pageX : 0);
        const relativeX = x - containerRect.left;
        const containerWidth = containerRect.width;

        let newPosition = (relativeX / containerWidth) * 100;
        if (newPosition < 0) newPosition = 0;
        if (newPosition > 100) newPosition = 100;

        // Dragging ke waqt spring ko bypass karke direct set karenge for instant feedback
        setSliderPosition(newPosition);
        springX.set(newPosition, false);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchend', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <section className="w-full bg-black text-white py-8 md:py-16 px-6 md:px-12" style={{ fontFamily: '"Archivo", sans-serif' }}>
            <div className="max-w-7xl mx-auto">

                {/* --- Header --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-light flex items-center gap-3 text-gray-300">
                        <span className="text-xl mt-1">•</span> I convert sketches into masterpiece
                    </h2>
                </motion.div>

                {/* --- Comparison Slider Container --- */}
                <div
                    ref={containerRef}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
                    onMouseMove={handleMove}
                    onTouchMove={handleMove}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* 1. Masterpiece Image (Colored) */}
                    <img
                        src="/about/cor.png"
                        alt="Masterpiece"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* 2. Sketch Image (Foreground) */}
                    <motion.div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        <img
                            src="/about/sck.png"
                            alt="Sketch"
                            className="absolute inset-0 h-full object-cover max-w-none grayscale"
                            style={{ width: containerRef.current?.offsetWidth }}
                        />
                    </motion.div>

                    {/* 3. The Slider Line & Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-[1.5px] bg-white/80 z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Handle Circle with Pulse Effect */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] z-30"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex gap-1.5">
                                <motion.div
                                    animate={isDragging ? { height: [12, 18, 12] } : {}}
                                    className="w-[2px] h-5 bg-black/60 rounded-full"
                                />
                                <motion.div
                                    animate={isDragging ? { height: [12, 18, 12] } : {}}
                                    className="w-[2px] h-5 bg-black/60 rounded-full"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Overlay Badges */}
                    <div className="absolute top-2 md:top-6 left-2 z-10  md:left-6 px-4 py-1.5 bg-black/20 backdrop-blur-sm md:backdrop-blur-lg border border-white/10 rounded-full text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">
                        pre sketch
                    </div>
                    <div className="absolute top-2 md:top-6 right-2 z-10 md:right-6 px-4 py-1.5 bg-black/20 backdrop-blur-sm md:backdrop-blur-lg border border-white/10 rounded-full text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">
                        construction
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SketchToMasterpiece;