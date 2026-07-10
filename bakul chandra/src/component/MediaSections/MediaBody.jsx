import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import FeaturedMedia from '../HomeSections/FeaturedMedia';

// --- DATA ---
const honorsData = [
  {
    id: 1,
    title: "Honorary Degree of Doctor of Philosophy (Honoris Causa)",
    conferredBy: "Mansarovar Global University, Bhopal",
    description: "Conferred to Bakul Chandra as recognition and celebration of his outstanding contributions to the fields of architecture and design, his innovative strategies, and his unwavering commitment to excellence.",
    date: "28th June 2024"
  }
];

const awardsData = [
  { id: 1, title: "Most Promising Personality in Healthcare Planning & Architecture", event: "Medgate Today – 13th MT India Healthcare Awards 2023, New Delhi", date: "28th April 2023" },
  { id: 2, title: "Top 50 Healthcare & Medtech Leaders 2023", event: "Medgate Today Magazine", date: "June 2023" },
  { id: 3, title: "Golden Door Award for Excellent Consultancy & Service in Architecture and Design Domain", event: "The Elite Architecture & Interior Design Awards & Conference 2024, Hotel Hyatt Centric, Goa", date: "29th June 2024" },
  { id: 4, title: "Top 50 Healthcare & Medtech Leaders 2024-25", event: "Medgate Today Magazine", date: "January 2025" },
  { id: 5, title: "Excellence in Healthcare Architecture & Design", event: "TIMES Leaders of Tomorrow – Seaboard Summit, Goa", date: "26th November 2025" }
];

