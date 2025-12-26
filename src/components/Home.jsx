import React from 'react';
import profile from '../assets/removebgprofile.png';
import cv from '../assets/Almonacid.pdf';
import { useFadeInOnScroll } from '../Hook';

const Home = () => {
    const [textRef, textVisible] = useFadeInOnScroll();
    const [imgRef, imgVisible] = useFadeInOnScroll();

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 pt-24 pb-12 gap-8 md:gap-0"
        >
            <div
                ref={textRef}
                className={`flex-1 flex flex-col items-start justify-center space-y-5 transition-all duration-1000 ease-in-out
                    ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">Hi There!</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    I'm <span className="text-blue-400">Dheyvid Kyle Pe</span>
                </h1>
                <h3 className="text-base sm:text-lg md:text-3xl font-semibold text-white ">a graphic designer, video editor, game asset creator, UI/UX designer, front-end developer, and content creator.</h3>
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-5 text-lg sm:text-xl md:text-2xl h-auto sm:h-20 w-full">
                    <a
                        href={cv}
                        download
                        className="w-full sm:w-auto text-center px-8 py-4 bg-gray-800 text-white rounded-full font-semibold shadow hover:bg-blue-500 transition"
                    >
                        Download CV
                    </a>
                    <a href="#contact" className="w-full sm:w-auto text-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition">Contact me</a>
                </div>
            </div>
            <div
                ref={imgRef}
                className={`flex-1 flex items-center justify-center mt-8 md:mt-0 transition-all duration-1000 ease-in-out
                    ${imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            >
                <img src={profile} alt="profile" className="w-48 h-48 sm:w-72 sm:h-72 md:w-[30rem] md:h-[32rem] object-contain ml-0 md:ml-20" />
            </div>
        </section>
    );
};

export default Home;