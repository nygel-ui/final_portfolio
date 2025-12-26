import React, { useState, useEffect, useRef } from 'react';
import Marshmallows from '../../assets/photoshop/chrsimas.png';
import Chicken from '../../assets/photoshop/pastil.png';
import Rocky from '../../assets/photoshop/rocky.png';
import Berry from '../../assets/photoshop/strawberry.png';
import Dare from '../../assets/photoshop/postermallow.png';
import Mango from '../../assets/photoshop/mango.png';
import Oreo from '../../assets/photoshop/oreo.png';
import Pearl from '../../assets/photoshop/Pearlofashen.png';
import Research from '../../assets/photoshop/seminar.png';
import Love from '../../assets/photoshop/love.png';
import Pairofpuff from '../../assets/photoshop/pairofpuff.png';
import Pairofpuff2 from '../../assets/photoshop/pairofpuff2.png';
import Mallow from '../../assets/photoshop/valentines.png';
import poster1 from '../../assets/Essensa/Poster/Apple promo.png'
import poster2 from '../../assets/Essensa/Poster/EBPfriday3_2.png'
import poster3 from '../../assets/Essensa/Poster/EBPfriday3.3png.png'
import poster4 from '../../assets/Essensa/Poster/EBPfriday3.png'
import poster5 from '../../assets/Essensa/Poster/glykozee 6-30-25.jpg'
import poster6 from '../../assets/Essensa/Poster/Glykozee 7-8-25.jpg'
import poster7 from '../../assets/Essensa/Poster/Glykozee.png'
import poster8 from '../../assets/Essensa/Poster/NDO 7-6-25.jpg'
import poster9 from '../../assets/Essensa/Poster/NDOfriday3.png'

const photoshopProjects = [
    { title: 'Apple Promo Poster', image: poster1 },
    { title: 'EBP Friday Promo 1', image: poster2 },
    { title: 'EBP Friday Promo 2', image: poster3 },
    { title: 'EBP Friday Promo 3', image: poster4 },
    { title: 'Glykozee Promo 1', image: poster5 },
    { title: 'Glykozee Promo 2', image: poster6 },
    { title: 'NDO Promo 1', image: poster7 },
    { title: 'NDO Promo 2', image: poster8 },
    { title: 'Marshmallows — Made for Holiday Memories', image: Marshmallows },
    { title: 'Chicken Pastil', image: Chicken },
    { title: 'Rocky Road', image: Rocky },
    { title: 'Berry Biscuit', image: Berry },
    { title: 'Dare to Try Something New', image: Dare },
    { title: 'Mango Graham', image: Mango },
    { title: 'Oreo Crumble', image: Oreo },
    { title: 'Pearl of Ashen', image: Pearl },
    { title: 'Research Writing Seminar', image: Research },
    { title: 'Love Every Bite', image: Love },
    { title: 'Pair of Puff', image: Pairofpuff },
    { title: 'Pair of Puff2', image: Pairofpuff2 },
    { title: 'Mallow in Love with You', image: Mallow },
];


const Photoshop = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [current, setCurrent] = useState(0);
    const lastWheel = useRef(0);

    const openAt = (index) => {
        setCurrent(index);
        setIsOpen(true);
    };

    const close = () => setIsOpen(false);

    const next = () => setCurrent((c) => (c + 1) % photoshopProjects.length);
    const prev = () => setCurrent((c) => (c - 1 + photoshopProjects.length) % photoshopProjects.length);

    useEffect(() => {
        const onKey = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    const onWheel = (e) => {
        // throttle wheel events to avoid overscrolling
        const now = Date.now();
        if (now - lastWheel.current < 120) return;
        lastWheel.current = now;
        if (e.deltaY > 0) next();
        else prev();
        e.preventDefault();
    };

    const scrollRef = useRef(null);

    const scrollToIndex = (index) => {
        const container = scrollRef.current;
        if (!container) return;
        const child = container.children[index];
        if (child) {
            container.scrollTo({ left: child.offsetLeft - 8, behavior: 'smooth' });
        }
    };

    // when current changes while scroller open, ensure it is visible
    useEffect(() => {
        if (isOpen) scrollToIndex(current);
    }, [current, isOpen]);

    return (
        <div className="w-full max-w-5xl mx-auto">

            {/* Sticky scroller with thumbnails and counter (always visible) */}
            {isOpen && (
                <div className="sticky top-20 z-30 bg-white/60 backdrop-blur-sm px-5 py-3">
                    <div className="relative flex items-center">
                        <button
                            className="p-2 rounded-full bg-white/90 text-primary shadow mr-2"
                            onClick={() => { prev(); scrollToIndex(current - 1 < 0 ? photoshopProjects.length - 1 : current - 1); }}
                            aria-label="Scroll left"
                        >&larr;</button>

                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto scrollbar-hide py-2 w-full"
                            style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
                        >
                            {photoshopProjects.map((proj, idx) => (
                                <div
                                    key={idx}
                                    className={`min-w-[220px] min-h-[140px] rounded-xl p-1 flex-shrink-0 cursor-pointer transition-transform ${idx === current ? 'scale-105' : ''}`}
                                    style={{ scrollSnapAlign: 'center', border: idx === current ? '3px solid var(--color-accent)' : '1px solid transparent' }}
                                    onClick={() => setCurrent(idx)}
                                >
                                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover rounded" />
                                </div>
                            ))}
                        </div>

                        <button
                            className="p-2 rounded-full bg-white/90 text-primary shadow ml-2"
                            onClick={() => { next(); scrollToIndex(current + 1 >= photoshopProjects.length ? 0 : current + 1); }}
                            aria-label="Scroll right"
                        >&rarr;</button>

                        <div className="ml-4 text-sm text-primary font-semibold">{current + 1} / {photoshopProjects.length}</div>
                    </div>
                </div>
            )}

            <div className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto scrollbar-hide px-5 py-5">
                {photoshopProjects.map((proj, idx) => (
                    <div
                        key={idx}
                        className="bg-surface rounded-2xl flex items-center justify-center shadow-lg border border-transparent transition-all duration-300 p-1 min-w-[210px] min-h-[180px] transform hover:-translate-y-2 hover:scale-105 border-accent cursor-pointer"
                        style={{ boxShadow: '0 0 16px 2px #2563eb55' }}
                        onClick={() => openAt(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') openAt(idx); }}
                    >
                        <img src={proj.image} alt={proj.title} className="rounded-xl w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Toggleable horizontal scroller (replaces modal) */}
            {isOpen && (
                <div className="w-full px-5 py-3">
                    <div className="relative flex items-center">
                        <button
                            className="p-2 rounded-full bg-white/90 text-primary shadow mr-2"
                            onClick={() => { prev(); scrollToIndex(current - 1 < 0 ? photoshopProjects.length - 1 : current - 1); }}
                            aria-label="Scroll left"
                        >&larr;</button>

                        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide py-2 w-full">
                            {photoshopProjects.map((proj, idx) => (
                                <div key={idx} className={`min-w-[220px] min-h-[140px] rounded-xl p-1 flex-shrink-0 cursor-pointer border ${idx === current ? 'border-accent' : 'border-transparent'}`} onClick={() => setCurrent(idx)}>
                                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover rounded" />
                                </div>
                            ))}
                        </div>

                        <button
                            className="p-2 rounded-full bg-white/90 text-primary shadow ml-2"
                            onClick={() => { next(); scrollToIndex(current + 1 >= photoshopProjects.length ? 0 : current + 1); }}
                            aria-label="Scroll right"
                        >&rarr;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photoshop;