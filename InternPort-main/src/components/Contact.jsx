import React from 'react';
import contact from '../assets/icons/calls.png';
import email from '../assets/icons/gmail.png';
import linkedin from '../assets/icons/linkedin.png';
import github from '../assets/icons/github.png';
import facebook from '../assets/icons/facebook.png';

const Contact = () => {
    return (
        <section id="contact" className="w-full flex flex-col items-center justify-center px-4 sm:px-8 py-12 md:py-20">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-300 mb-4 md:mb-8">GET IN TOUCH</h2>
            <hr className="w-full border-t-2 border-gray-600 opacity-50 mb-4 md:mb-8" />
            <div className="flex space-x-4 md:space-x-10">
                <a href="https://github.com/walts-14" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-4xl text-white hover:bg-blue-400 transition">
                    <img src={github} alt="GitHub" className="w-10 h-10 md:w-15 md:h-15" />
                </a>
                <a href="https://linkedin.com/in/johnewalter-almcd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-4xl text-white hover:bg-blue-400 transition">
                    <img src={linkedin} alt="LinkedIn" className="w-10 h-10 md:w-15 md:h-15" />
                </a>
                <a href="https://www.facebook.com/johnewalter.alcala/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-4xl text-white hover:bg-blue-400 transition">
                    <img src={facebook} alt="Facebook" className="w-10 h-10 md:w-15 md:h-15" />
                </a>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center text-sm md:text-base text-gray-400 mt-4 md:mt-6 space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-2">
                    <img src={contact} alt="Phone" className="w-8 h-8 md:w-10 md:h-10" />
                    <span>+63 955-750-1035</span>
                </div>
                <div className="flex items-center space-x-4">
                    <img src={email} alt="Email" className="w-9 h-9 md:w-11 md:h-11" />
                    <span>johnewalteralmcd@gmail.com</span>
                </div>
            </div>
            <p className="text-gray-300 mt-6 md:mt-10">© 2025 Johne Walter Almonacid</p>
        </section>
    );
};

export default Contact; 