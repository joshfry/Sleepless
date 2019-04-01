import React from 'react';
import { Link } from 'gatsby';
// assets
import bgImage from 'images/bg-team-fire.jpg';
import './ContactSection.scss';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="ContactSection"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ContactSection__inner">
        <h2 className="ContactSection__title">Your Search Is Over</h2>
        <p className="ContactSection__description">
          These are the designers you are looking for.
        </p>
        <Link className="btn btn--cta" to="/">
          Let’s Pow Wow
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
