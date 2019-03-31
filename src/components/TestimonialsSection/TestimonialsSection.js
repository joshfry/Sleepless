import React from 'react';
// components
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
// assets
import clientGrid from 'images/client-grid.png';
import moreFriends from 'images/more-friends.png';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  return (
    <div className="TestimonialsSection">
      <Container>
        <SectionTitle text="Some friends we&rsquo;ve made along the way." />
        <img src={clientGrid} alt="Our clients" />
        <SectionTitle>
          Yeah, <span>there’s more…</span>
        </SectionTitle>
        <img src={moreFriends} alt="More friends" />
        <button className="TestimonialsSection__viewAllBtn">View All</button>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
