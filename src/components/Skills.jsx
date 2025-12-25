import React, { useEffect, useState } from 'react';
import Illustrator from '../assets/icons/Illustrator.png';
import Photoshop from '../assets/icons/Photoshop.png';
import PremierePro from '../assets/icons/premiere pro.png';
import Figma from '../assets/icons/figma.png';
import ReactIcon from '../assets/icons/react.png';
import JavaScript from '../assets/icons/javascript.png';
import HTML5 from '../assets/icons/html.png';
import CSS3 from '../assets/icons/css.png';
import AE from '../assets/icons/aftereffects.png';
import { useFadeInOnScroll } from '../Hook';
// Import other icons as needed

const skills = [
    { name: 'Illustrator', icon: <img src={Illustrator} alt="Illustrator" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'Photoshop', icon: <img src={Photoshop} alt="Photoshop" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'Premiere Pro', icon: <img src={PremierePro} alt="Premiere Pro" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'After Effects', icon: <img src={AE} alt="After Effects" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'Figma', icon: <img src={Figma} alt="Figma" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'React', icon: <img src={ReactIcon} alt="React" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'JavaScript', icon: <img src={JavaScript} alt="JavaScript" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'HTML5', icon: <img src={HTML5} alt="HTML5" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
    { name: 'CSS3', icon: <img src={CSS3} alt="CSS3" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" /> },
   
];

const Skills = () => {
    const [headingRef, headingVisible] = useFadeInOnScroll();
    const [visibleIcons, setVisibleIcons] = useState(Array(skills.length).fill(false));

    useEffect(() => {
        if (headingVisible) {
            skills.forEach((_, i) => {
                setTimeout(() => {
                    setVisibleIcons((prev) => {
                        const updated = [...prev];
                        updated[i] = true;
                        return updated;
                    });
                }, 200 * i);
            });
        } else {
            // Reset icons when heading is not visible
            setVisibleIcons(Array(skills.length).fill(false));
        }
    }, [headingVisible]);

    return (
        <section id="skills" className="w-full flex flex-col items-center justify-center px-4 sm:px-8">
            <h1
                ref={headingRef}
                className={`text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-7 transition-all duration-1000 ease-in-out
                    ${headingVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-10'}`}
            >
                Skills
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 w-full max-w-4xl">
                {skills.map((skill, i) => (
                    <div
                        key={skill.name}
                        className={`flex flex-col items-center transition-all duration-700
                            ${visibleIcons[i] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-800 rounded-xl flex items-center justify-center text-2xl text-white">
                            {skill.icon}
                        </div>
                        <span className="text-gray-300 text-xs sm:text-sm md:text-base mt-1 font-bold text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills; 