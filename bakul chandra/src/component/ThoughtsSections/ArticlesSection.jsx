import React from 'react';
import { motion } from 'framer-motion';

// Sabhi 24 Articles ka actual data
const articlesData = [
    {
        id: 29,
        title: "The Institutional Project Is Political",
        excerpt: "Institutional projects are never just architectural exercises. They are...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img29_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/institutional-project-political-bakul-chandra-vq7mc/?trackingId=P7%2BAr9uzQ%2BKnVWhrjYHesA%3D%3D"
    },
    {
        id: 28,
        title: "The Architect as Systems Strategist",
        excerpt: "If the previous articles argue that infrastructure shapes opportunity, lan...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img28_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/architect-systems-strategist-bakul-chandra-g6ooc/?trackingId=P7%2BAr9uzQ%2BKnVWhrjYHesA%3D%3D"
    },
    {
        id: 27,
        title: "The Hospital India Needs Is Not The Hospital India Is Building",
        excerpt: "Affordable healthcare is not achieved by reducing cost. It is achieved by...",
        author: "Bakul Chandra",
        readTime: "3 min read",
        imageUrl: "/articles/img27_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/hospital-india-needs-building-bakul-chandra-zb2gc/?trackingId=P7%2BAr9uzQ%2BKnVWhrjYHesA%3D%3D"
    },
    {
        id: 26,
        title: "Studio is Not the City",
        excerpt: "Architecture school teaches composition, abstraction, and conceptual clarity...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img26_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/studio-city-bakul-chandra-818fc?utm_source=share&utm_medium=member_android&utm_campaign=share_via"
    },
    {
        id: 25,
        title: "7 Shifts Shaping Architecture in India — 2026",
        excerpt: "Sustainability in India is no longer a “feature”—it’s the baseline. If your building...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img25_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/7-shifts-shaping-architecture-india-2026-bakul-chandra-bomlc?utm_source=share&utm_medium=member_android&utm_campaign=share_via"
    },
    {
        id: 24,
        title: "Why Hospital Facades Matter More Than We Think",
        excerpt: "Project: SANTOM HOSPITAL Sonepat, Haryana Design by: Renascent...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img24_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/why-hospital-facades-matter-more-than-we-think-bakul-chandra-rqphf/?trackingId=oYrtSyi%2FQ%2BmcnI9hWRll8w%3D%3D"
    },
    {
        id: 23,
        title: "When Good Architecture Goes Bad: The Perils of Non-Technic...",
        excerpt: "In architecture, collaboration is everything. A well-executed project is...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img23_result.webp",
        linkedinUrl: "http://linkedin.com/pulse/when-good-architecture-goes-bad-perils-non-technical-advisors-bakul-tgfac?utm_source=share&utm_medium=member_android&utm_campaign=share_via"
    },
    {
        id: 22,
        title: "Success Demands Sacrifice",
        excerpt: "In a world dazzled by highlight reels, overnight success stories, and filtered...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img22_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/success-demand-sacrifice-bakul-chandra-wynzc/?trackingId=oYrtSyi%2FQ%2BmcnI9hWRll8w%3D%3D"
    },
    {
        id: 21,
        title: "Building More Than Structures: Management, Teamwork, and...",
        excerpt: "Architecture isn't just about buildings—it's about people. But behind every...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img21_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/building-more-than-structures-management-teamwork-bakul-chandra-azphc/?trackingId=oYrtSyi%2FQ%2BmcnI9hWRll8w%3D%3D"
    },
    {
        id: 20,
        title: "A Man Without Enemies Is Nothing",
        excerpt: "In architecture, being liked by everyone can feel or seem like succes...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img20_result.webp",
        linkedinUrl: "#"
    },
    {
        id: 19,
        title: "A Leader Is Anyone Willing to Help",
        excerpt: "Leadership is often misunderstood. We tie it to titles, corner offices, or...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img19_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/leader-anyone-willing-help-bakul-chandra-zu2mc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 18,
        title: "Modern Design Meets Traditional Materials",
        excerpt: "This building façade showcases a thoughtful blend of modern...",
        author: "Bakul Chandra",
        readTime: "1 min read",
        imageUrl: "/articles/img18_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/modern-design-meets-traditional-materials-bakul-chandra-hdqnc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 17,
        title: "It's Not About You – Arrogance and Fear Keep You from...",
        excerpt: "The world is bigger than your ego. Arrogance blinds. Fear binds. And,...",
        author: "Bakul Chandra",
        readTime: "1 min read",
        imageUrl: "/articles/img17_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/its-you-arrogance-fear-keep-from-greatness-bakul-chandra-4hiac/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 16,
        title: "From Aspiration to Inspiration: MY JOURNEY TO THE COVER O...",
        excerpt: "Some stories take years to unfold. I can't help but think about the journe...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img16_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/from-aspiration-inspiration-my-journey-cover-design-magazine-chandra-oebhc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 15,
        title: "ARCHITECTURE IS A SYSTEM BEFORE IT IS A SHAPE: Principl...",
        excerpt: "Architecture does not fail because of ambition. It fails because decisions ar...",
        author: "Bakul Chandra",
        readTime: "1 min read",
        imageUrl: "/articles/img15_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/architecture-system-before-shape-principles-from-practice-chandra-nuhwc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 14,
        title: "Clarity Before Concrete",
        excerpt: "In most projects, the real failures do not occur during construction. They...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img14_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/clarity-before-concrete-bakul-chandra-hev0c/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 13,
        title: "Hospitals Are Not Buildings. They Are Systems.",
        excerpt: "Hospitals are often discussed as buildings—square footage,...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img13_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/hospitals-buildings-systems-bakul-chandra-kwm0c/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 12,
        title: "The Cost of Late Decisions",
        excerpt: "Late decisions are often described as flexibility. In reality, they are usually...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img12_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/cost-late-decisions-bakul-chandra-e1xdc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 11,
        title: "Sustainability Is Quiet",
        excerpt: "Sustainability is often discussed as a feature. In practice, it is a...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img11_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/sustainability-quiet-bakul-chandra-dcqqc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 10,
        title: "Judgment Is The Architect's Real Skill",
        excerpt: "Talent is visible. Judgment is invisible—and far more important. In emerging...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img10_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/judgment-architects-real-skill-bakul-chandra-nxcrc/?trackingId=P7%2BAr9uzQ%2BKnVWhrjYHesA%3D%3D"
    },
    {
        id: 9,
        title: "Buildings Must Age",
        excerpt: "Most buildings are designed for completion, not for time. Drawings...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img9_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/buildings-must-age-bakul-chandra-pcg3c/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 8,
        title: "Infrastructure Determines Urban Form",
        excerpt: "Architects like to believe cities grow from drawings. They don't. Cities gro...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img8_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/infrastructure-determines-urban-form-bakul-chandra-wr2pc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 7,
        title: "Land Economics Is the Real Design Brief",
        excerpt: "Architects are trained to begin with site, climate, and concept. In reality,...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img7_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/land-economics-real-design-brief-bakul-chandra-jxjrc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 6,
        title: "Climate Is a Non-Negotiable Client",
        excerpt: "For decades, climate was treated as a constraint. Today, it is the primary...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img6_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/climate-non-negotiable-client-bakul-chandra-fs9gc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 5,
        title: "Regulation Is Invisible Architecture",
        excerpt: "Most architects treat regulation as a constraint. In truth, it is authorship....",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img5_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/regulation-invisible-architecture-bakul-chandra-uhilc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 4,
        title: "If You Don't Know It by Now, You Won't Learn It Tonight",
        excerpt: "There's a strange kind of confidence that comes not from last-minute...",
        author: "Bakul Chandra",
        readTime: "3 min read",
        imageUrl: "/articles/img4_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/you-dont-know-now-wont-learn-tonight-bakul-chandra-rweic/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 3,
        title: "Notes on Architecture, Strategy, and Responsibility",
        excerpt: "Over the years, I have found that the most important lessons in architectur...",
        author: "Bakul Chandra",
        readTime: "3 min read",
        imageUrl: "/articles/img3_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/notes-architecture-strategy-responsibility-bakul-chandra-q39lc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 2,
        title: "Public-Private Alignment Shapes Outcomes",
        excerpt: "Cities are not built by architects alone. They are shaped by governments,...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img2_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/publicprivate-alignment-shapes-outcomes-bakul-chandra-hheoc/?trackingId=sJ9QTNjxTquXrz0UFJnTOg%3D%3D"
    },
    {
        id: 1,
        title: "Design is not art. Design is solving problems.",
        excerpt: "Design is not art. It is not self-expression. It is not a performance...",
        author: "Bakul Chandra",
        readTime: "1 min read",
        imageUrl: "/articles/img1_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/design-art-solving-problems-bakul-chandra-8mduc/?trackingId=sJ9QTNjxTquXrz0UFJnTOg%3D%3D"
    }
];

