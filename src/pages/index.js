import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import roosterLogo from 'images/rooster-logo.svg';
import iconBrand from 'images/icon-brand.png';
import iconCms from 'images/icon-cms.png';
import iconContent from 'images/icon-content.png';
import iconDesign from 'images/icon-design.png';
import iconShop from 'images/icon-shop.png';

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="section section--one">
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
        <Img fluid={props.data.hero.childImageSharp.fluid} fadeIn={false} />
      </div>
    </div>
    <div className="section section--padded">
      <div className="container">
        <p className="intro">
          We’re an outdoor-loving, music-rocking, coffee-inhaling web design and
          branding agency based in Santa Cruz, California. We’re super serious
          about our work, but ourselves? Nahhhh… not so much.
        </p>

        <h2 className="h2">
          <span>Scope out the Goods</span>
        </h2>

        <div className="grid grid--5-col">
          <div className="grid__item">
            <div className="ScopedGood">
              <div
                className="ScopedGood__image"
                style={{ backgroundImage: `url(${iconDesign})` }}
              />
              <h4 className="ScopedGood__title">
                Website
                <br />
                Design
              </h4>
            </div>
          </div>
          <div className="grid__item">
            <div className="ScopedGood">
              <div
                className="ScopedGood__image"
                style={{ backgroundImage: `url(${iconShop})` }}
              />
              <h4 className="ScopedGood__title">
                Shopify
                <br />
                Ecommerce
              </h4>
            </div>
          </div>
          <div className="grid__item">
            <div className="ScopedGood">
              <div
                className="ScopedGood__image"
                style={{ backgroundImage: `url(${iconCms})` }}
              />
              <h4 className="ScopedGood__title">Wordpress</h4>
            </div>
          </div>
          <div className="grid__item">
            <div className="ScopedGood">
              <div
                className="ScopedGood__image"
                style={{ backgroundImage: `url(${iconBrand})` }}
              />
              <h4 className="ScopedGood__title">Branding</h4>
            </div>
          </div>
          <div className="grid__item">
            <div className="ScopedGood">
              <div
                className="ScopedGood__image"
                style={{ backgroundImage: `url(${iconContent})` }}
              />
              <h4 className="ScopedGood__title">
                Content
                <br />
                Creation
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export const fluidImageLarge = graphql`
  fragment fluidImageLarge on File {
    childImageSharp {
      fluid(maxWidth: 1680) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const fluidImageThumb = graphql`
  fragment fluidImageThumb on File {
    childImageSharp {
      fluid(maxWidth: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "hero.png" }) {
      ...fluidImageLarge
    }
    iconBrand: file(relativePath: { eq: "icon-brand.png" }) {
      ...fluidImageThumb
    }
  }
`;

export default IndexPage;
