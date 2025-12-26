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
                    Toyota Marilao, Bulacan Inc. is an authorized Toyota dealership and service center located in Marilao, Bulacan, providing new vehicle sales and comprehensive after-sales services focused on quality and customer satisfaction. The company advocates environmental sustainability and community development by promoting eco-friendly practices, energy-efficient facilities, and initiatives that support local growth and responsible automotive service.
                </p>
             
<br />

                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                    The company advocates for environmental sustainability and community growth by setting new standards in eco-friendly automotive practices, using renewable energy and low-carbon facilities to reduce environmental impact, and promoting green initiatives that benefit customers and the local community. The dealership also supports local economic development by providing quality jobs, excellent customer service, and opportunities that help enrich the lives of people in Bulacan and nearby areas.
                </p>

            </div>
        </section>
    );
};

export default Intership;
