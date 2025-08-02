import React, {useEffect} from 'react';
import sponsor from '../images/Sponsors.png';
import smoke from '../images/smoke.gif';
import bgImage from '../images/1d43bf935f386047db9c892e601491b4.jpg';

const sponsors = [
  { id: 1, type: 'odd' },
  { id: 2, type: 'even' },
  { id: 3, type: 'odd' },
  { id: 4, type: 'even' },
  { id: 5, type: 'odd' },
  { id: 6, type: 'even' },
];

const Sponsors = () => {
  useEffect(() => {
    document.title = "Sponsors - express";
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden text-[#f0f0e0] font-serif relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-serif text-center text-yellow-400 drop-shadow-lg mb-10 my-10">
          Our Sponsors
        </h1>
        <hr className="border-t border-yellow-400/40 mx-auto mb-12 w-3/4" />

        {sponsors.map(({ id, type }) => (
          <section key={id} id={`sponsor${id}`} className="mb-10 px-2">
            <div
              className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg border border-yellow-500/20 shadow-md bg-[#2a2a2a] transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-400/30 ${
                type === 'even' ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-[300px] border-4 border-[#6b4c2c] p-2 shadow-inner">
                <img
                  src={sponsor}
                  alt={`Sponsor ${id} Logo`}
                  className="w-full h-auto filter sepia-[.6] grayscale-[.2] hover:scale-105 hover:sepia-[.2] hover:grayscale-0 transition-transform duration-300 cursor-zoom-in"
                />
              </div>

              <div className="text-[#cccccc] text-base flex-1">
                <h2 className="text-2xl font-serif text-[#e0c870] mb-2 drop-shadow-sm">
                  Sponsor ka naam
                </h2>
                <p className="text-sm leading-relaxed">
                  Sponsor ki tarif... Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem repudiandae suscipit nam, magnam corporis!
                </p>
              </div>
            </div>
          </section>
        ))}

        <img
          src={smoke}
          alt="Smoke effect"
          className="fixed inset-0 w-full h-full z-20 mix-blend-screen pointer-events-none animate-fadeout"
        />
      </main>

      {/* Add smoke animation */}
      <style>
        {`
        @keyframes fadeout {
          0%, 80% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        .animate-fadeout {
          animation: fadeout 1s forwards;
        }
        `}
      </style>
    </div>
  );
};

export default Sponsors;
