import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import FeaturedMedia from '../HomeSections/FeaturedMedia';

// --- DATA (Yahan aap apne extracted exact links aur images ke paths dal sakte hain) ---
const publicationsData = [
  { 
    id: 1, 
    publication: "Hospital Infrabiz", 
    date: "May-June 2022", 
    title: "Profile Feature for 'Healthcare Architects', Vol.1 Issue 2",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_1.jpg" 
  },
  { 
    id: 2, 
    publication: "Silicon India Magazine", 
    date: "October 2022", 
    title: "Profile Feature for '10 Most Promising Healthcare Architecture Companies'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_2.jpg"
  },
  { 
    id: 3, 
    publication: "Business Touch Magazine", 
    date: "April-May 2023", 
    title: "Profile Feature for '10 Top-notch Versatile Business Leader to Watch 2023 – Bakul Chandra & Varun Agarwal'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_3.jpg"
  },
  { 
    id: 4, 
    publication: "Medgate Today Magazine", 
    date: "June 2023", 
    title: "Profile Feature of 'Bakul Chandra – Renascent Consultants' in 'Top 50 Healthcare & Medtech Leaders 2023'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_4.jpg"
  },
  { 
    id: 5, 
    publication: "Medgate Today", 
    date: "July 2023", 
    title: "Profile Feature of 'Renascent Consultants' in E – Coffee Table Book for 'Top Healthcare Infrastructure Companies – Medgate Today’s Survey 2022'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_5.jpg"
  },
  { 
    id: 6, 
    publication: "Healthcare Radius", 
    date: "February 2024", 
    title: "Coverage in Vol.12 Issue 5 for their article 'Healing With Sustainability'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_6.jpg"
  },
  { 
    id: 7, 
    publication: "Commercial Design", 
    date: "30 March 2024", 
    title: "Rapid-fire round with Bakul Chandra: Insights into design, inspiration, and mentoring",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_7.jpg"
  },
  { 
    id: 8, 
    publication: "WFM Media – Window & Façade Magazine", 
    date: "Mar-Apr 2024", 
    title: "Cutting-edge Cladding Solutions and Smart & Environmentally Friendly Choices",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_8.jpg"
  },
  { 
    id: 9, 
    publication: "Healthcare Radius Magazine", 
    date: "June 2024", 
    title: "Cover Story on 'Addressing India’s Rural Care Gap'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_9.jpg"
  },
  { 
    id: 10, 
    publication: "Architects & Interiors India", 
    date: "July 2024", 
    title: "Graphic Era Institute of Medical Science – Take a leap into the future of healthcare with 1.5 million sq.ft. ecosystem",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_10.jpg"
  },
  { 
    id: 11, 
    publication: "Ace Update magazine", 
    date: "July 2024", 
    title: "Sustainable Healthcare Design of Graphic Era Hospital",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_11.jpg"
  },
  { 
    id: 12, 
    publication: "Archello", 
    date: "September 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_12.jpg"
  },
  { 
    id: 13, 
    publication: "WFM Media – Window & Façade Magazine", 
    date: "September 2024", 
    title: "Cutting-edge Cladding Solutions and Smart, Environmentally Responsible Choices for the Future of Architecture",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_13.jpg"
  },
  { 
    id: 14, 
    publication: "Design Dekko", 
    date: "October 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_14.jpg"
  },
  { 
    id: 15, 
    publication: "Architectural & Builders Magazine", 
    date: "October 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_15.jpg"
  },
  { 
    id: 16, 
    publication: "Times of India", 
    date: "November 2024", 
    title: "Possession Prep 101 featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_16.jpg"
  },
  { 
    id: 17, 
    publication: "Biltrax Media", 
    date: "December 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_17.jpg"
  },
  { 
    id: 18, 
    publication: "Medgate Today Magazine", 
    date: "January 2025", 
    title: "Profile Feature of 'Bakul Chandra – Renascent Consultants' in 'Top 50 Healthcare & Medtech Leaders 2024-25'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_18.jpg"
  },
  { 
    id: 19, 
    publication: "Interiors & Décor magazine", 
    date: "Dec 2024 – Jan 2025", 
    title: "Signature Spaces featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_19.jpg"
  },
  { 
    id: 20, 
    publication: "Times of India", 
    date: "February 2025", 
    title: "Budget 2025 – Can realty catch a tax break featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_20.jpg"
  },
  { 
    id: 21, 
    publication: "Express Healthcare", 
    date: "February 2025", 
    title: "Key to future-proof hospitals featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_21.jpg"
  },
  { 
    id: 22, 
    publication: "Reality First Magazine", 
    date: "February 2025", 
    title: "Designing Resilient Outdoor Spaces featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_22.jpg"
  },
  { 
    id: 23, 
    publication: "MGS Architecture magazine", 
    date: "February 2025", 
    title: "Shift towards sustainability, technological advancements and human-centric Design",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_23.jpg"
  },
  { 
    id: 24, 
    publication: "Hindustan Times", 
    date: "February 2025", 
    title: "The Art of Cosy featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_24.jpg"
  },
  { 
    id: 25, 
    publication: "Love That Design (Dubai)", 
    date: "April 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_25.jpg"
  },
  { 
    id: 26, 
    publication: "Architect & Interior India", 
    date: "April 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_26.jpg"
  },
  { 
    id: 27, 
    publication: "Ace Design Sense magazine", 
    date: "May 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_27.jpg"
  },
  { 
    id: 28, 
    publication: "Commercial Design magazine", 
    date: "May 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_28.jpg"
  },
  { 
    id: 29, 
    publication: "Times of India", 
    date: "June 2025", 
    title: "How to prepare homes for summer featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_29.jpg"
  },
  { 
    id: 30, 
    publication: "Work Design magazine", 
    date: "June 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_30.jpg"
  },
  { 
    id: 31, 
    publication: "India Art n Design magazine", 
    date: "June 2025", 
    title: "Coverage on 'PIECO India Office' under category 'Design with Constraints'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_31.jpg"
  },
  { 
    id: 32, 
    publication: "Building Material Reporter", 
    date: "June 2025", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_32.jpg"
  },
  { 
    id: 33, 
    publication: "Architectural & Builders", 
    date: "July 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_33.jpg"
  },
  { 
    id: 34, 
    publication: "Construction Week India", 
    date: "July 2025", 
    title: "Is Maharashtra Government’s 10% additional carpet area incentive enough",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_34.jpg"
  },
  { 
    id: 35, 
    publication: "Commercial Design India", 
    date: "July 2025", 
    title: "Balance, Beauty & Beyond: An Exclusive Interview with Dr. Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media_images/media_35.jpg"
  },
  { 
    id: 36, 
    publication: "Architect & Interior India", 
    date: "August 2025", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_36.jpg"
  },
  { 
    id: 37, 
    publication: "Design Pataki & Design Democracy", 
    date: "Aug-Sep 2025", 
    title: "Coverage of PIECO Corporate Office under 'Workplace Design'",
    link: "https://www.designpataki.com/three-offices-show-the-future-of-work-is-drenched-in-colour/",
    image: "/media/37.png"
  },
  { 
    id: 38, 
    publication: "Architecture + Design Magazine India", 
    date: "November 2025", 
    title: "Cover Feature on 'RENASCENT CONSULTANTS – The Architecture of Human Wellbeing'",
    link: "https://renascent.co.in/top-trends-by-leading-healthcare-architects-in-india-2/",
    image: "/media/38.png"
  },
  { 
    id: 39, 
    publication: "The Hindu", 
    date: "13th December 2025", 
    title: "Rethinking Scale in India’s Healthcare featuring Bakul Chandra",
    link: "https://www.thehindu.com/life-and-style/homes-and-gardens/rethinking-scale-in-indias-healthcare/article70384406.ece",
    image: "/media/media_39.jpg"
  },
  { 
    id: 40, 
    publication: "Healthcare Radius", 
    date: "January 2026", 
    title: "India Healthcare Outlook featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/media_40.jpg"
  },
  { 
    id: 41, 
    publication: "WFM Media", 
    date: "Nov-Dec 2025", 
    title: "The Intelligent Envelope – Redefining the Future of Façade and Fenestration",
    link: "https://wfmmedia.com/the-intelligent-envelope-redefining-the-future-of-facade-and-fenestration/",
    image: "/media/41.png"
  },
  { 
    id: 42, 
    publication: "The Hindu", 
    date: "15th February 2026", 
    title: "Designing the New Arena: The Rise of Sports Infrastructure in India",
    link: "https://www.thehindu.com/life-and-style/homes-and-gardens/designing-the-new-arena-the-rise-of-sports-infrastructure-in-india/article70590826.ece",
    image: "/media/42.png"
  },
  { 
    id: 43, 
    publication: "Prime Insights Magazine", 
    date: "April 2026", 
    title: "Redefining Sustainable Architecture with Data-Driven Design and Future-Ready Built Environments",
    link: "https://www.instagram.com/p/DIOXtwmzFw_/?img_index=2",
    image: "/media/43.png"
  },
  { 
    id: 44, 
    publication: "Window & Façade Magazine", 
    date: "May-June 2026", 
    title: "Façades Should Be Timeless Rather Than Fashionable featuring Bakul Chandra",
    link: "https://www.linkedin.com/posts/bakul-chandra-ba1a995_fa%C3%A7ades-should-be-timeless-rather-than-fashionable-ugcPost-7488205326572478464-GzXy/",
    image: "/media/44.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const MediaBody = () => {
  const carouselRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: carouselRef });

  return (
    <main className="w-full bg-black text-white font-['Archivo'] py-8 md:py-16 selection:bg-white selection:text-black flex flex-col gap-10 md:gap-20">
        <div className="w-full">
            <FeaturedMedia />
        </div>

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
          </motion.div>
          
          <div 
             ref={carouselRef}
             className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-stretch gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory touch-pan-x scrollbar-hide"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {publicationsData.map((pub) => (
              <motion.div 
                variants={itemVariants}
                key={pub.id} 
                className="flex-none w-[78vw] sm:w-[45vw] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] snap-center group flex flex-col border border-[#222222] bg-[#080808] rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-400 hover:bg-[#111]"
              >
                {/* Clickable Card Wrapper linking to the publication */}
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col flex-1 cursor-pointer"
                >
                  <div className="w-full h-40 md:h-48 bg-[#111] relative overflow-hidden border-b border-[#222222]">
                    <img 
                      src={pub.image} 
                      alt={pub.title}
                      onError={(e) => {
                        // Fallback agar image load na ho toh default placeholder dikhaye
                        e.target.src = "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=600&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-1 justify-between">
                    <div className="mb-6">
                      <h3 className="text-base md:text-lg font-normal leading-snug text-gray-200 group-hover:text-white transition-colors duration-300 line-clamp-3">
                        {pub.title}
                      </h3>
                    </div>
                  </div>
                </a>
                
                <div className="px-5 pb-5 md:px-6 md:pb-6 pt-4 border-t border-[#333333] flex items-center justify-between mt-auto">
                  <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#aaaaaa] uppercase group-hover:text-white transition-colors">
                    {pub.publication}
                  </span>
                  <span className="text-[10px] md:text-xs font-medium tracking-widest text-[#666666] uppercase group-hover:text-gray-400 transition-colors">
                    {pub.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden w-full mt-6 flex justify-center">
            <div className="w-full max-w-[150px] h-1 bg-[#222222] rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-gray-400 rounded-full"
                    style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
                />
            </div>
          </div>
        </motion.section>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}} />
    </main>
  );
};

export default MediaBody;