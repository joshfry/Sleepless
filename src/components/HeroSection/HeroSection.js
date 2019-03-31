import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from 'components/Container';
import roosterLogo from 'images/rooster-logo.svg';

import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="HeroSection">
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

      <div className="HeroSection__image">
        <StaticQuery
          query={graphql`
            query {
              hero: file(relativePath: { eq: "hero@1-5x.png" }) {
                childImageSharp {
                  fluid(maxWidth: 1680) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => <Img fluid={data.hero.childImageSharp.fluid} />}
        />
      </div>
    </div>
  );
};

export default HeroSection;
