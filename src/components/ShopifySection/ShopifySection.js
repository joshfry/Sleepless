import React from 'react';
// components
import Container from 'components/Container';
import IntroText from 'components/IntroText';
// assets
import shopifyPlusExperts from 'images/shopify-plus-experts.png';
import bgImage from 'images/bg-campfire.jpg';
import './ShopifySection.scss';

const ShopifySection = () => {
  return (
    <section
      id="shopify"
      className="ShopifySection"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="ShopifySection__logo">
          <img src={shopifyPlusExperts} alt="Shopify Plus Experts" />
        </div>
        <IntroText>
          As a top Shopify Plus Solutions Partner, we eat this stuff alive. If
          you’re passionate and excited about realizing your brand’s true
          potential, we’re your spot.
        </IntroText>
      </Container>
    </section>
  );
};

export default ShopifySection;
