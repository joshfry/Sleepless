import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';

import { CLIENTS } from 'constants';

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
