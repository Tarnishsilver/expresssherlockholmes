import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Component for the falling money animation
const FallingMoneyNotes = () => {
    // Generate a list of money notes with random positions and animation properties
    const notes = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        initialX: Math.random() * window.innerWidth,
        delay: Math.random() * 1.5,
        duration: 3 + Math.random() * 2,
        rotation: Math.random() * 360,
    }));

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
            {notes.map(note => (
                <motion.div
                    key={note.id}
                    className="absolute w-8 h-4 sm:w-12 sm:h-6 bg-green-500 rounded-sm shadow-lg flex items-center justify-center text-white font-bold text-base sm:text-lg"
                    initial={{ y: -50, x: note.initialX, rotate: note.rotation }}
                    animate={{
                        y: window.innerHeight + 50,
                        x: note.initialX + (Math.random() - 0.5) * 100,
                        rotate: note.rotation + 360,
                    }}
                    transition={{
                        duration: note.duration,
                        repeat: 0,
                        delay: note.delay,
                        ease: 'linear',
                    }}
                >
                    ₹
                </motion.div>
            ))}
        </div>
    );
};

// Component for the confetti burst animation
const Confetti = () => {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];

    // Generate a list of confetti pieces with random properties
    const confettiPieces = Array.from({ length: 150 }).map((_, i) => {
        const isLeft = i < 75;

        return {
            id: i,
            initialX: isLeft ? -50 : window.innerWidth + 50,
            initialY: window.innerHeight,
            rotate: Math.random() * 360,
            color: colors[Math.floor(Math.random() * colors.length)],
            delay: Math.random() * 0.5,
            duration: 2 + Math.random() * 2,
            size: 5 + Math.random() * 10,
        };
    });

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
            {confettiPieces.map(piece => (
                <motion.div
                    key={piece.id}
                    className="absolute"
                    style={{
                        backgroundColor: piece.color,
                        width: piece.size,
                        height: piece.size,
                        borderRadius: '2px',
                    }}
                    initial={{ y: piece.initialY, x: piece.initialX, rotate: piece.rotate, opacity: 1 }}
                    animate={{
                        y: window.innerHeight * 0.2 + (Math.random() - 0.5) * window.innerHeight * 0.4,
                        x: piece.initialX > 0 ? (window.innerWidth / 2 + Math.random() * window.innerWidth / 2) : (Math.random() * window.innerWidth / 2),
                        rotate: piece.rotate + 720,
                        opacity: 0.8,
                    }}
                    transition={{
                        duration: piece.duration,
                        delay: piece.delay,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </div>
    );
};

// Light bulb for slot machine frame
const LightBulb = ({ color, delay }) => {
    const glowColor = color === 'red' ? '#ef4444' : '#facc15';
    return (
        <motion.div
            className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full z-20
          ${color === 'red' ? 'bg-red-500' : 'bg-yellow-400'}`}
            initial={{ opacity: 0.5 }}
            animate={{
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                    `0 0 3px ${glowColor}, 0 0 6px ${glowColor}`,
                    `0 0 6px ${glowColor}, 0 0 12px ${glowColor}`,
                    `0 0 3px ${glowColor}, 0 0 6px ${glowColor}`
                ]
            }}
            transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
                delay: delay,
            }}
        />
    );
};

// Reel for each slot number - now uses flexible sizing
const Reel = ({ value, isSpinning }) => (
    <div className="flex items-center justify-center flex-1 aspect-[3/4] min-w-0 bg-black border-2 border-gray-700 rounded-lg shadow-inner overflow-hidden">
        <motion.div
            key={value}
            initial={{ y: isSpinning ? '100%' : '0%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            // Responsive font sizes to fit better on small screens
            className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-yellow-300"
        >
            {value}
        </motion.div>
    </div>
);


const SlotMachine = () => {
    const [reels, setReels] = useState(['-', '-', '-', '-', '-', '-']);
    const [isSpinning, setIsSpinning] = useState(false);
    const [isPulled, setIsPulled] = useState(false);
    const [message, setMessage] = useState('');
    const [showFallingMoney, setShowFallingMoney] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const prizePoolRef = useRef(null);

    // Create a ref for the audio object so it's only created once
    const audioRef = useRef(null);

    // The winning combination is now 100000 to match the display
    const winningCombination = ['1', '0', '0', '0', '0', '0'];
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // This effect runs only once when the component mounts
    useEffect(() => {
        // Corrected the audio URL to the proper format
        audioRef.current = new Audio("uploaded:cash-register-kaching-376867.mp3");
    }, []);

    const playWinningSound = () => {
        if (audioRef.current) {
            // Rewind to the beginning and play
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                // This will catch the autoplay policy error and log it to the console
                // without breaking the app. The sound should work on subsequent clicks.
                console.error("Audio playback was prevented. This is likely due to the browser's autoplay policy.", error);
            });
        }
    };

    // Handle the spin logic
    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setIsPulled(true);
        setMessage('Spinning...');

        setTimeout(() => setIsPulled(false), 200);

        let spinCount = 0;
        const maxSpinCount = 20;
        const intervalTime = 60;

        const spinInterval = setInterval(() => {
            setReels(reels.map(() => symbols[Math.floor(Math.random() * symbols.length)]));
            spinCount++;

            if (spinCount >= maxSpinCount) {
                clearInterval(spinInterval);

                winningCombination.forEach((finalValue, index) => {
                    setTimeout(() => {
                        let finalSpinCount = 0;
                        const finalSpinMax = 10;

                        const finalSpinInterval = setInterval(() => {
                            setReels(prev => {
                                const newReels = [...prev];
                                newReels[index] = symbols[Math.floor(Math.random() * symbols.length)];
                                return newReels;
                            });
                            finalSpinCount++;

                            if (finalSpinCount >= finalSpinMax) {
                                clearInterval(finalSpinInterval);
                                setReels(prev => {
                                    const newReels = [...prev];
                                    newReels[index] = finalValue;
                                    if (index === winningCombination.length - 1) {
                                        if (newReels.join('') === winningCombination.join('')) {
                                            playWinningSound(); // Play the single winning sound here
                                            setShowConfetti(true);
                                        }
                                        setIsSpinning(false);
                                        setMessage('');
                                    }
                                    return newReels;
                                });
                            }
                        }, 50);
                    }, index * 100);
                });
            }
        }, intervalTime);
    };

    // Scroll listener to trigger the money animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Check if the target element is intersecting (i.e., visible)
                if (entries[0].isIntersecting) {
                    setShowFallingMoney(true);
                    // Disconnect the observer so it only triggers once
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (prizePoolRef.current) {
            observer.observe(prizePoolRef.current);
        }

        return () => {
            if (prizePoolRef.current) {
                observer.unobserve(prizePoolRef.current);
            }
        };
    }, []);

    // Turn off money animation after a delay
    useEffect(() => {
        let timer;
        if (showFallingMoney) {
            timer = setTimeout(() => {
                setShowFallingMoney(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showFallingMoney]);

    // Turn off confetti animation after a delay
    useEffect(() => {
        let timer;
        if (showConfetti) {
            timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showConfetti]);

    return (
        <div className="py-8 flex items-center justify-center">
            <div ref={prizePoolRef} className="relative flex flex-col justify-center items-center rounded-3xl w-full max-w-lg">
                {/* The animations are now rendered inside this component */}
                {showFallingMoney && <FallingMoneyNotes />}
                {showConfetti && <Confetti />}

                <div className="relative w-full p-4 sm:p-6 bg-gradient-to-br from-amber-900 to-yellow-950 rounded-2xl border-4 border-yellow-900 shadow-2xl z-20">
                    {/* Top lights */}
                    <div className="flex justify-around absolute top-2 left-4 right-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <LightBulb key={`top-light-${i}`} color="yellow" delay={i * 0.1} />
                        ))}
                    </div>

                    <div className="relative p-2 mt-8 bg-gradient-to-br from-yellow-900 to-amber-950 rounded-xl border-4 border-amber-950 shadow-inner">
                        <div className="relative z-10 p-2 sm:p-4 bg-black rounded-xl border-4 border-gray-700 shadow-xl overflow-hidden">
                            <div className="flex justify-center items-center h-20 sm:h-24 md:h-28">
                                {/* Responsive font size for the rupee symbol */}
                                <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-yellow-300 mr-1 sm:mr-2">₹</span>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key="reels"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex space-x-1 sm:space-x-2 w-full"
                                    >
                                        {reels.map((value, index) => (
                                            <Reel key={index} value={value} isSpinning={isSpinning} />
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4 min-h-[2rem]">
                        <p className={`text-lg sm:text-xl font-semibold ${isSpinning ? 'text-gray-400' : 'text-green-400'}`}>
                            {message}
                        </p>
                    </div>

                    <div
                        className={`absolute right-0 top-1/2 -mr-8 sm:-mr-10 transform -translate-y-1/2 cursor-pointer z-30 ${isSpinning ? 'cursor-not-allowed' : ''}`}
                        onClick={handleSpin}
                    >
                        <div className="w-12 h-12 bg-amber-800 rounded-full border-4 border-amber-900 shadow-xl"></div>
                        <motion.div
                            className="w-5 h-32 bg-amber-800 absolute bottom-1/2 left-1/2 transform -translate-x-1/2 origin-bottom rounded-t-full shadow-lg"
                            animate={{ rotate: isPulled ? 30 : 0, y: isPulled ? 10 : 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-md"></div>
                        </motion.div>
                    </div>

                    {/* Bottom lights */}
                    <div className="flex justify-around absolute bottom-2 left-4 right-4">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <LightBulb key={`bottom-light-${i}`} color="yellow" delay={(i * 0.1) + 0.5} />
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-lg h-8 bg-amber-950 rounded-b-3xl border-t-4 border-yellow-800 shadow-inner z-10 -mt-2"></div>
            </div>
        </div>
    );
};

export default SlotMachine;

