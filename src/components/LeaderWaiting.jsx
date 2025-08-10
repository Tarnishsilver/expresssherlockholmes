import React, { useEffect, useState } from 'react';
import smoke from '../images/smoke.gif';

const LeaderWaiting = () => {
  const [showSmoke, setShowSmoke] = useState(true);

  useEffect(() => {
    // Smoke shows initially and fades out after 1.5s
    const timer = setTimeout(() => {
      setShowSmoke(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes breatheGlowEnhanced {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 6px #fbbf24);
            opacity: 1;
          }
          40% {
            transform: scale(1.1) rotate(5deg);
            filter: drop-shadow(0 0 18px #f59e0b);
            opacity: 0.85;
          }
          60% {
            transform: scale(1.05) rotate(-3deg);
            filter: drop-shadow(0 0 22px #fbbf24);
            opacity: 0.6;
          }
          80% {
            transform: scale(1.1) rotate(3deg);
            filter: drop-shadow(0 0 20px #f97316);
            opacity: 0.85;
          }
        }

        @keyframes footstepBounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          40% {
            transform: translateY(-12px);
            opacity: 1;
          }
        }

        @keyframes fadeout {
          0%, 80% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        .animate-fadeout {
          animation: fadeout 1s forwards;
        }
      `}</style>

      {/* Smoke animation shown only on load, then fades out */}
      {showSmoke && (
        <img
          src={smoke}
          alt="Smoke effect"
          className="fixed inset-0 w-full h-full z-20 mix-blend-screen pointer-events-none animate-fadeout"
          style={{ animationDuration: '1s' }}
        />
      )}

      <div className="bg-gray-900 h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <div className="flex justify-center mb-6">
            <svg
              className="w-20 h-20 text-yellow-400"
              style={{ animation: 'breatheGlowEnhanced 4s ease-in-out infinite' }}
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Magnifying glass circle */}
              <circle cx="27" cy="27" r="16" />
              {/* Handle */}
              <line x1="41" y1="41" x2="54" y2="54" />
            </svg>
          </div>

          {/* Footsteps loading animation */}
          <div className="flex justify-center space-x-6 mb-10">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-5 h-5 rounded-full bg-yellow-400"
                style={{
                  animation: `footstepBounce 1.2s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>

          <br />
          <br />

          <p className="mb-8 text-2xl">
            The <span className="text-yellow-400 font-bold text-6xl">MYSTERY</span> is yet{' '}
            <span className="text-yellow-400 font-bold text-4xl">unsolved</span>...
          </p>
          <p className="text-sm tracking-wider leading-8">
            Show off your skills, who knows -<br />
            GenZ Sherlock Holmes might be{' '}
            <span className="text-yellow-400 font-bold text-xl">YOU.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LeaderWaiting;
