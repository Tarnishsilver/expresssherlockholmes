import React, { useEffect } from 'react';
import smoke from '../images/smoke.gif';
import bgImage from '../images/peecheKiImage.png';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';

const WinnerCard = ({ position, label, teamImage, teamName }) => {
  return (
    <div
      className={`relative ${position === '1st' ? 'md:w-[320px] h-[350px]' : position === '2nd' ? 'md:w-[280px] h-[320px]' : 'md:w-[240px] h-[300px]'
        } w-full rounded-[20px] bg-[#2a2a2a] border border-yellow-500/20 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-yellow-400/30 active:-translate-y-2 active:shadow-yellow-400/30 focus:-translate-y-2 focus:shadow-yellow-400/30 cursor-pointer`}

    >
      {/* Ribbon */}
      <div className="absolute w-[150px] h-[150px] -top-[10px] -left-[10px] flex items-center justify-center overflow-hidden">
        <div className="absolute w-[150%] h-10 -rotate-45 -translate-y-5 bg-gradient-to-b from-[#ff6547] via-[#ff9f32] to-[#ff7053] z-[1] text-[0.9rem] sm:text-sm md:text-base font-bold uppercase flex items-center tracking-widest ">
          <div className={`relative ${position === '1st' ? 'pl-16' : 'pl-6'
            }`}>{label}</div>
        </div>
        <div className="absolute w-[10px] h-[10px] bottom-[1px] left-0 z-[0] bg-gradient-to-b from-[#ffb144] to-[#ff7053]"></div>
      </div>

      {/* Team Details */}
      <div className="flex flex-col items-center justify-between p-5 h-full">
        <div
          className="w-full h-[80%] rounded-xl bg-no-repeat bg-cover bg-center border-4 border-[#877227]"
          style={{ backgroundImage: `url(${teamImage})` }}
        ></div>
        <div className="text-[#f0f0e0] font-serif bg-gradient-to-br from-[#826d21] via-[#c19b05] to-[#594809] w-full text-center py-2 rounded-xl text-base sm:text-lg">
          {teamName}
        </div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  useEffect(() => {
    document.title = 'Leaderboard - express';
  }, []);

  const events = [
    {
      name: 'Hounds of RhymeVille',
      teams: [
        { position: '1st', label: 'Winner', name: 'Poetic Punishers', image: '/rhymeville_first.png' },
        { position: '2nd', label: '1st Runner UP', name: 'Rhyme Raiders', image: '/rhymeville_second.png' },
        { position: '3rd', label: '2nd Runner UP', name: 'Verse Vultures', image: '/rhymeville_third.png' }
      ]
    },
    {
      name: 'The Chronicles of 221B',
      teams: [
        { position: '1st', label: 'Winner', name: 'Baker Street Boys', image: '/221b_first.png' },
        { position: '2nd', label: '1st Runner UP', name: 'Watson’s Warriors', image: '/221b_second.png' },
        { position: '3rd', label: '2nd Runner UP', name: 'Holmes Hackers', image: '/221b_third.png' }
      ]
    },
    {
      name: 'Instant Deduction',
      teams: [
        { position: '1st', label: 'Winner', name: 'Rapid Reasoners', image: '/instant_first.png' },
        { position: '2nd', label: '1st Runner UP', name: 'Logic Lords', image: '/instant_second.png' },
        { position: '3rd', label: '2nd Runner UP', name: 'Clue Chasers', image: '/instant_third.png' }
      ]
    },
    {
      name: 'The Spoofy Scandal',
      teams: [
        { position: '1st', label: 'Winner', name: 'Satire Squad', image: '/spoofy_first.png' },
        { position: '2nd', label: '1st Runner UP', name: 'Comedy Crooks', image: '/spoofy_second.png' },
        { position: '3rd', label: '2nd Runner UP', name: 'Laugh Lords', image: '/spoofy_third.png' }
      ]
    },
    {
      name: 'Battle of Baskervilles',
      teams: [
        { position: '1st', label: 'Winner', name: 'Hound Hunters', image: '/baskervilles_first.png' },
        { position: '2nd', label: '1st Runner UP', name: 'Dark Detectives', image: '/baskervilles_second.png' },
        { position: '3rd', label: '2nd Runner UP', name: 'Fog Fighters', image: '/baskervilles_third.png' }
      ]
    }
  ];

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

      <main className="relative z-10 mx-12">
        <div className="text-center text-yellow-400 tracking-widest font-bold pb-6 text-4xl sm:text-5xl md:text-6xl w-full mt-20 sm:mt-28">
          Leaderboard
        </div>
        <hr className="border border-yellow-400/40 mx-auto w-1/2 mb-3"/>

        <div className="flex flex-col gap-24 sm:gap-36 px-4 sm:px-6 md:px-12 py-8 sm:py-24">
          {events.map((event, index) => {
            const teamDesktopOrder = [event.teams[2], event.teams[0], event.teams[1]];
            const teamMobileOrder = [event.teams[0], event.teams[1], event.teams[2]];

            return (
              <div key={index} className="flex flex-col gap-12">
                <label className="text-[#e0c870] text-center text-2xl sm:text-3xl md:text-5xl">
                  {event.name}
                </label>

                {/* Desktop View */}
                <section className="hidden md:flex flex-row-reverse items-center justify-center gap-8 lg:gap-16 xl:gap-24">
                  {teamDesktopOrder.map((team, idx) => (
                    <WinnerCard
                      key={idx}
                      position={team.position}
                      label={team.label}
                      teamImage={team.image}
                      teamName={team.name}
                    />
                  ))}
                </section>

                {/* Mobile View */}
                <section className="flex md:hidden flex-col items-center justify-center gap-8">
                  {teamMobileOrder.map((team, idx) => (
                    <WinnerCard
                      key={idx}
                      position={team.position}
                      label={team.label}
                      teamImage={team.image}
                      teamName={team.name}
                    />
                  ))}
                </section>
              </div>
            );
          })}
        </div>

        {/* Smoke effect */}
        <img
          src={smoke}
          alt="Smoke effect"
          className="fixed inset-0 w-full h-full z-20 mix-blend-screen pointer-events-none animate-fadeout"
        />

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
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default Leaderboard;