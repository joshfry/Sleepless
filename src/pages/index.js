import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';
import ShopifyPlusExpertsPanel from 'components/ShopifyPlusExpertsPanel';
import CLIENTS from 'constants/clients';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <AboutSection />
    <ClientShowcase {...CLIENTS.tepui} style={{ paddingTop: `60px` }} />
    <ClientShowcase {...CLIENTS.lumecube} align="right" />
    <ShopifyPlusExpertsPanel />
    <ClientShowcase {...CLIENTS.august} />
    <ClientShowcase {...CLIENTS.zpacks} align="right" />
  </Layout>
);

export default IndexPage;
