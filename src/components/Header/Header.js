import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// components
import Container from 'components/Container';
import Nav from 'components/Nav';
import MobileNavToggle from 'components/MobileNavToggle';
// assets
import logo from 'images/sleepless-logo-type.svg';
import './Header.scss';

const Header = ({ siteTitle }) => (
  <header className="Header">
    <Container>
      <div className="Header__brand">
        <h1 className="Header__siteTitle">{siteTitle}</h1>
        <Link className="Header__brand__link" to="/">
          <img src={logo} alt="Sleepless Media Logo" width="202" height="20" />
        </Link>
      </div>
      <div className="Header__nav">
        <Nav />
        <div className="Header__nav__toggle">
          <MobileNavToggle />
        </div>
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
