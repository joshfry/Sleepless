import React from 'react';
import { Link } from 'gatsby';
// assets
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="Nav">
      <Link className="Nav__link Nav__link--active" to="/">
        Our Work
      </Link>
      <Link className="Nav__link" to="/">
        Who We Are
      </Link>
      <Link className="Nav__link" to="/">
        Expertise
      </Link>
      <Link className="Nav__link" to="/">
        Shopify Plus
      </Link>
      <Link className="Nav__link" to="/">
        Blog
      </Link>
      <Link className="Nav__link" to="/">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
