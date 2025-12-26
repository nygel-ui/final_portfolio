import React from 'react';
import Code1 from '../../assets/web/wesign.png';
import Code2 from '../../assets/web/mallowbites.png';
import Code3 from '../../assets/web/towerofhanoi.png';

const codeProjects = [
    {
        title: 'Web-Based Learning System (for deaf learners)',
        image: Code1,
        description: 'An accessible learning platform designed for deaf students, featuring sign language integration and interactive lessons.'
    },
    {
        title: 'Mallowbites E-Commerce Website',
        image: Code2,
        description: 'A responsive online store for Mallowbites products with product browsing, cart, and checkout functionality.'
    },
    {
        title: 'Tower of Hanoi Mini Game (Java)',
        image: Code3,
        description: 'A logic-based puzzle game built in Java, simulating the classic Tower of Hanoi with a user-friendly interface.'
    }
];

const Code = () => {
    return (
        <div className="flex overflow-x-auto gap-4 md:gap-10 p-4 md:p-7 w-full max-w-6xl mx-auto scrollbar-hide">
            {codeProjects.map((proj, idx) => (
                <div
                    key={idx}
                    className="bg-surface rounded-2xl p-4 md:p-5 flex-shrink-0 flex flex-col items-start shadow-lg border border-transparent transition-all duration-300 w-[280px] md:w-[350px] lg:w-[450px] min-h-[400px] md:min-h-[450px] transform hover:-translate-y-2 hover:scale-105 border-accent"
                    style={{ boxShadow: '0 0 16px 2px rgba(59,130,246,0.08)' }}
                >
                    <div className="w-full h-48 md:h-60 bg-btn rounded-xl flex items-center justify-center mb-4 md:mb-5 overflow-hidden">
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-fill rounded-xl"
                        />
                    </div>
                    <span className="text-accent font-bold text-base md:text-lg lg:text-xl mb-2 leading-tight">
                        {proj.title}
                    </span>
                    {proj.description && (
                        <span className="text-sm md:text-base lg:text-lg leading-snug text-muted">
                            {proj.description}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Code;