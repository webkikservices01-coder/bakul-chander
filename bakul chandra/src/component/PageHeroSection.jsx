import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const PageHeroSection = ({
  image,
  mobileImage, // ✅ New optional prop for mobile image
  title,
  highlight = ".",
  showCareerInfo = false,
  careerTitle = "careers",
  careerDescription = "",
  titleSize = "text-[55px] md:text-[85px]",
  category = "",
  clastyle = "",
  splitLayout = false, // ✅ Title on the side, photo on the other side (instead of overlaid)
}) => {
  if (splitLayout) {
    return (
      <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-black font-playfair flex flex-col md:flex-row">

        {/* Text Panel */}
        <div className="relative z-10 w-full md:w-[42%] shrink-0 flex flex-col justify-center px-6 md:px-16 py-28 md:py-0 bg-black">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-white font-extralight leading-[0.9] tracking-[0.1em] break-words text-[42px] md:text-[64px]`}
          >
            {title}
          </motion.h1>

          {category && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-3 md:mt-5 tracking-[0.3em] text-sm md:text-lg text-white"
            >
              {category}
            </motion.p>
          )}
        </div>

        {/* Photo Panel */}
        <div className="relative w-full md:w-[58%] h-[45vh] md:h-full overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className={`absolute inset-0 z-0 w-full h-full object-cover ${clastyle} grayscale-100 ${mobileImage ? 'hidden md:block' : ''}`}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {mobileImage && (
            <motion.img
              src={mobileImage}
              alt={title}
              className={`absolute inset-0 z-0 w-full h-full object-cover ${clastyle} grayscale-100 md:hidden`}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent md:bg-gradient-to-l md:from-black/10" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-black font-playfair" >

      {/* ✅ Desktop Image (Hides on mobile ONLY IF mobileImage is provided) */}
      <motion.img
        src={image}
        alt={title}
        className={`absolute inset-0 z-0 w-full h-full object-cover ${clastyle} grayscale-100 ${mobileImage ? 'hidden md:block' : ''}`}
        loading="eager"
        fetchpriority="high"
        decoding="async"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* ✅ Mobile Image (Shows only on mobile, and only IF provided) */}
      {mobileImage && (
        <motion.img
          src={mobileImage}
          alt={title}
          className={`absolute inset-0 z-0 w-full h-full object-cover ${clastyle} grayscale-100 md:hidden`}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/40 to-transparent md:from-black/80" />

      {/* Content Container */}
      <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col justify-end pb-12 md:pb-20 lg:flex-row lg:items-end lg:justify-between">

        {/* Left Title Area */}
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-white font-extralight leading-[0.85] tracking-[0.15em] break-words ${titleSize}`}
          >
            {title}
            {/* <span className="text-zinc-100">{highlight}</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-3 md:mt-5 ml-1 tracking-[0.3em]  text-sm md:text-lg text-white"
          >
            {category}
          </motion.p>
        </div>

        {/* Right Side - Career Info */}
        {showCareerInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full sm:max-w-[350px] mt-8 lg:mt-0 lg:mb-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 border border-white/20 rounded-sm shrink-0">
                <BriefcaseBusiness size={18} className="text-white opacity-80" />
              </div>
              <h2 className="text-white text-lg md:text-xl font-light tracking-widest ">
                {careerTitle}
              </h2>
            </div>

            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              {careerDescription}
            </p>
          </motion.div>
        )}
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 pointer-events-none" />
    </section>
  );
};

export default PageHeroSection;