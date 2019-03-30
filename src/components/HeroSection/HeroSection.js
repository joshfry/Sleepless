import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import roosterLogo from 'images/rooster-logo.svg';

const HeroSection = () => {
  return (
    <div className="section section--fullHeight section--one">
      <div className="brand-statement">
        <div className="container">
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
        </div>
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
          render={data => (
            <Img fluid={data.hero.childImageSharp.fluid} fadeIn={false} />
          )}
        />
      </div>
    </div>
  );
};

export default HeroSection;
