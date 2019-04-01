import React from 'react';
import { graphql } from 'gatsby';
// components
import Layout from 'components/Layout';
import SEO from 'components/Seo';
import HeroSection from 'components/HeroSection';
import AboutSection from 'components/AboutSection';
import ClientShowcase from 'components/ClientShowcase';
import ContactSection from 'components/ContactSection';
import ShopifySection from 'components/ShopifySection';
import TestimonialsSection from 'components/TestimonialsSection';
// assets
import CLIENTS from 'data/clients';

const IndexPage = ({ data }) => {
  // Example using Contentful CMS
  const { node } = data.allContentfulClientShowcase.edges[0];
  const {
    clientName,
    projectDescription,
    projectUrl,
    builtOn,
    screenshot: {
      file: { url: screenshotUrl },
    },
    productImage: {
      file: { url: productImageUrl },
    },
  } = node;

  const TEPUI = {
    clientName,
    projectDescription,
    projectUrl,
    builtOn,
    screenshot: `https://${screenshotUrl}`,
    productImg: `https://${productImageUrl}`,
  };

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <AboutSection />
      {/* <ClientShowcase {...CLIENTS.tepui} style={{ paddingTop: `60px` }} /> */}
      {/* Example using Contentful CMS */}
      {<ClientShowcase {...TEPUI} style={{ paddingTop: `60px` }} />}
      <ClientShowcase {...CLIENTS.lumecube} align="right" productAlign="top" />
      <ShopifySection />
      <ClientShowcase {...CLIENTS.august} />
      <ClientShowcase {...CLIENTS.zpacks} align="right" className="starsBg" />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulClientShowcase {
      edges {
        node {
          clientName
          projectDescription
          projectUrl
          builtOn
          screenshot {
            file {
              url
              fileName
              contentType
            }
            id
          }
          productImage {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
