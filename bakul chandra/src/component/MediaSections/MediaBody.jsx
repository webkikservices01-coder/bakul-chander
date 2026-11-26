import React from 'react';
import AutoSlider, { SliderCard } from '../AutoSlider';

// --- DATA (Yahan aap apne extracted exact links aur images ke paths dal sakte hain) ---
const publicationsData = [
  { 
    id: 1, 
    publication: "Hospital Infrabiz", 
    date: "May – June 2022", 
    title: "Profile Feature for 'Healthcare Architects', Vol.1 Issue 2",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/1.png" 
  },
  { 
    id: 2, 
    publication: "Silicon India Magazine", 
    date: "October 2022", 
    title: "Profile Feature for '10 Most Promising Healthcare Architecture Companies'",
    link: "https://www.siliconindia.com/healthcare/ranking/top-10-healthcare-architecture-companies-%C2%AD-2022-rid-1671.html",
    image: "/media/2.png"
  },
  { 
    id: 3, 
    publication: "Business Touch Magazine", 
    date: "April – May 2023", 
    title: "Profile Feature for '10 Top Notch Versatile Business Leader to Watch 2023 – Bakul Chandra & Varun Agarwal'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/45.png"
  },
  { 
    id: 4, 
    publication: "Medgate Today Magazine", 
    date: "June 2023", 
    title: "Profile Feature of 'Bakul Chandra – Renascent Consultants' in 'Top 50 Healthcare & Medtech Leaders 2023'",
    link: "https://fliphtml5.com/esnfh/djam/Aug-Medgatetoday-2023-web-final/",
    image: "/media/4.png"
  },
  { 
    id: 5, 
    publication: "Medgate Today", 
    date: "July 2023", 
    title: "Profile Feature of 'Renascent Consultants' in E – Coffee Table Book for 'Top Healthcare Infrastructure Companies – Medgate Today’s Survey 2022'",
    link: "https://renascent.co.in/ai-in-healthcare-infrastructure/",
    image: "/media/5.png"
  },
  { 
    id: 6, 
    publication: "Healthcare Radius", 
    date: "February 2024", 
    title: "Coverage in Vol.12 Issue 5 for their article 'Healing With Sustainability'",
    link: "https://www.healthcareradius.in/projects/24448-sustainability-in-healthcare-by-siddharth-puri",
    image: "/media/6.png"
  },
  { 
    id: 7, 
    publication: "Commercial Design", 
    date: "30 March 2024", 
    title: "Rapid Fire round with Bakul Chandra: Insights into design, inspiration, and mentoring",
    link: "https://www.commercialdesignindia.com/people/rapid-fire-round-with-bakul-chandra-co-founder-mentor-design-strategist-insights-into-design-inspiration-and-mentoring-2",
    image: "/media/7.png"
  },
  { 
    id: 8, 
    publication: "WFM Media – Window & Façade Magazine", 
    date: "Mar – Apr 2024", 
    title: "Cutting Edge Cladding Solutions and Smart & Environmentally Friendly Choices",
    link: "https://wfmmedia.com/cutting-edge-cladding-solutions/",
    image: "/media/8.png"
  },
  { 
    id: 9, 
    publication: "Healthcare Radius Magazine", 
    date: "June 2024", 
    title: "Cover Story on 'Addressing India’s Rural Care Gap'",
    link: "https://www.healthcareradius.in/features/wellness/bridging-indias-urban-rural-healthcare-divide",
    image: "/media/9.png"
  },
  { 
    id: 10, 
    publication: "Architects & Interiors India", 
    date: "July 2024", 
    title: "Graphic Era Institute of Medical Science – Take a leap into the future of healthcare with 1.5 million sq.ft. ecosystem",
    link: "https://www.architectandinteriorsindia.com/projects/take-a-leap-into-the-future-of-healthcare-with-1-5-million-sq-ft-of-patient-centric-ecosystem-in-uttarakhand",
    image: "/media/10.png"
  },
  { 
    id: 11, 
    publication: "Ace Update magazine", 
    date: "July 2024", 
    title: "Sustainable Healthcare Design of Graphic Era Hospital",
    link: "https://aceupdate.com/sustainable-healthcare-design-of-graphic-era-hospital/",
    image: "/media/11.png"
  },
  { 
    id: 12, 
    publication: "Archello", 
    date: "September 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "https://archello.com/project/graphic-era-hospital",
    image: "/media/12.png"
  },
  { 
    id: 13, 
    publication: "WFM Media – Window & Façade Magazine", 
    date: "September 2024", 
    title: "Cutting Edge Cladding Solutions and Smart, Environmentally Responsible Choices for the Future of Architecture",
    link: "https://wfmmedia.com/cutting-edge-cladding-solutions/",
    image: "/media/13.png"
  },
  { 
    id: 14, 
    publication: "Design Dekko", 
    date: "October 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "https://www.instagram.com/p/DMxkXG8T84H/",
    image: "/media/14.png"
  },
  { 
    id: 15, 
    publication: "Architectural & Builders Magazine", 
    date: "October 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/15.png"
  },
  { 
    id: 16, 
    publication: "Times of India", 
    date: "November 2024", 
    title: "Possession Prep 101 featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/16.png"
  },
  { 
    id: 17, 
    publication: "Biltrax Media", 
    date: "December 2024", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "https://www.biltraxmedia.com/graphic-era-hospital-renascent-consultants/",
    image: "/media/17.png"
  },
  { 
    id: 18, 
    publication: "Medgate Today Magazine", 
    date: "January 2025", 
    title: "Profile Feature of 'Bakul Chandra – Renascent Consultants' in 'Top 50 Healthcare & Medtech Leaders 2024 – 25'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/18.png"
  },
  { 
    id: 19, 
    publication: "Interiors & Décor magazine", 
    date: "Dec 2024 – Jan 2025", 
    title: "Signature Spaces featuring Bakul Chandra",
    link: "https://www.instagram.com/p/DRRPFSVDRHQ/",
    image: "/media/19.png"
  },
  { 
    id: 20, 
    publication: "Times of India", 
    date: "February 2025", 
    title: "Budget 2025 – Can realty catch a tax break featuring Bakul Chandra",
    link: "https://www.instagram.com/p/DFfXooez2wC/?hl=en",
    image: "/media/20.png"
  },
  { 
    id: 21, 
    publication: "Express Healthcare", 
    date: "February 2025", 
    title: "Key to future proof hospitals featuring Bakul Chandra",
    link: "https://www.instagram.com/p/DWs4yEdgLB2/",
    image: "/media/21.png"
  },
  { 
    id: 22, 
    publication: "Reality First Magazine", 
    date: "February 2025", 
    title: "Designing Resilient Outdoor Spaces featuring Bakul Chandra",
    link: "https://www.instagram.com/p/DRRPFSVDRHQ/?img_index=2",
    image: "/media/22.png"
  },
  { 
    id: 23, 
    publication: "MGS Architecture magazine", 
    date: "February 2025", 
    title: "Shift towards sustainability, technological advancements and human centric Design",
    link: "https://www.mgsarchitecture.in/",
    image: "/media/23.png"
  },
  { 
    id: 24, 
    publication: "Hindustan Times", 
    date: "February 2025", 
    title: "The Art of Cosy featuring Bakul Chandra",
    link: "https://www.hindustantimes.com/lifestyle/art-culture/art-of-cosy-interior-decor-experts-reveal-warm-design-trends-that-foster-emotional-well-being-at-home-101738854591290.html",
    image: "/media/24.png"
  },
  { 
    id: 25, 
    publication: "Love That Design (Dubai)", 
    date: "April 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "https://www.instagram.com/p/DMNLZKUxefn/",
    image: "/media/25.png"
  },
  { 
    id: 26, 
    publication: "Architect & Interior India", 
    date: "April 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "https://www.architectandinteriorsindia.com/projects/breathe-in-the-calm-of-nature-and-feel-the-inspiration-flow-in-this-7000-sq-ft-office-in-new-delhi",
    image: "/media/26.png"
  },
  { 
    id: 27, 
    publication: "Ace Design Sense magazine", 
    date: "May 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "https://www.acedesignsense.com/designing-beyond-constraints-at-pieco-office/",
    image: "/media/27.png"
  },
  { 
    id: 28, 
    publication: "Commercial Design magazine", 
    date: "May 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "https://www.commercialdesignindia.com/projects/where-light-flows-and-space-breathes-pieco-office-by-renascent-consultants-redefines-the-corporate-interior",
    image: "/media/28.png"
  },
  { 
    id: 29, 
    publication: "Times of India", 
    date: "June 2025", 
    title: "How to prepare homes for summer featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/29.png"
  },
  { 
    id: 30, 
    publication: "Work Design magazine", 
    date: "June 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "https://www.workdesign.com/2025/06/tour-piecos-new-office-a-harmonious-blend-of-functionality-and-aesthetics/",
    image: "/media/30.png"
  },
  { 
    id: 31, 
    publication: "India Art n Design magazine", 
    date: "June 2025", 
    title: "Coverage on 'PIECO India Office' under category 'Design with Constraints'",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/31.png"
  },
  { 
    id: 32, 
    publication: "Building Material Reporter", 
    date: "June 2025", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/32.png"
  },
  { 
    id: 33, 
    publication: "Architectural & Builders", 
    date: "July 2025", 
    title: "Coverage on 'PIECO India Office' featuring Renascent Consultants",
    link: "https://www.instagram.com/p/DKHXrraTGmF/",
    image: "/media/33.png"
  },
  { 
    id: 34, 
    publication: "Construction Week India", 
    date: "July 2025", 
    title: "Is Maharashtra Government’s 10% additional carpet area incentive enough",
    link: "https://www.constructionweekonline.in/business/is-maharashtra-governments-10-additional-carpet-area-incentive-enough",
    image: "/media/34.png"
  },
  { 
    id: 35, 
    publication: "Commercial Design India", 
    date: "July 2025", 
    title: "Balance, Beauty & Beyond: An Exclusive Interview with Dr. Bakul Chandra",
    link: "https://www.commercialdesignindia.com/people/balance-beauty-beyond-design-insights-from-dr-bakul-chandra-of-renascent-consultants",
    image: "/media/35.png"
  },
  { 
    id: 36, 
    publication: "Architect & Interior India", 
    date: "August 2025", 
    title: "Coverage on 'Graphic Era Hospital' featuring Renascent Consultants",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/36.png"
  },
  { 
    id: 37, 
    publication: "Design Pataki & Design Democracy", 
    date: "Aug – Sep 2025", 
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
    image: "/media/39.png"
  },
  { 
    id: 40, 
    publication: "Healthcare Radius", 
    date: "January 2026", 
    title: "India Healthcare Outlook featuring Bakul Chandra",
    link: "YAHAN_APNA_EXACT_LINK_DALO",
    image: "/media/40.png"
  },
  { 
    id: 41, 
    publication: "WFM Media", 
    date: "Nov – Dec 2025", 
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
    title: "Redefining Sustainable Architecture with Data Driven Design and Future Ready Built Environments",
    link: "https://www.instagram.com/p/DIOXtwmzFw_/?img_index=2",
    image: "/media/43.png"
  },
  { 
    id: 44, 
    publication: "Window & Façade Magazine", 
    date: "May – June 2026", 
    title: "Façades Should Be Timeless Rather Than Fashionable featuring Bakul Chandra",
    link: "https://www.linkedin.com/posts/bakul-chandra-ba1a995_fa%C3%A7ades-should-be-timeless-rather-than-fashionable-ugcPost-7488205326572478464-GzXy/",
    image: "/media/44.png"
  }
];

const MediaBody = () => {
  return (
    <main className="w-full bg-black text-white font-['Archivo'] py-10 md:py-14 px-5 md:px-12">
      <section className="w-full max-w-7xl mx-auto">
        <h2 className="heading-section mb-6">Publications and Media</h2>
        <AutoSlider
          items={publicationsData}
          getKey={(pub) => pub.id}
          renderItem={(pub) => (
            <SliderCard
              image={pub.image}
              title={pub.title}
              meta={[pub.publication, pub.date].filter(Boolean).join(' · ')}
              href={pub.link}
            />
          )}
        />
      </section>
    </main>
  );
};

export default MediaBody;
