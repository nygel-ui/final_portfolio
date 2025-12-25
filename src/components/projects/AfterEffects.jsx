import React from 'react';
// import AE1 from '../../assets/Essensa/Video/AE/9 WAYS.mp4';
import AE2 from '../../assets/Essensa/Video/AE/Dr.LanieGlykozee _1.mp4';
import AE3 from '../../assets/Essensa/Video/AE/E-COMM_2.mp4';
import AE4 from '../../assets/Essensa/Video/AE/Final.mp4';   
import AE5 from '../../assets/Essensa/Video/AE/FinalFoundersExecmp4.mp4';



const premiereProjects = [
    // {
    //     title: '9 Ways to Use Glykozee — Animated Explainer Video',
    //     vid: AE1, // Use the imported image
    //     description: 'An engaging animated explainer video showcasing nine different ways to incorporate Glykozee into daily routines for improved health and wellness.'
    // },
    {
        title: 'Dr. Lanie on Glykozee — Educational Animation',
        vid: AE2, // Use the imported image
        description: 'An educational animated video featuring Dr. Lanie discussing the benefits and uses of Glykozee, aimed at informing viewers about the product’s advantages.'
    },
    {
        title: 'Glykozee E-Commerce Promo — Animated Advertisement',
        vid: AE3, // Use the imported image
        description: 'A dynamic animated advertisement promoting Glykozee on e-commerce platforms, highlighting key features and encouraging online purchases.'
    },
    {
        title: 'Glykozee Final Animation — Brand Storytelling',
        vid: AE4, // Use the imported image
        description: 'A captivating animated video that tells the brand story of Glykozee, emphasizing its mission, values, and commitment to quality.'
    },
    {
        title: 'Founders Executive Summary — Animated Presentation',
        vid: AE5, // Use the imported image
        description: 'An animated presentation summarizing the executive vision and goals of Glykozee’s founders, designed to engage stakeholders and investors.'
    }

];

const AfterEffects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {premiereProjects.map((proj, idx) => (
                <div
                    key={idx}
                    className="bg-[#172133] rounded-2xl p-2 flex flex-col items-start transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                    style={{ boxShadow: '0 0 16px 2px #2563eb55' }}
                >
                    <div className="w-full h-65 bg-[#232b3a] rounded-xl flex items-center justify-center mb-5 overflow-hidden">
                        <video
                            src={proj.vid}
                            controls
                            muted
                            autoPlay
                            loop
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    <span className="text-blue-400 font-bold text-lg md:text-xl mb-1 leading-tight">
                        {proj.title}
                    </span>
                    {proj.description && (
                        <span className="text-base md:text-[1rem] leading-snug" style={{ color: '#7791A9' }}>
                            {proj.description}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AfterEffects;