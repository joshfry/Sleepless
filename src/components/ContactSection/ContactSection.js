import React from 'react';
// assets
import bgImage from 'images/bg-team-fire.jpg';
import './ContactSection.scss';

const ContactSection = () => {
  return (
    <div
      className="ContactSection"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
  );
};

export default ContactSection;
