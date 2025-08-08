import React, { useEffect } from 'react';
import h1 from '../images/flipped-hero-image.png';
import icon from '../images/spy-without-bg.png';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'; 

const HeroSection = () => {
    useEffect(() => {
        document.title = "Home - express";
    }, []);

    return (
        <section
            className="relative w-screen h-screen overflow-hidden flex items-center flex-col-reverse sm:flex-row justify-evenly pb-12 px-6 sm:px-12 md:px-24 lg:px-44 pt-0 sm:pt-12 bg-cover bg-[20%_30%]"
            style={{ backgroundImage: `url(${h1})` }}
        >
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="relative z-20 text-white max-w-[90%] sm:max-w-[700px] md:max-w-[800px]">
                <p className="text-gray-300 italic text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] tracking-wider mb-2 font-serif">
                    DJS eXpress presents –
                </p>

                <h1 className="text-yellow-400 text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] font-bold leading-none drop-shadow-md font-serif">
                    Veritas
                </h1>

                <div className="flex items-center gap-4 mt-6 sm:mt-4">
                    <p className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] text-gray-200 font-serif leading-snug">
                        A scandal in <span className="italic text-yellow-100">eXpression</span>
                    </p>
                </div>
            </div>
            <img src={icon} alt="detective" className="lg:h-108 md:h-64 sm:h-32 opacity-75 z-11" />
            <ScrollToTopButton />
        </section>
    );
};

export default HeroSection;
