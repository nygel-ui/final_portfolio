import React, { useState, useEffect } from 'react';
import Photoshop from './projects/Photoshop';
import Illustrator from './projects/Illustrator';
import Premierepro from './projects/Premierepro';
import AfterEffects from './projects/AfterEffects';
import Figma from './projects/Figma';
import Code from './projects/Code';
import { useFadeInOnScroll } from '../Hook';

const categories = [
                    'Photoshop', 
                    // 'Illustrator', 
                    'Premiere Pro', 
                    'After Effects',
                    // 'Figma', 
                    // 'Code'
                    
                    ];

const Projects = () => {
    const [active, setActive] = useState('Photoshop');
    const [headingRef, headingVisible] = useFadeInOnScroll();
    const [contentVisible, setContentVisible] = useState(true);

    // Animate project content on category change
    useEffect(() => {
        setContentVisible(false);
        const timeout = setTimeout(() => setContentVisible(true), 100); // short delay for re-animation
        return () => clearTimeout(timeout);
    }, [active]);

    const renderContent = () => {
        switch (active) {
            case 'Photoshop':
                return <Photoshop />;
            case 'Illustrator':
                return <Illustrator />;
            case 'Premiere Pro':
                return <Premierepro />;
            case 'After Effects':
                return <AfterEffects />;
            case 'Figma':
                return <Figma />;
            case 'Code':
                return <Code />;
            default:
                return null;
        }
    };

    return (
        <section id="projects" className="w-full px-4 sm:px-8 py-12 sm:py-18 flex flex-col items-center snap-start">
            <h2
                ref={headingRef}
                className={`text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 sm:mb-8 transition-all duration-1000 ease-in-out
                    ${headingVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-10'}`}
            >
                Projects
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 w-full">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base transition border-b-2 ${active === cat ? 'border-blue-400 text-blue-400' : 'border-transparent text-gray-300 hover:text-blue-400'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="w-full">
                {renderContent()}
            </div>
        </section>
    );
};

export default Projects; 