// Single Article Card Component
const ArticleCard = ({ article }) => {
    return (
        <motion.a
            href={article.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group flex flex-col bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-[#9F1C44]/50 transition-all duration-500 shadow-lg hover:shadow-2xl"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/9] overflow-hidden bg-black/50">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-5 md:p-6 space-y-3">
                <h3 className="text-lg md:text-[20px] font-normal text-gray-200 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                    {article.title}
                </h3>

                <p className="text-sm text-zinc-500 font-light line-clamp-2 flex-grow leading-relaxed">
                    {article.excerpt}
                </p>

                {/* Footer Section */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:shadow-[0_0_8px_#9F1C44] transition-all duration-300"></span>
                        {article.author}
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium group-hover:text-zinc-300 transition-colors">
                        {article.readTime}
                    </span>
                </div>
            </div>
        </motion.a>
    );
};

// Main Grid Section Component
const ArticlesSection = () => {
    return (
        <section className="w-full bg-black text-white py-16 md:py-24 px-5 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 border-b border-white/10 pb-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-light tracking-wide text-white hidden md:block"
                    >
                        Thoughts in Prose
                    </motion.h2>
                    <motion.a
                        href="https://www.linkedin.com/in/bakul-chandra-ba1a995/recent-activity/articles/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[16px] text-gray-400 hover:text-white transition-colors flex items-center gap-2 tracking-wide font-light"
                    >
                        View all on LinkedIn <span className="text-lg leading-none mt-[-2px]">↗</span>
                    </motion.a>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {articlesData.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ArticlesSection;
