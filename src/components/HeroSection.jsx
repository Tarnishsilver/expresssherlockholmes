import React from 'react';
import h1 from '../images/flipped-hero-image.png';
import icon from '../images/spy-without-bg.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${h1})` }}
            ></div>
            <div className="overlay"></div>

            <div className="hero-text">
                <p className="hero-subtitle">DJS eXpress presents –</p>
                <h1 className="hero-title">Veritas</h1>
                <div className="hero-caption-row">
                    <img src={icon} alt="detective" className="hero-icon" />
                    <p className="hero-caption">
                        A scandal in <span className="highlight">eXpression</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
