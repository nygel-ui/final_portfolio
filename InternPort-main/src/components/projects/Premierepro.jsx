import React from 'react';
import Premiere1 from '../../assets/premierepro/MallowSpeedramp.mp4'; // Replace with your actual image path
import Premiere2 from '../../assets/premierepro/GamePromotionalVid.mp4'; // Replace with your actual image path
import Premiere3 from '../../assets/premierepro/Intro.mp4'; // Replace with your actual image path
import Premiere4 from '../../assets/premierepro/Shortfilm.mp4'; // Replace with your actual image path
import Premiere5 from '../../assets/Essensa/Video/Final Fun Night.mp4' // Replace with your actual image path
import Premiere6 from '../../assets/Essensa/Video/Final Testimonial 1.mp4' // Replace with your actual image path
import Premiere7 from '../../assets/Essensa/Video/Final Testimonial 2.mp4' // Replace with your actual image path
import Premiere8 from '../../assets/Essensa/Video/Final Testimonial 3.mp4' // Replace with your actual image path
import Premiere9 from '../../assets/Essensa/Video/Funnight.mp4' // Replace with your actual image path
import Premiere10 from '../../assets/Essensa/Video/How Many Plates 1.mp4' // Replace with your actual image path
import Premiere11 from '../../assets/Essensa/Video/Pov 1.mp4' // Replace with your actual image path
import Premiere12 from '../../assets/Essensa/Video/Sir Nolly Final.mp4' // Replace with your actual image path
import Premiere13 from '../../assets/Essensa/Video/Teaser.mp4' // Replace with your actual image path
import Premiere14 from '../../assets/Essensa/Video/Testimonial 4(1).mp4' // Replace with your actual image path
import Premiere15 from '../../assets/Essensa/Video/Vikings.mp4' // Replace with your actual image path
const premiereProjects = [
    {
        title: 'Essensa Fun Night — Event Highlight Video',
        vid: Premiere5, // Use the imported image
        description: 'A dynamic highlight reel capturing the excitement and key moments of the Essensa Fun Night event, featuring upbeat music and smooth transitions.'
    },
    {
        title: 'Essensa Testimonial Series — Customer Reviews',
        vid: Premiere6, // Use the imported image
        description: 'A series of testimonial videos showcasing satisfied customers sharing their positive experiences with Essensa products and services.'         
    },
    {
        title: 'Essensa Testimonial Series — Customer Reviews',
        vid: Premiere7, // Use the imported image
        description: 'A series of testimonial videos showcasing satisfied customers sharing their positive experiences with Essensa products and services.'         
    },
    {
        title: 'Essensa Testimonial Series — Customer Reviews',
        vid: Premiere8, // Use the imported image
        description: 'A series of testimonial videos showcasing satisfied customers sharing their positive experiences with Essensa products and services.'             
    },
    {
        title: 'Essensa Fun Night — Event Highlight Video (Alternate Cut)',
        vid: Premiere9, // Use the imported image
        description: 'An alternate cut of the dynamic highlight reel capturing the excitement and key moments of the Essensa Fun Night event, featuring upbeat music and smooth transitions.'
    },
    {
        vid: Premiere10, // Use the imported image
        title: 'How Many Plates — Promotional Video',
        description: 'A creative promotional video for the How Many Plates campaign, showcasing the brand’s message and engaging visuals to attract the target audience.'  
    },
    {
        title: 'Essensa POV Experience — Immersive Video',
        vid: Premiere11, // Use the imported image
        description: 'A first-person point-of-view video that immerses viewers in the Essensa experience, showcasing products and services from a unique perspective.'
    },
    {   
        title: 'Essensa Sir Nolly Campaign — Promotional Video',
        vid: Premiere12, // Use the imported image
        description: 'A creative promotional video for the Essensa Sir Nolly campaign, highlighting the brand’s message and engaging visuals to attract the target audience.'
    },
    {
        title: 'Essensa Teaser — Upcoming Product Launch',
        vid: Premiere13, // Use the imported image
        description: 'A short teaser video building anticipation for an upcoming Essensa product launch, featuring intriguing visuals and a compelling call-to-action.' 
    },
    {
        title: 'Essensa Testimonial Series — Customer Review',      
        vid: Premiere14, // Use the imported image
        description: 'A testimonial video showcasing a satisfied customer sharing their positive experience with Essensa products and services.' 
    },
    {
        title: 'Essensa Vikings Campaign — Themed Promotional Video',
        vid: Premiere15, // Use the imported image
        description: 'A themed promotional video for the Essensa Vikings campaign, incorporating Nordic elements and storytelling to captivate the audience.'
    },  
    {
        title: 'Mallowbites Product Edit — Speed Ramp Video',
        vid: Premiere1, // Use the imported image
        description: "A high-energy product video featuring speed ramping and smooth transitions to showcase Mallowbites' branding and flavor appeal."
    },
    {
        title: 'Board Game — Promotional Video',
        vid: Premiere2, // Use the imported image
        description: 'A short promotional video highlighting the gameplay, features, and design of a custom board game, using dynamic motion and text overlays.'
    },
    {
        title: 'Blender Short Film — Trailer',
        vid: Premiere4,
        description: 'A 3D animated trailer made in Blender, featuring original scenes, characters, and effects to tease the short film’s story.'
    },
    {
        title: 'Production Team — Intro Video',
        vid: Premiere3,
        description: 'A motion graphic intro video showcasing the team’s logo, brand identity, and creative focus.'
    }
];

const Premierepro = () => {
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

export default Premierepro;