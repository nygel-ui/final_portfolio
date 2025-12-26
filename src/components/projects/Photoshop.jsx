import React, { useState, useEffect, useRef } from 'react';
import Marshmallows from '../../assets/photoshop/chrsimas.png';
import Chicken from '../../assets/photoshop/pastil.png';
import Rocky from '../../assets/photoshop/rocky.png';
import Berry from '../../assets/photoshop/strawberry.png';
import Dare from '../../assets/photoshop/postermallow.png';
import Mango from '../../assets/photoshop/mango.png';
import Oreo from '../../assets/photoshop/oreo.png';
import Pearl from '../../assets/photoshop/Pearlofashen.png';
// import Research from '../../assets/photoshop/seminar.png';
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
    { title: 'Toyota Marilao Bulacan Company ID lace', image: poster1 },
    { title: 'Toyota Marilao Bulacan Pubmat:Hilux Pubmat', image: poster2 },
    { title: 'Research Seminar Pubmat', image: poster3 },
    { title: 'Toyota Marilao Bulacan Pubmat: Looking for intern', image: poster4 },
    { title: 'POPEYES commercial poster', image: poster5 },
    { title: 'Toyota Marilao Bulacan Pubmat: Bonifacio Day', image: poster6 },
    { title: 'Toyota Marilao Bulacan Pubmat: All Saints & All Souls Day ', image: poster7 },
    { title: 'Pubmat Poster Draft', image: poster8 },
    { title: 'Toyota Marilao Bulacan Pubmat: Marcelo Del Pilar', image: Marshmallows },
    { title: 'Game 2d Card Asset: The Last Dose', image: Chicken },
    { title: 'GameDev Poster: THAUMATERRA', image: Rocky },
    { title: 'Commision Magazine Poster', image: Berry },
    { title: 'Mustang Draft Pubmat', image: Dare },
    { title: 'Porshe 911 Draft Pubmat', image: Mango },
    { title: 'Best GameDev Poster: FUN=JAVA', image: Oreo },
    { title: 'GameDev Poster: The Rise Of Demon King', image: Pearl },
    // { title: 'Research Writing Seminar', image: Research },
    { title: 'Love Every Bite', image: Love },
    { title: 'Pair of Puff', image: Pairofpuff },
    { title: 'Pair of Puff2', image: Pairofpuff2 },
    { title: 'Mallow in Love with You', image: Mallow },
];


const Photoshop = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        if (now - lastWheel.current < 180) return;
        lastWheel.current = now;
        if (e.deltaY > 0) next();
        else prev();
        e.preventDefault();
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex justify-end px-5 py-2">
                <button
                    className="px-4 py-2 btn-primary rounded-full font-semibold"
                    onClick={() => openAt(0)}
                    aria-label="Open gallery"
                >
                    View Gallery
                </button>
            </div>

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

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onWheel={onWheel}
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="absolute inset-0 bg-black/60" onClick={close} />

                    <div className="relative max-w-[90%] max-h-[90%] flex items-center justify-center">
                        <button
                            className="absolute left-0 ml-2 p-2 rounded-full bg-white/90 text-primary shadow"
                            onClick={prev}
                            aria-label="Previous"
                        >&larr;</button>

                        <div className="bg-white rounded-md p-2 max-w-full max-h-full">
                            <img src={photoshopProjects[current].image} alt={photoshopProjects[current].title} className="max-w-[80vw] max-h-[80vh] object-contain rounded" />
                            <div className="mt-2 text-center text-sm text-muted">{photoshopProjects[current].title}</div>
                        </div>

                        <button
                            className="absolute right-0 mr-2 p-2 rounded-full bg-white/90 text-primary shadow"
                            onClick={next}
                            aria-label="Next"
                        >&rarr;</button>

                        <button
                            className="absolute top-2 right-2 p-2 rounded-full bg-white/90 text-primary shadow"
                            onClick={close}
                            aria-label="Close"
                        >✕</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photoshop;