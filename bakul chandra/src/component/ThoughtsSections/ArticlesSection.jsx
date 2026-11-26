import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// LinkedIn ke exact row-by-row visual sequence ke mutabiq
const articlesData = [
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
        id: 28,
        title: "The Architect as Systems Strategist",
        excerpt: "If the previous articles argue that infrastructure shapes opportunity, lan...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img28_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/architect-systems-strategist-bakul-chandra-g6ooc/?trackingId=P7%2BAr9uzQ%2BKnVWhrjYHesA%3D%3D"
    },
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
        id: 10,
        title: "Judgment Is The Architect's Real Skill",
        excerpt: "Talent is visible. Judgment is invisible, and far more important. In emerging...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img10_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/judgment-architects-real-skill-bakul-chandra-nxcrc/?trackingId=P7%2BAr9uzQ%2BKnVWhrjYHesA%3D%3D"
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
        title: "7 Shifts Shaping Architecture in India, 2026",
        excerpt: "Sustainability in India is no longer a “feature”. It’s the baseline. If your building...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img25_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/7-shifts-shaping-architecture-india-2026-bakul-chandra-bomlc?utm_source=share&utm_medium=member_android&utm_campaign=share_via"
    },
    {
        id: 1,
        title: "Design is not art. Design is solving problems.",
        excerpt: "Design is not art. It is not self-expression. It is not a performance...",
        author: "Bakul Chandra",
        readTime: "1 min read",
        imageUrl: "/articles/img1_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/design-art-solving-problems-bakul-chandra-8mduc/?trackingId=sJ9QTNjxTquXrz0UFJnTOg%3D%3D"
    },
    {
        id: 2,
        title: "Public Private Alignment Shapes Outcomes",
        excerpt: "Cities are not built by architects alone. They are shaped by governments,...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img2_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/publicprivate-alignment-shapes-outcomes-bakul-chandra-hheoc/?trackingId=sJ9QTNjxTquXrz0UFJnTOg%3D%3D"
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
        id: 8,
        title: "Infrastructure Determines Urban Form",
        excerpt: "Architects like to believe cities grow from drawings. They don't. Cities gro...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img8_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/infrastructure-determines-urban-form-bakul-chandra-wr2pc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
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
        id: 6,
        title: "Climate Is a Non-Negotiable Client",
        excerpt: "For decades, climate was treated as a constraint. Today, it is the primary...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img6_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/climate-non-negotiable-client-bakul-chandra-fs9gc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
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
        id: 4,
        title: "If You Don't Know It by Now, You Won't Learn It Tonight",
        excerpt: "There's a strange kind of confidence that comes not from last-minute...",
        author: "Bakul Chandra",
        readTime: "3 min read",
        imageUrl: "/articles/img4_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/you-dont-know-now-wont-learn-tonight-bakul-chandra-rweic/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
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
        id: 11,
        title: "Sustainability Is Quiet",
        excerpt: "Sustainability is often discussed as a feature. In practice, it is a...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img11_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/sustainability-quiet-bakul-chandra-dcqqc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
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
        id: 13,
        title: "Hospitals Are Not Buildings. They Are Systems.",
        excerpt: "Hospitals are often discussed as buildings: square footage,...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img13_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/hospitals-buildings-systems-bakul-chandra-kwm0c/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
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
        id: 15,
        title: "Architecture Is a System Before It Is a Shape: Principles from Practice",
        excerpt: "Architecture does not fail because of ambition. It fails because decisions ar...",
        author: "Bakul Chandra",
        readTime: "1 min read",
        imageUrl: "/articles/img15_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/architecture-system-before-shape-principles-from-practice-chandra-nuhwc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 16,
        title: "From Aspiration to Inspiration: My Journey to the Cover of Design Magazine",
        excerpt: "Some stories take years to unfold. I can't help but think about the journe...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img16_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/from-aspiration-inspiration-my-journey-cover-design-magazine-chandra-oebhc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
    },
    {
        id: 17,
        title: "It's Not About You: Arrogance and Fear Keep You from Greatness",
        excerpt: "The world is bigger than your ego. Arrogance blinds. Fear binds. And,...",
        author: "Bakul Chandra",
        readTime: "1 min read",
        imageUrl: "/articles/img17_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/its-you-arrogance-fear-keep-from-greatness-bakul-chandra-4hiac/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
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
        id: 19,
        title: "A Leader Is Anyone Willing to Help",
        excerpt: "Leadership is often misunderstood. We tie it to titles, corner offices, or...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img19_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/leader-anyone-willing-help-bakul-chandra-zu2mc/?trackingId=UxWYYfNFRU%2BodaixuPAKSw%3D%3D"
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
        id: 21,
        title: "Building More Than Structures: Management and Teamwork",
        excerpt: "Architecture isn't just about buildings. It's about people. But behind every...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img21_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/building-more-than-structures-management-teamwork-bakul-chandra-azphc/?trackingId=oYrtSyi%2FQ%2BmcnI9hWRll8w%3D%3D"
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
        id: 23,
        title: "When Good Architecture Goes Bad: The Perils of Non Technical Advisors",
        excerpt: "In architecture, collaboration is everything. A well-executed project is...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img23_result.webp",
        linkedinUrl: "http://linkedin.com/pulse/when-good-architecture-goes-bad-perils-non-technical-advisors-bakul-tgfac?utm_source=share&utm_medium=member_android&utm_campaign=share_via"
    },
    {
        id: 24,
        title: "Why Hospital Facades Matter More Than We Think",
        excerpt: "Project: SANTOM HOSPITAL Sonepat, Haryana Design by: Renascent...",
        author: "Bakul Chandra",
        readTime: "2 min read",
        imageUrl: "/articles/img24_result.webp",
        linkedinUrl: "https://www.linkedin.com/pulse/why-hospital-facades-matter-more-than-we-think-bakul-chandra-rqphf/?trackingId=oYrtSyi%2FQ%2BmcnI9hWRll8w%3D%3D"
    }
];

