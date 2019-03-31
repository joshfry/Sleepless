import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';
import Container from 'components/Container';

import shopifyPlusExperts from 'images/shopify-plus-experts.png';
import bgCampfire from 'images/bg-campfire.jpg';

// import { CLIENTS } from 'constants';
const CLIENTS = {
  tepui: {
    clientName: 'Tepui',
    projectDescription:
      'A trusted leader in rooftop tents and adventure gear, Tepui recruited us in the midst of a rebrand to fully reinvent their website and upgrade to the Shopify Plus Platform.',
    projectUrl: '/',
    builtOn: 'shopify-plus',
    screenshot: '/tepui-screenshot.jpg',
    productImg: '/tepui-product-image.png',
  },
  lumecube: {
    clientName: 'Lumecube',
    projectDescription:
      'Maker’s of the world’s most versatile light, we teamed up with Lumecube to design and develop a shiny new website, migrating them from Magento over to the Shopify Platform.',
    projectUrl: '/',
    builtOn: 'shopify',
    screenshot: '/lumecube-screenshot.jpg',
    productImg: '/lumecube-product-image.png',
  },
  august: {
    clientName: 'august',
    projectDescription:
      'A trusted leader in rooftop tents and adventure gear, Tepui recruited us in the midst of a rebrand to fully reinvent their website and upgrade to the Shopify Plus Platform.',
    projectUrl: '/',
    builtOn: 'shopify-plus',
    screenshot: '/august-screenshot.jpg',
    productImg: '/august-product-image.png',
  },
  zpacks: {
    clientName: 'Zpacks',
    projectDescription:
      'Designed and crafted in their US workshop, Zpacks makes the best hiking gear money can buy. We partnered with them to take their web presence to entirely new heights.',
    projectUrl: '/',
    builtOn: 'shopify',
    screenshot: '/zpacks-screenshot.jpg',
    productImg: '',
  },
};

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
