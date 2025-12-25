import React, { useState, useEffect } from 'react';
import MallowBites from '../../assets/illustrator/illustrator-mallowbites.png';
import VanillaSprinkle from '../../assets/illustrator/LOGO TEMPLATE-01.png';
import IStrawberry from '../../assets/illustrator/LOGO TEMPLATE_Artboard 6.png';
import ICashew from '../../assets/illustrator/LOGO TEMPLATE_Artboard 4.png';
import IOreo from '../../assets/illustrator/LOGO TEMPLATE_Artboard 2.png';
import IMango from '../../assets/illustrator/LOGO TEMPLATE_Artboard 3.png';
import Lumiere from '../../assets/illustrator/illustrator-lumiere-01 2.png';
import PangMasa from '../../assets/illustrator/chilligarlic 1.png';
import BrewBounty from '../../assets/illustrator/brewbounty 1.png';

const vanillaImages = [VanillaSprinkle, IStrawberry, ICashew, IOreo, IMango];

const Illustrator = () => {
    const [vanillaIndex, setVanillaIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVanillaIndex((prev) => (prev + 1) % vanillaImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Responsive scroll container for both rows, always centered */}
            <div className="w-full overflow-x-auto scrollbar-hide p-5 flex justify-center">
                <div className="w-max flex flex-col items-center mx-auto">
                    {/* First row */}
                    <div className="flex flex-row justify-center items-center gap-5 md:gap-7 w-full max-w-4xl mb-5">
                        {/* Mallow Bites (rectangular) */}
                        <div className="bg-[#0a192f] rounded-2xl flex items-center justify-center shadow-lg p-1 md:p-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                            style={{ boxShadow: '0 0 16px 2px #2563eb55' }}
                        >
                            <img src={MallowBites} alt="Mallow Bites" className="w-[180px] h-[110px] md:w-[320px] md:h-[180px] lg:w-[420px] lg:h-[255px] object-fill rounded-2xl" />
                        </div>
                        {/* Vanilla Sprinkle (circle, carousel) */}
                        <div className="flex items-center justify-center bg-[#0a192f] shadow-lg p-1 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                            style={{ borderRadius: '50%', boxShadow: '0 0 16px 2px #2563eb55' }}
                        >
                            <img src={vanillaImages[vanillaIndex]} alt="Vanilla Sprinkle" className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] object-contain rounded-full" />
                        </div>
                    </div>
                    {/* Third row */}
                    <div className="flex flex-row justify-center items-center gap-5 md:gap-8 w-full max-w-4xl">
                        {/* Pang-Masa (rectangular) */}
                        <img src={PangMasa} alt="Pang-Masa" className="bg-[#0a192f] w-[150px] h-[90px] md:w-[240px] md:h-[140px] lg:w-[365px] lg:h-[220px] object-fill rounded-2xl p-1 md:p-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105" style={{ boxShadow: '0 0 16px 2px #2563eb55' }} />
                        {/* Lumiere Production (circle) */}
                        <div className="flex items-center justify-center bg-[#0a192f] shadow-lg px-1 py-1 md:px-2 md:py-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                            style={{ borderRadius: '6%', boxShadow: '0 0 16px 2px #2563eb55' }}
                        >
                            <img src={Lumiere} alt="Lumiere Production" className="w-[110px] h-[90px] md:w-[180px] md:h-[140px] lg:w-[280px] lg:h-[220px] object-contain" />
                        </div>
                        {/* Brew Bounty (hexagon) */}
                        <img src={BrewBounty} alt="Brew Bounty" className="bg-[#0a192f] w-[90px] h-[90px] md:w-[160px] md:h-[140px] lg:w-[250px] lg:h-[220px] object-contain rounded-2xl py-1 md:py-2 transition-all duration-300 hover:-translate-y-2 hover:scale-105" style={{ boxShadow: '0 0 16px 2px #2563eb55' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Illustrator;