// Single Article Card Component
const ArticleCard = ({ article }) => {
    return (
        <a
            href={article.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group snap-start shrink-0 w-[82%] sm:w-[46%] lg:w-[31.5%] flex flex-col bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-white/40 transition-colors duration-500"
        >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-black/50">
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-5 md:p-6 space-y-3">
                <h3 className="heading-sub">
                    {article.title}
                </h3>

                <p className="text-base font-light flex-grow">
                    {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-300">
                        {article.author}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest font-medium text-zinc-300">
                        {article.readTime}
                    </span>
                </div>
            </div>
        </a>
    );
};

// LinkedIn posts slider.
// Paste the embed link of each post here (on LinkedIn: post menu "..." > "Embed this post" > copy the src URL,
// e.g. "https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890").
// The posts slider shows automatically once this list has links.
const linkedinPosts = [];

const SliderArrows = ({ onPrev, onNext }) => (
    <div className="flex gap-2">
        <button
            type="button"
            onClick={onPrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button
            type="button"
            onClick={onNext}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
    </div>
);

const slideBy = (ref, direction) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: 'smooth' });
};

const ArticlesSection = () => {
    const articlesRef = useRef(null);
    const postsRef = useRef(null);

    return (
        <section className="w-full bg-black text-white py-10 md:py-14 px-5 md:px-12 font-archivo overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* LinkedIn articles slider */}
                <div>
                    <div className="flex items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                        <a
                            href="https://www.linkedin.com/in/bakul-chandra-ba1a995/recent-activity/articles/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-zinc-300 hover:text-white transition-colors flex items-center gap-2 font-light"
                        >
                            View all on LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                        <SliderArrows onPrev={() => slideBy(articlesRef, -1)} onNext={() => slideBy(articlesRef, 1)} />
                    </div>

                    <div
                        ref={articlesRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {articlesData.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>

                {/* LinkedIn posts slider (shows once post links are added above) */}
                {linkedinPosts.length > 0 && (
                    <div>
                        <div className="flex items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                            <h2 className="heading-section">LinkedIn Posts</h2>
                            <SliderArrows onPrev={() => slideBy(postsRef, -1)} onNext={() => slideBy(postsRef, 1)} />
                        </div>
                        <div
                            ref={postsRef}
                            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {linkedinPosts.map((src) => (
                                <div key={src} className="snap-start shrink-0 w-[88%] sm:w-[46%] lg:w-[31.5%] bg-white">
                                    <iframe
                                        src={src}
                                        title="LinkedIn post by Bakul Chandra"
                                        className="w-full h-[560px]"
                                        frameBorder="0"
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ArticlesSection;
