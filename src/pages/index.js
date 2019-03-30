import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <AboutSection />
    <div className="section section--fullHeight section--padded">
      <ClientShowcase />
    </div>
  </Layout>
);

export default IndexPage;
