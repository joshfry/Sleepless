import React from 'react';
// components
import Container from 'components/Container';
// assets
import clientGrid from 'images/client-grid.png';
import moreFriends from 'images/more-friends.png';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  return (
    <div className="TestimonialsSection">
      <Container>
        <h2>Some friends we’ve made along the way.</h2>
        <img src={clientGrid} alt="Our clients" />
        <h2>Yeah, there’s more…</h2>
        <img src={moreFriends} alt="More friends" />
      </Container>
    </div>
  );
};

export default TestimonialsSection;
