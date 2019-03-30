import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';

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
    <div className="container">
      <ClientShowcase {...CLIENTS.tepui} style={{ paddingTop: `60px` }} />
      <ClientShowcase {...CLIENTS.lumecube} align="right" />
      <ClientShowcase {...CLIENTS.august} />
      <ClientShowcase {...CLIENTS.zpacks} align="right" />
    </div>
  </Layout>
);

export default IndexPage;
