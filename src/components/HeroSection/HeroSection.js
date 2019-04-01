import React from 'react';
// components
import Container from 'components/Container';
// assets
import roosterLogo from 'images/rooster-logo.svg';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section id="hero" className="HeroSection">
      <Container>
        <div className="HeroSection__logo">
          <img src={roosterLogo} alt="Sleepless Media logo" />
        </div>
        <div className="Lettering">
          <h1 className="Lettering__big Lettering__lineTwo">
            <span>
              Authentic, Memorable
              <br />
              Digital Experiences
            </span>
          </h1>
          <span className="Lettering__small Lettering__lineOne">
            We design, develop and nurture
          </span>
          <span className="Lettering__small Lettering__lineThree">
            custom solutions built for results
          </span>
        </div>
      </Container>
      <div className="HeroSection__image" />
    </section>
  );
};

export default HeroSection;
