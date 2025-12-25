import React from 'react';
import Marshmallows from '../../assets/photoshop/chrsimas.png';
import Chicken from '../../assets/photoshop/pastil.png';
import Rocky from '../../assets/photoshop/rocky.png';
import Berry from '../../assets/photoshop/strawberry.png';
import Dare from '../../assets/photoshop/postermallow.png';
import Mango from '../../assets/photoshop/mango.png';
import Oreo from '../../assets/photoshop/oreo.png';
import Pearl from '../../assets/photoshop/Pearlofashen.png';
import Research from '../../assets/photoshop/seminar.png';
import Love from '../../assets/photoshop/love.png';
import Pairofpuff from '../../assets/photoshop/pairofpuff.png';
import Pairofpuff2 from '../../assets/photoshop/pairofpuff2.png';
import Mallow from '../../assets/photoshop/valentines.png';
import poster1 from '../../assets/Essensa/Poster/Apple promo.png'
import poster2 from '../../assets/Essensa/Poster/EBPfriday3_2.png'
import poster3 from '../../assets/Essensa/Poster/EBPfriday3.3png.png'
import poster4 from '../../assets/Essensa/Poster/EBPfriday3.png'
import poster5 from '../../assets/Essensa/Poster/glykozee 6-30-25.jpg'
import poster6 from '../../assets/Essensa/Poster/Glykozee 7-8-25.jpg'
import poster7 from '../../assets/Essensa/Poster/Glykozee.png'
import poster8 from '../../assets/Essensa/Poster/NDO 7-6-25.jpg'
import poster9 from '../../assets/Essensa/Poster/NDOfriday3.png'

const photoshopProjects = [
    { title: 'Apple Promo Poster', image: poster1 },
    { title: 'EBP Friday Promo 1', image: poster2 },
    { title: 'EBP Friday Promo 2', image: poster3 },
    { title: 'EBP Friday Promo 3', image: poster4 },
    { title: 'Glykozee Promo 1', image: poster5 },
    { title: 'Glykozee Promo 2', image: poster6 },
    { title: 'NDO Promo 1', image: poster7 },
    { title: 'NDO Promo 2', image: poster8 },
    { title: 'Marshmallows — Made for Holiday Memories', image: Marshmallows },
    { title: 'Chicken Pastil', image: Chicken },
    { title: 'Rocky Road', image: Rocky },
    { title: 'Berry Biscuit', image: Berry },
    { title: 'Dare to Try Something New', image: Dare },
    { title: 'Mango Graham', image: Mango },
    { title: 'Oreo Crumble', image: Oreo },
    { title: 'Pearl of Ashen', image: Pearl },
    { title: 'Research Writing Seminar', image: Research },
    { title: 'Love Every Bite', image: Love },
    { title: 'Pair of Puff', image: Pairofpuff },
    { title: 'Pair of Puff2', image: Pairofpuff2 },
    { title: 'Mallow in Love with You', image: Mallow },
];


const Photoshop = () => {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto scrollbar-hide px-5 py-5">
                {photoshopProjects.map((proj, idx) => (
                    <div
                        key={idx}
                        className="bg-[#0a192f] rounded-2xl flex items-center justify-center shadow-lg border border-transparent transition-all duration-300 p-1 min-w-[210px] min-h-[180px] transform hover:-translate-y-2 hover:scale-105 hover:border-blue-400"
                        style={{ boxShadow: '0 0 16px 2px #2563eb55' }}
                    >
                        <img src={proj.image} alt={proj.title} className="rounded-xl w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photoshop;