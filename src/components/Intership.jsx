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
                   Toyota Marilao, Bulacan is a major authorized Toyota car dealership and service center located along MacArthur Highway in Marilao, Bulacan. It offers new Toyota vehicles, sales support, and comprehensive after-sales services including maintenance, repairs, and appointments, all delivered with a focus on customer satisfaction and quality care. The dealership is also known for embracing environmentally friendly design and modern, energy-efficient facilities as part of its commitment to sustainable automotive service.
                </p>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                Driven by their advocacy for environmental sustainability and community growth by setting new standards in eco-friendly automotive practices, using renewable energy and low-carbon facilities to reduce environmental impact, and promoting green initiatives that benefit customers and the local community. The dealership also supports local economic development by providing quality jobs, excellent customer service, and opportunities that help enrich the lives of people in Bulacan and nearby areas.
                </p>

            </div>
        </section>
    );
};

export default Intership;
