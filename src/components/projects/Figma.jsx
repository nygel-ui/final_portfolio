import React from 'react'

import Figma1 from '../../assets/figma/serenyx.png';
import Figma2 from '../../assets/figma/wesign.png';
import Figma3 from '../../assets/figma/gizmo&prends.png';
import Figma4 from '../../assets/figma/digilib.png';
import Figma5 from '../../assets/figma/basketball.png';
import './figma.css';

const figmaProjects = [
    {
        title: 'Serenyx — Digital Store for Minecraft',
        image: Figma1,
        description: 'A Minecraft-themed UI/UX design for a digital marketplace, focused on intuitive navigation and immersive pixel-style visuals.',
        link: 'https://www.figma.com/design/IuZKZPQWXCY2OkiqFPR1H0/Serenyx-Network---E-commerce-Website?node-id=0-1&t=J1NaOLwzEDsOwuiG-1'
    },
    {
        title: 'WeSign — Web-Based Game for Deaf Learners',
        image: Figma2,
        description: 'An educational game interface designed to help deaf learners engage through sign language visuals, interactive UI, and gamified learning elements.',
        link: 'https://www.figma.com/design/G8Dy3EOZR7e4iXVzemd2tF/WESign?node-id=0-1&t=Bj8fFNU9yLtu0XLG-1'
    },
    {
        title: 'Basketball Schedule — Game Scheduling App',
        image: Figma5,
        description: 'A clean, calendar-based UI design for organizing basketball games, team matchups, and venue schedules with mobile-first layout.',
        link: 'https://www.figma.com/design/LwLZqRbnUddOQzEsbJrbAa/Untitled?node-id=0-1&t=R9R5CBxJ9fCuIc2i-1'
    },
    {
        title: 'Gizmo & Friends — Educational Game System',
        image: Figma3,
        description: 'A playful interface design for an educational computer game aimed at young learners, blending colorful visuals with simple user flows.',
        link: 'https://www.figma.com/design/d3sC434adAwyDi2MhuXRSo/computer-system?node-id=0-1&t=iLYNDK721QdlGuCb-1'
    },
    {
        title: 'DigiLib — Mobile Library App',
        image: Figma4,
        description: 'A modern library management app UI for students, featuring book search, digital borrowing, and user account tracking.',
        link: 'https://www.figma.com/design/3GvKzm3KFcbtn4L5e6dKar/DigiLib-Prototype?node-id=0-1&t=doAqNdMgvRR8RAXU-1'
    }
];

const Figma = () => {
    return (
        <div className="scrollbar-hide flex overflow-x-auto gap-4 md:gap-10 p-4 md:p-7 w-full max-w-6xl mx-auto">
            {figmaProjects.map((proj, idx) => (
                <a
                    key={idx}
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#172133] rounded-2xl p-4 md:p-5 flex-shrink-0 flex flex-col items-start shadow-lg border border-transparent transition-all duration-300 w-[280px] md:w-[350px] min-h-[400px] md:min-h-[450px] hover:border-blue-400 transform hover:-translate-y-2 hover:scale-105"
                    style={{ boxShadow: '0 0 16px 2px #2563eb55' }}
                >
                    <div className="w-full h-48 md:h-60 bg-[#232b3a] rounded-xl flex items-center justify-center mb-4 md:mb-5 overflow-hidden">
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-fill rounded-xl"
                        />
                    </div>
                    <span className="text-blue-400 font-bold text-base md:text-lg lg:text-xl mb-1 leading-tight">
                        {proj.title}
                    </span>
                    {proj.description && (
                        <span className="text-sm md:text-base leading-snug" style={{ color: '#7791A9' }}>
                            {proj.description}
                        </span>
                    )}
                </a>
            ))}
        </div>
    )
}

export default Figma