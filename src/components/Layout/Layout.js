import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from 'components/Header';
import Footer from 'components/Footer';
import 'stylesheets/index.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="Layout">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
