import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 bg-white/5 backdrop-blur-md fixed top-0 left-0 z-50 shadow-2xl">
            <div className="text-2xl md:text-3xl font-bold text-white tracking-widest font-satoshi flex-1 text-center md:text-left">
                J.<span className="text-blue-400">WALTZ</span>
            </div>
            {/* Hamburger for mobile */}
            <button
                className="md:hidden text-white absolute right-6 top-5 text-3xl focus:outline-none"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Toggle menu"
            >
                <span>{menuOpen ? '✕' : '☰'}</span>
            </button>
            <ul
                className={`flex-col md:flex-row flex md:space-x-12 space-y-4 md:space-y-0 text-lg md:text-2xl font-bold font-satoshi items-center md:static absolute top-16 left-0 w-full md:w-auto bg-[#0a192f] md:bg-transparent transition-all duration-300 z-40 ${menuOpen ? 'flex' : 'hidden md:flex'}`}
            >
                <li><a href="#home" className="text-gray-200 hover:text-blue-400 transition">Home</a></li>
                <li><a href="#intership" className="text-gray-200 hover:text-blue-400 transition">Intership</a></li>
                <li><a href="#about" className="text-gray-200 hover:text-blue-400 transition">About</a></li>
                <li><a href="#projects" className="text-gray-200 hover:text-blue-400 transition">Projects</a></li>
                <li><a href="#contact" className="text-gray-200 hover:text-blue-400 transition">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar; 