const publicationsData = [
  { id: 1, publication: "Business Touch", date: "Apr-May 2023", title: "Profile Feature for '10 Top-notch Versatile Business Leader to Watch 2023'" },
  { id: 2, publication: "Medgate Today", date: "June 2023", title: "Profile Feature in 'Top 50 Healthcare & Medtech Leaders 2023'" },
  { id: 3, publication: "Commercial Design", date: "30 Mar 2024", title: "Rapid-fire round with Bakul Chandra: Insights into design, inspiration, and mentoring" },
  { id: 4, publication: "WFM Media", date: "Mar-Apr 2024", title: "Cutting-edge Cladding Solutions and Smart & Environmentally Friendly Choices" },
  { id: 5, publication: "Healthcare Radius", date: "June 2024", title: "Cover Story: Addressing India’s Rural Care Gap" },
  { id: 6, publication: "WFM Media", date: "Sep 2024", title: "Cutting-edge Cladding Solutions and Smart, Environmentally Responsible Choices" },
  { id: 7, publication: "Times of India", date: "Nov 2024", title: "Possession Prep 101" },
  { id: 8, publication: "Interiors & Décor", date: "Dec 2024", title: "Signature Spaces" },
  { id: 9, publication: "Medgate Today", date: "Jan 2025", title: "Profile Feature in 'Top 50 Healthcare & Medtech Leaders 2024-25'" },
  { id: 10, publication: "Times of India", date: "Feb 2025", title: "Budget 2025 – Can realty catch a tax break" },
  { id: 11, publication: "Express Healthcare", date: "Feb 2025", title: "Key to future-proof hospitals" },
  { id: 12, publication: "Reality First", date: "Feb 2025", title: "Designing Resilient Outdoor Spaces" },
  { id: 13, publication: "MGS Architecture", date: "Feb 2025", title: "Shift towards sustainability, technological advancements and human-centric Design" },
  { id: 14, publication: "Hindustan Times", date: "Feb 2025", title: "The Art of Cosy" },
  { id: 15, publication: "Times of India", date: "June 2025", title: "How to prepare homes for summer" },
  { id: 16, publication: "Construction Week", date: "July 2025", title: "Is Maharashtra Government’s 10% additional carpet area incentive enough" },
  { id: 17, publication: "Commercial Design", date: "July 2025", title: "Balance, Beauty & Beyond: An Exclusive Interview" },
  { id: 18, publication: "WFM Media", date: "Nov-Dec 2025", title: "The Intelligent Envelope – Redefining the Future of Façade and Fenestration" },
  { id: 19, publication: "The Hindu", date: "13 Dec 2025", title: "Rethinking Scale in India’s Healthcare" },
  { id: 20, publication: "Healthcare Radius", date: "Jan 2026", title: "India Healthcare Outlook" },
  { id: 21, publication: "The Hindu", date: "15 Feb 2026", title: "Designing the New Arena: The Rise of Sports Infrastructure in India" },
  { id: 22, publication: "Prime Insights", date: "Apr 2026", title: "Redefining Sustainable Architecture with Data-Driven Design" }
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const MediaBody = () => {

  const carouselRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: carouselRef });

  return (
    // Note: Removed global padding (px) and max-width from the main wrapper. 
    // Using flex col with gap to maintain the vertical spacing exactly like before.
    <main className="w-full bg-black text-white font-['Archivo'] py-8 md:py-16 selection:bg-white selection:text-black flex flex-col gap-10 md:gap-20">
        
        {/* HONORS SECTION - Fixed Width & Padding */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto px-6 md:px-0"
        >
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-normal tracking-wide text-white">
              <span className="text-gray-600 mr-3 md:mr-4">•</span>Honors
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {honorsData.map((honor) => (
              <motion.div 
                variants={itemVariants}
                key={honor.id} 
                className="border border-[#222222] bg-[#080808] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 group transition-all duration-500 hover:border-gray-500 shadow-lg"
              >
                <div className="max-w-3xl space-y-4 md:space-y-5">
                  <h3 className="text-2xl md:text-3xl font-normal leading-snug text-white">
                    {honor.title}
                  </h3>
                  <p className="text-gray-500 font-medium tracking-wide uppercase text-xs md:text-sm">
                    Conferred by <span className="text-gray-300">{honor.conferredBy}</span>
                  </p>
                  <p className="text-[#999999] leading-relaxed text-sm md:text-base font-light">
                    {honor.description}
                  </p>
                </div>
                <div className="shrink-0 border border-[#333333] rounded-full px-6 py-3 text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300 w-full md:w-auto text-center mt-4 md:mt-0 transition-colors group-hover:bg-white group-hover:text-black">
                  {honor.date}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AWARDS SECTION - Fixed Width & Padding */}
        <motion.section
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto px-6 md:px-0"
        >
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-normal tracking-wide text-white">
              <span className="text-gray-600 mr-3 md:mr-4">•</span>Awards
            </h2>
          </motion.div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-8 relative">
            {awardsData.map((award, index) => {
              const isLastOdd = index === awardsData.length - 1 && awardsData.length % 2 !== 0;

              return (
                <div 
                  key={award.id}
                  className={`sticky md:static top-0 md:top-auto pt-6 md:pt-0 w-full ${
                    isLastOdd ? 'md:col-span-2 md:justify-self-center md:w-[calc(50%-0.75rem)]' : ''
                  }`}
                  style={{ 
                    top: `calc(10vh + ${index * 1.5}rem)`, 
                    zIndex: index 
                  }}
                >
                  <motion.div 
                    variants={itemVariants}
                    className="group border border-[#333333] bg-[#0a0a0a] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[250px] w-full transition-all duration-500 hover:bg-white hover:text-black cursor-default shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.8)] md:shadow-none"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 leading-tight text-white group-hover:text-black transition-colors duration-500">
                        "{award.title}"
                      </h3>
                      <p className="text-sm text-[#888888] font-light group-hover:text-gray-800 transition-colors duration-500">
                        {award.event}
                      </p>
                    </div>
                    <div className="mt-6 md:mt-8 pt-4 border-t border-[#333333] group-hover:border-gray-300 transition-colors duration-500">
                      <p className="text-xs font-medium uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-500">
                        {award.date}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* FEATURED MEDIA SECTION - 100% FULL WIDTH */}
        <div className="w-full">
            <FeaturedMedia />
        </div>

        {/* PUBLICATIONS SECTION - Fixed Width & Padding */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto px-6 md:px-0"
        >
          <motion.div variants={itemVariants} className="mb-8 md:mb-12 flex justify-between items-end">
            <h2 className="text-3xl md:text-4xl font-normal tracking-wide text-white">
              <span className="text-gray-600 mr-3 md:mr-4">•</span>Publications & Media
            </h2>
            
            {/* Mobile "Swipe" Text Hint (Optional: User ko aur clear karne ke liye) */}
            {/* <span className="md:hidden text-xs font-light text-gray-500 uppercase tracking-widest animate-pulse">
              Swipe <span className="text-lg leading-none align-middle">&rarr;</span>
            </span> */}
          </motion.div>
          
          <div 
               ref={carouselRef} // Scroll track karne ke liye ref attach kiya
               className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-stretch gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory touch-pan-x scrollbar-hide"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {publicationsData.map((pub) => (
              <motion.div 
                variants={itemVariants}
                key={pub.id} 
                // FIX: Changed w-[85vw] to w-[78vw] on mobile so the next card ALWAYS "peeks"
                className="flex-none w-[78vw] sm:w-[45vw] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-center group flex flex-col border border-[#222222] bg-[#080808] rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-400 hover:bg-[#111111]"
              >
                <div className="w-full h-40 md:h-48 bg-[#111] relative overflow-hidden border-b border-[#222222]">
                  <img 
                    src={`https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3`} 
                    alt={pub.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-1 justify-between">
                  <div className="mb-6">
                    <h3 className="text-base md:text-lg font-normal leading-snug text-gray-200 group-hover:text-white transition-colors duration-300 line-clamp-3">
                      {pub.title}
                    </h3>
                  </div>
                  
                  <div className="pt-4 border-t border-[#333333] flex items-center justify-between mt-auto">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#aaaaaa] uppercase group-hover:text-white transition-colors">
                      {pub.publication}
                    </span>
                    <span className="text-[10px] md:text-xs font-medium tracking-widest text-[#666666] uppercase group-hover:text-gray-400 transition-colors">
                      {pub.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NEW: MOBILE SCROLL PROGRESS BAR */}
          <div className="md:hidden w-full mt-6 flex justify-center">
            <div className="w-full max-w-[150px] h-1 bg-[#222222] rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-gray-400 rounded-full"
                    style={{ 
                        scaleX: scrollXProgress, // As user swipes, bar fills
                        transformOrigin: "left" 
                    }}
                />
            </div>
          </div>

        </motion.section>

      {/* Global CSS for hiding scrollbar in Webkit browsers (Chrome, Safari, iOS) */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </main>
  );
};

export default MediaBody;