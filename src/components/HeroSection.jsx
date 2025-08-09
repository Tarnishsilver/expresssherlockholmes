import React from 'react';
import h1 from '../images/flipped-hero-image.png'; // Placeholder for the hero image
import icon from '../images/spy-without-bg.png'; // Placeholder for the icon image
import FlipCardGrid from './Cards';
import SlotMachine from './PrizePool';

const HeroSection = () => {
    // Placeholder function for the button's onClick event
    const handleRegister = () => {
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSex0PAOw7S13GpJX4onbBJz2lT0jnJsjDR6jP2_NsFTj9ST8g/viewform",
          "_blank"
        );
      };

    return (
        // The main container now holds the fixed background image to create the parallax effect.
        <div 
            className="w-screen min-h-screen"
            style={{
                backgroundImage: `url(${h1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}
        >
            {/* Hero Section */}
            <section
                className="relative w-full h-screen flex items-center flex-col-reverse sm:flex-row justify-evenly pb-12 px-6 sm:px-12 md:px-24 lg:px-44 pt-0 sm:pt-12"
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

                    {/* Buttons */}
                    <div className="flex justify-center mt-10">
                        <button
                            className="text-black font-semibold text-xl px-8 py-3 bg-gradient-to-br from-[#725c03] via-[#ffd83e] to-[#806705] rounded-3xl hover:bg-[#fde047] transition"
                            onClick={handleRegister}
                        >
                            Register
                        </button>
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
            <section className="bg-black/60 py-16">
                <h1 className="text-center text-yellow-400 tracking-widest font-bold pb-4 text-4xl sm:text-5xl md:text-6xl w-full mt-4 lg:mt-12 font-serif">
                    Event Details
                </h1>
                <div className="container mx-auto px-6">
                    <FlipCardGrid />
                </div>
            </section>
            
            {/* Prize Pool */}
            <section className="bg-black/60 py-16">
                <h1 className="text-center text-yellow-400 tracking-widest font-bold pb-2 text-4xl sm:text-5xl md:text-6xl w-full mt-4 lg:mt-12 font-serif">
                    Prize Pool
                </h1>
                <p className="text-center text-gray-300 font-serif italic text-lg sm:text-xl md:text-2xl mb-8">
                    Pull The Lever To Reveal!
                </p>
                <div className="container mx-auto px-6">
                    <SlotMachine/>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
