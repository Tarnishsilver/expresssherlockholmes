import React, {useEffect} from 'react';
import s from '../images/Sponsors.png'
// import sponsor1 from '../images/sponsor1.png';
// import sponsor2 from '../images/sponsor2.png';
// import sponsor3 from '../images/sponsor3.png';
// import sponsor4 from '../images/sponsor4.png';
// import sponsor5 from '../images/sponsor5.png';
// import sponsor6 from '../images/sponsor6.png';
import smoke from '../images/smoke.gif';
import bgImage from '../images/1d43bf935f386047db9c892e601491b4.jpg';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'; 

const sponsors = [
  {
    id: 1,
    type: 'odd',
    name: 'Alpha Corp',
    image: s,
    description: 'Alpha Corp is a global leader in technology and innovation, supporting students through scholarships and mentorships.Alpha Corp is a global leader in technology and innovation, supporting students through scholarships and mentorships.'
  },
  {
    id: 2,
    type: 'even',
    name: 'Beta Tech',
    image: s,
    description: 'Beta Tech empowers developers and creators by offering advanced cloud solutions and AI toolkits.Alpha Corp is a global leader in technology and innovation, supporting students through scholarships and mentorships.'
  },
  {
    id: 3,
    type: 'odd',
    name: 'Gamma Group',
    image: s,
    description: 'Gamma Group champions sustainability through green tech and renewable energy investments.Alpha Corp is a global leader in technology and innovation, supporting students through scholarships and mentorships.'
  },
  {
    id: 4,
    type: 'even',
    name: 'Delta Solutions',
    image: s,
    description: 'Delta Solutions offers enterprise-grade software that streamlines business operations for all sizes.Alpha Corp is a global leader in technology and innovation, supporting students through scholarships and mentorships.'
  },
  {
    id: 5,
    type: 'odd',
    name: 'Epsilon Media',
    image: s,
    description: 'Epsilon Media creates immersive storytelling experiences in film, gaming, and AR/VR formats.Alpha Corp is a global leader in technology and innovation, supporting students through scholarships and mentorships.'
  },
  {
    id: 6,
    type: 'even',
    name: 'Zeta Labs',
    image: s,
    description: 'Zeta Labs is a biotech company researching solutions for next-generation healthcare.Alpha Corp is a global leader in technology and innovation, supporting students through scholarships and mentorships.'
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
