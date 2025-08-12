import React, {useEffect} from 'react';
import fes from '../images/fesindia_logo.jpeg'; //sponser 1
import omkar from '../images/omkar.png'; // sponser 2
import travvellis from '../images/travvellis.png'; // sponser 3
import redbull from '../images/redbull.jpeg'; // sponser 4
import myntra from '../images/Myntra.png'; // sponser 5
import smoke from '../images/smoke.gif';
import bgImage from '../images/1d43bf935f386047db9c892e601491b4.jpg';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'; 

const sponsors = [
  {
    id: 1,
    type: 'odd',
    name: 'Fragomen',
    image: fes,
    description: 'Fragomen is the Sherlock Holmes of global immigration—skillfully navigating complex visa puzzles and uncovering seamless pathways for students and institutions alike. As your education partner, they solve every legal mystery with precision and expertise, ensuring your international journey unfolds without a hitch.'
  },
  {
    id: 2,
    type: 'even',
    name: 'Omkar Snacks',
    image: omkar,
    description: 'Omkar Snacks is the Sherlock Holmes of flavor—expertly crafting each bite with the precision of a master detective uncovering hidden delights. As your food partner, they deliver irresistible snacks that solve the mystery of hunger, turning every craving into a satisfying revelation.'
  },
  {
    id: 3,
    type: 'odd',
    name: 'Redbull',
    image: redbull,
    description: 'Red Bull is the Sherlock Holmes of energy—sharp, relentless, and always two steps ahead, solving the mystery of fatigue before it strikes. As your energy partner, it’s the ultimate detective’s brew, fueling focus, wit, and the power to chase every clue to its thrilling conclusion.'
  },
  {
    id: 4,
    type: 'even',
    name: 'Fwd by Myntra',
    image: myntra,
    description: 'Fwd by Myntra is the Sherlock Holmes of fashion—masterfully decoding style mysteries and uncovering the perfect look for every occasion. As your fashion partner, it crafts sharp, clever ensembles that reveal your unique identity, turning heads like a brilliant deduction in London’s foggy streets.'
  },
  {
    id: 5,
    type: 'odd',
    name: 'Travvellis',
    image: travvellis,
    description: 'Travvellis is the Sherlock Holmes of travel—meticulously sniffing out the most enchanting routes, hidden hideaways, and unforgettable experiences. As your travel detective, it solves the mystery of wanderlust with precision, turning every journey into a seamless adventure filled with surprising delights around every corner.'
  }
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
        <h1 className="text-center text-yellow-400 tracking-widest font-bold pb-8 text-4xl sm:text-5xl md:text-6xl w-full mt-4 lg:mt-12">
          Our Sponsors
        </h1>
        <hr className="border border-yellow-400/40 mx-auto w-full mb-12" />

        {sponsors.map(({ id, type, name, image, description }) => (
          <section key={id} id={`sponsor${id}`} className="mb-10 px-2">
            <div
              className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg border border-yellow-500/20 shadow-md bg-[#2a2a2a] transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-400/30 ${
                type === 'even' ? 'md:flex-row-reverse text-right' : ''
              }`}
            >
              <div className="w-full md:w-[300px] border-4 border-[#6b4c2c] p-2 shadow-inner">
                <img
                  src={image}
                  alt={`${name} Logo`}
                  className="w-full h-auto filter sepia-[.6] grayscale-[.2] hover:scale-105 hover:sepia-[.2] hover:grayscale-0 transition-transform duration-300 cursor-zoom-in"
                />
              </div>

              <div className="text-[#cccccc] text-base flex-1">
                <h2 className="text-2xl font-serif text-[#e0c870] mb-2 drop-shadow-sm">
                  {name}
                </h2>
                <p className="text-sm leading-relaxed">
                  {description}
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
      <ScrollToTopButton />

    </div>
  );
};

export default Sponsors;
