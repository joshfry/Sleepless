import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

const GalleryPage = props => (
  <Layout>
    <SEO title="Page two" />
    <h1>Gallery</h1>
    <div style={{ maxWidth: '600px' }}>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    </div>
    <div style={{ maxWidth: '600px' }}>
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
    </div>
    <div style={{ maxWidth: '600px' }}>
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
    </div>
    <p>
      <Link to="/">Home</Link>
    </p>
  </Layout>
);

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "gallery/image-1.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "gallery/image-2.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "gallery/image-3.jpg" }) {
      ...fluidImage
    }
  }
`;

export default GalleryPage;
