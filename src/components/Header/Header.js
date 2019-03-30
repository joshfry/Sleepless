import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <header className="Header">
    <h1 className="Header__brand">
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
