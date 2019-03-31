import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from 'components/Container';
import roosterLogo from 'images/rooster-logo.svg';

import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="brand-statement">
        <Container>
          <div className="rooster-logo">
            <img src={roosterLogo} alt="Sleepless Media logo" />
          </div>
          <div className="lettering">
            <h1 className="lettering__big lettering__lineTwo">
              <span>
                Authentic, Memorable
                <br />
                Digital Experiences
              </span>
            </h1>
            <span className="lettering__small lettering__lineOne">
              We design, develop and nurture
            </span>
            <span className="lettering__small lettering__lineThree">
              custom solutions built for results
            </span>
          </div>
        </Container>
      </div>
      <div className="hero">
        <StaticQuery
          query={graphql`
            query {
              hero: file(relativePath: { eq: "hero.png" }) {
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
