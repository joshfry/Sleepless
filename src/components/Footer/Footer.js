import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      © {new Date().getFullYear()}
      {` `}
      {siteTitle}
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
