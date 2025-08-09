import React, { useState, useEffect } from "react";

const FlipCard = ({ title, frontText, backText }) => {
    const [flipped, setFlipped] = useState(false);

    const containerStyle = {
        width: "100%",
        maxWidth: "280px", // Slightly smaller than before
        aspectRatio: "4 / 5",
        cursor: "pointer",
        perspective: "1000px",
    };

    const innerStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        transition: "transform 0.7s",
        transformStyle: "preserve-3d",
        transform: flipped ? "rotateY(180deg)" : "none",
    };

    const faceCommonStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "1rem",
        boxShadow: "0 4px 8px #facc15",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
        color: "#d1d5db", // Light gray for body text
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
    };

    const frontStyle = {
        ...faceCommonStyle,
        backgroundColor: "#2a2a2a",
        border: "2px solid #facc15"
    };

    const backStyle = {
        ...faceCommonStyle,
        backgroundColor: "#2a2a2a",
        border: "2px solid #facc15",
        transform: "rotateY(180deg)",
    };

    const titleStyle = {
        fontSize: "1.25rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
        fontFamily: "serif", // Matching Veritas font
        color: "#facc15", // Yellow color
    };

    const backTitleStyle = {
        fontSize: "1.25rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
        fontFamily: "serif",
        color: "#facc15",
    };
    
    const textStyle = {
        fontSize: "1rem",
        color: "#d1d5db",
    };
    
    const backTextStyle = {
        fontSize: "0.8rem",
        color: "#d1d5db",
    };

    return (
        <div
            style={containerStyle}
            onClick={() => setFlipped(!flipped)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setFlipped(!flipped);
            }}
            aria-pressed={flipped}
        >
            <div style={innerStyle}>
                <div style={frontStyle}>
                    <h2 style={titleStyle}>
                        {title}
                    </h2>
                    <p style={textStyle}>{frontText}</p>
                </div>
                <div style={backStyle}>
                    <h2 style={backTitleStyle}>
                        More Info
                    </h2>
                    <p style={backTextStyle}>{backText}</p>
                </div>
            </div>
        </div>
    );
};

const FlipCardGrid = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 768);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cards = [
        {
            title: "Hounds of RhymeVille",
            frontText: "Poetry is just deduction in disguise.",
            backText: "Explore the rhythm and mystery of poetry, where every line hints at something deeper. Participants will present original pieces, whether emotional, observational, or witty. Just as Holmes reads between the lines, great poets reveal more than they say. Use your voice to turn verse into vision and let your message resonate."
        },
        {
            title: "The Chronicles of 221B",
            frontText: "Stories are just unsolved cases waiting for a mind to deduce them.",
            backText: "Two voices, one story. In this event, duos bring stories to life through tone, expression, and pacing. Whether fiction or fact, a good story unravels like a case file, and a good storyteller guides the listener to every twist, much like a certain resident of 221B. Let your tale leave behind clues your audience won't forget."
        },
        {
            title: "Instant Deduction",
            frontText: "My mind rebels at stagnation. Improv is the only logical solution.",
            backText: "With no script and limited prep time, participants must build scenes on the spot using prompts. The event tests wit, timing, and chemistry. In moments of chaos, quick thinking often reveals the most entertaining outcomes, not unlike solving a case under pressure. Expect the unexpected and respond like a detective in disguise."
        },
        {
            title: "The Spoofy Scandals",
            frontText: "Ridicule is a weapon too. Even Holmes couldn’t argue with satire.",
            backText: "Teams perform humorous sketches that playfully mock situations, characters, or tropes. This is a space to reimagine mysteries through a lighter lens. A touch of absurdity, a clever twist, and a nod to the detective world can turn even the most serious plot into comedy. Make your audience laugh like they just uncovered a ridiculous clue."
        },
        {
            title: "Battle of Baskervilles",
            frontText: "The tongue is mightier than the blade.",
            backText: "This structured debate challenges participants to argue with clarity, logic, and composure. Teams will present points, counter opposing views, and defend their stance. Like a true detective in discussion, the goal is to reveal the strongest argument through calm reasoning."
        }
    ];
    

    // Container styles for grid layout
    const gridContainerStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
    };

    // Styles for top row (3 cards)
    const topRowStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
    };

    // Styles for bottom row (2 cards), centered
    const bottomRowStyle = {
        display: "grid",
        gap: "1.5rem",
        margin: "1.5rem auto 0",
        maxWidth: "580px",
        gridTemplateColumns: isDesktop ? "repeat(2, 1fr)" : "1fr",
    };

    return (
        <section style={gridContainerStyle}>
            <div style={topRowStyle}>
                {cards.slice(0, 3).map((card, i) => (
                    <FlipCard key={i} {...card} />
                ))}
            </div>

            <div style={bottomRowStyle}>
                {cards.slice(3).map((card, i) => (
                    <FlipCard key={i + 3} {...card} />
                ))}
            </div>
        </section>
    );
};

export default FlipCardGrid;
