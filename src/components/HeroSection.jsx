import React, { useEffect, useState } from 'react';
import h1 from '../images/flipped-hero-image.png';
import icon from '../images/spy-without-bg.png';
import FlipCardGrid from './Cards';

const HeroSection = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        document.title = "Home - express";

        const handleScroll = () => {
            setOffsetY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Hero */}
            <section
                className="relative w-screen h-screen flex items-center flex-col-reverse sm:flex-row justify-evenly pb-12 px-6 sm:px-12 md:px-24 lg:px-44 pt-0 sm:pt-12 bg-cover"
                style={{
                    backgroundImage: `url(${h1})`,
                    backgroundPosition: `center ${offsetY * 0.4}px`,
                    backgroundSize: "cover",
                    backgroundAttachment: "scroll"
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Text */}
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

                {/* Icon */}
                <img
                    src={icon}
                    alt="detective"
                    className="lg:h-108 md:h-64 sm:h-32 opacity-75 z-20"
                />
            </section>

            {/* Cards Section */}
            <section className="bg-black-100 py-16"
                style={{
                    backgroundImage: `url(${h1})`
                }}
            >
                <h1 className="text-center text-yellow-400 tracking-widest font-bold pb-8 text-4xl sm:text-5xl md:text-6xl w-full mt-4 lg:mt-12">
                    Event Details
                </h1>
                <div className="container mx-auto px-6">
                    <FlipCardGrid />
                </div>
            </section>
        </>
    );
};

export default HeroSection;
