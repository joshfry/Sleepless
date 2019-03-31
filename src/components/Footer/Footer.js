import React from 'react';
import PropTypes from 'prop-types';
// components
import Container from 'components/Container';
import SocialSection from 'components/SocialSection';
// assets
import './Footer.scss';

const Footer = ({ siteTitle }) => {
  return (
    <footer className="Footer">
      <SocialSection style={{ marginBottom: '30px' }} />
      <Container>
        <small className="Footer__copy">
          © All Materials {new Date().getFullYear()} {siteTitle}. Custom Made in
          Santa Cruz California. With bare hands. Mostly in the middle of the
          night.
          <br />
          We’d like to thank you for reading the fine print. We’re
          detail-oriented too. We like you already. Let’s talk.
        </small>
      </Container>
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
