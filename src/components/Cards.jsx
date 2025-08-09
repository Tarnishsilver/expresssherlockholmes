
import React, { useState, useEffect } from "react";

const FlipCard = ({ title, frontText, backText }) => {
    const [flipped, setFlipped] = useState(false);

    const containerStyle = {
        width: "100%",
        maxWidth: "300px", // like Tailwind w-64
        aspectRatio: "4 / 5", // like h-80 (320px height for 256px width)
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
        color: "white",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
    };

    const frontStyle = {
        ...faceCommonStyle,
        backgroundColor: "#2a2a2a",
    };

    const backStyle = {
        ...faceCommonStyle,
        backgroundColor: "#2a2a2a", // gray-900
        transform: "rotateY(180deg)",
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
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                        {title}
                    </h2>
                    <p>{frontText}</p>
                </div>
                <div style={backStyle}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                        More Info
                    </h2>
                    <p>{backText}</p>
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
        { title: "Event 1", frontText: "Short description", backText: "Detailed explanation about Card 1." },
        { title: "Event 2", frontText: "Short description", backText: "Detailed explanation about Card 2." },
        { title: "Event 3", frontText: "Short description", backText: "Detailed explanation about Card 3." },
        { title: "Event 4", frontText: "Short description", backText: "Detailed explanation about Card 4." },
        { title: "Event 5", frontText: "Short description", backText: "Detailed explanation about Card 5." },
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
        gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
        gap: "1.5rem",
    };

    // Styles for bottom row (2 cards), centered
    const bottomRowStyle = {
        display: "grid",
        gap: "1.5rem",
        margin: "1.5rem auto 0",
        maxWidth: "600px",
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
