import React, { useEffect } from 'react';
import h1 from '../images/flipped-hero-image.png';
import icon from '../images/spy-without-bg.png';

const HeroSection = () => {
    useEffect(() => {
        document.title = "Home - express";
    }, []);

    return (
        <section
            className="relative w-screen h-screen overflow-hidden flex items-center pl-44 pt-16"
            style={{ backgroundImage: `url(${h1})` }}
        >
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <div className="relative z-20 text-white max-w-[800px]">
                <p className="text-gray-300 italic text-[1.7rem] tracking-wider mb-2 font-serif">
                    DJS eXpress presents –
                </p>

                <h1 className="text-yellow-400 text-[9rem] font-bold leading-none drop-shadow-md font-serif">
                    Veritas
                </h1>

                <div className="flex items-center gap-4 mt-4">
                    <img src={icon} alt="detective" className="h-[100px] mb-2" />
                    <p className="text-[2.5rem] text-gray-200 font-serif leading-snug">
                        A scandal in <span className="italic text-yellow-100">eXpression</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
