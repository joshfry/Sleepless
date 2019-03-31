import React from 'react';
// components
import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';
import ContactSection from 'components/ContactSection';
import ShopifySection from 'components/ShopifySection';
// assets
import CLIENTS from 'constants/clients';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <AboutSection />
    <ClientShowcase {...CLIENTS.tepui} style={{ paddingTop: `60px` }} />
    <ClientShowcase {...CLIENTS.lumecube} align="right" />
    <ShopifySection />
    <ClientShowcase {...CLIENTS.august} />
    <ClientShowcase {...CLIENTS.zpacks} align="right" />
    <ContactSection />
  </Layout>
);

export default IndexPage;
