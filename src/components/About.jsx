import React from 'react';
import profile from '../assets/removebgprofile2.png';
import Skills from './Skills';
import { useFadeInOnScroll } from '../Hook';

const About = () => {
    const [imgRef, imgVisible] = useFadeInOnScroll();
    const [textRef, textVisible] = useFadeInOnScroll();
    return (
        <section id="about" className="w-full flex flex-col items-center justify-between px-4 sm:px-8 py-10 sm:py-16 md:py-20">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
                <div
                    ref={imgRef}
                    className={`flex-1 flex items-center justify-center mb-8 md:mb-0 transition-all duration-1000 ease-in-out
                        ${imgVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-20'}`}
                >
                    <div className="flex-1 flex items-center justify-center mt-6 md:mt-0">
                        <img src={profile} alt="profile" className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain" />
                    </div>
                </div>
                <div
                    ref={textRef}
                    className={`flex-1 flex flex-col items-start justify-center space-y-4 md:space-y-6 max-w-3xl transition-all duration-1000 ease-in-out
                        ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">About Me</h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-2xl leading-relaxed">
                        I'm Dheyvid Kyle Pe — a graphic designer, video editor, game asset creator, UI/UX designer, front-end developer, and content creator. I specialize in crafting visually engaging designs, intuitive user experiences, and digital content that brings ideas to life.
                    </p>
                </div>
            </div>
            <div className="w-full mt-8 md:mt-12">
                <Skills />
            </div>
        </section>
    );
};

export default About;