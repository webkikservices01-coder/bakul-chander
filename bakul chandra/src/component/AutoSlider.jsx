import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Auto-sliding row of compact cards (thumbnail left, text right).
 * - Slides by one card every `interval` ms, loops back to the start.
 * - Pauses while the visitor hovers or touches it.
 * - Arrows on both edges and an "n / total" counter underneath.
 * Same component on mobile and desktop; only the number of visible cards changes.
 */
const AutoSlider = ({ items, renderItem, getKey, interval = 3500 }) => {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const cardWidth = () => {
        const el = trackRef.current;
        const first = el?.firstElementChild;
        if (!el || !first) return 0;
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        return first.getBoundingClientRect().width + gap;
    };

    const goTo = useCallback((i) => {
        const el = trackRef.current;
        if (!el || items.length === 0) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const w = cardWidth();
        let target = ((i % items.length) + items.length) % items.length;
        // past the last full "page": loop back to the start
        if (w && target * w > maxScroll + 4) target = i > index ? 0 : Math.round(maxScroll / w);
        el.scrollTo({ left: Math.min(target * w, maxScroll), behavior: 'smooth' });
        setIndex(target);
    }, [items.length, index]);

    // keep the counter in step with manual swiping
    const onScroll = () => {
        const w = cardWidth();
        const el = trackRef.current;
        if (!w || !el) return;
        const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
        setIndex(atEnd ? items.length - 1 : Math.round(el.scrollLeft / w));
    };

    useEffect(() => {
        if (paused || items.length < 2) return undefined;
        const t = setInterval(() => goTo(index + 1), interval);
        return () => clearInterval(t);
    }, [paused, index, interval, goTo, items.length]);

    const arrow = 'absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-zinc-200 transition-colors';

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
        >
            <div className="relative">
                <div
                    ref={trackRef}
                    onScroll={onScroll}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {items.map((item, i) => (
                        <div
                            key={getKey ? getKey(item, i) : i}
                            className="snap-start shrink-0 w-[88%] sm:w-[60%] md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
                        >
                            {renderItem(item, i)}
                        </div>
                    ))}
                </div>

                {items.length > 1 && (
                    <>
                        <button type="button" aria-label="Previous" onClick={() => goTo(index - 1)} className={`${arrow} left-2`}>
                            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                        </button>
                        <button type="button" aria-label="Next" onClick={() => goTo(index + 1)} className={`${arrow} right-2`}>
                            <ChevronRight className="w-5 h-5" strokeWidth={2} />
                        </button>
                    </>
                )}
            </div>

            <p className="mt-3 text-sm font-light" style={{ textAlign: 'center' }}>
                {Math.min(index + 1, items.length)} / {items.length}
            </p>
        </div>
    );
};

/** The compact card used inside the slider: thumbnail on the left, text on the right. */
export const SliderCard = ({ image, title, meta, href, onClick }) => {
    const inner = (
        <div className="group h-full flex items-center gap-4 p-3 bg-[#0d0d0d] border border-white/10 hover:border-white/40 transition-colors">
            <div className="w-28 h-24 md:w-32 md:h-28 shrink-0 overflow-hidden bg-[#111]">
                <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="min-w-0 flex-1">
                <h3 className="heading-sub line-clamp-3" style={{ fontSize: '16px' }}>{title}</h3>
                {meta && <p className="mt-2 text-xs uppercase tracking-wider font-medium">{meta}</p>}
            </div>
        </div>
    );
    if (href) {
        return <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full text-left">{inner}</a>;
    }
    return <button type="button" onClick={onClick} className="block w-full h-full text-left cursor-pointer">{inner}</button>;
};

export default AutoSlider;
