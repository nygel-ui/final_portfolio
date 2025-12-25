import React from 'react';
import { useFadeInOnScroll } from '../Hook';
import essensaLogo from '../assets/essensalogo.png';

const Intership = () => {
    const [ref, visible] = useFadeInOnScroll();

    return (
        <section id="intership" className="w-full flex flex-col items-center justify-between px-4 sm:px-8 py-10 sm:py-16 md:py-20">
            <div
                ref={ref}
                className={`w-full max-w-4xl transition-all duration-1000 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                <div className="flex items-center justify-center mb-6">
                    <img src={essensaLogo} alt="Essensa Naturale logo" className="w-40 h-auto object-contain" />
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">About Essensa Naturale Inc.</h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                    Essensa Naturale Inc. is a Philippine-based corporation established in 2009, engaged in the sales and distribution of health, wellness, cosmetic, and household products. The company operates under a multi-level marketing (MLM) business model that promotes entrepreneurship by providing training, support, and business opportunities to its members.
                </p>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-4">
                    Guided by its advocacy for an “Organic Way of Living,” Essensa Naturale is recognized as a pioneer in offering organic, non-toxic, and all-natural products in the Philippines. By sourcing high-quality raw materials from trusted global partners, the company ensures that its products meet Filipino standards for safety and effectiveness. Its flagship product, Essensa Buah Merah Mix, has gained strong recognition among health-conscious consumers for its wellness benefits.
                </p>
            </div>
        </section>
    );
};

export default Intership;
