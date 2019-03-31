import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';
import Container from 'components/Container';

import CLIENTS from 'constants/clients';

import shopifyPlusExperts from 'images/shopify-plus-experts.png';
import bgCampfire from 'images/bg-campfire.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <AboutSection />
    <ClientShowcase {...CLIENTS.tepui} style={{ paddingTop: `60px` }} />
    <ClientShowcase {...CLIENTS.lumecube} align="right" />
    <div
      className="ShopifyPlusExpertsPanel"
      style={{ backgroundImage: `url(${bgCampfire})` }}
    >
      <Container>
        <div className="ShopifyPlusExpertsPanel__logo">
          <img src={shopifyPlusExperts} alt="Shopify Plus Experts" />
        </div>
        <p className="intro">
          As a top Shopify Plus Solutions Partner, we eat this stuff alive. If
          you’re passionate and excited about realizing your brand’s true
          potential, we’re your spot.
        </p>
      </Container>
    </div>
    <ClientShowcase {...CLIENTS.august} />
    <ClientShowcase {...CLIENTS.zpacks} align="right" />
  </Layout>
);

export default IndexPage;
