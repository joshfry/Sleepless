import React from 'react';
// components
import Container from 'components/Container';
import IntroText from 'components/IntroText';
// assets
import shopifyPlusExperts from 'images/shopify-plus-experts.png';
import bgCampfire from 'images/bg-campfire.jpg';
import './ShopifyPlusExpertsPanel.scss';

const ShopifyPlusExpertsPanel = () => {
  return (
    <div
      className="ShopifyPlusExpertsPanel"
      style={{ backgroundImage: `url(${bgCampfire})` }}
    >
      <Container>
        <div className="ShopifyPlusExpertsPanel__logo">
          <img src={shopifyPlusExperts} alt="Shopify Plus Experts" />
        </div>
        <IntroText>
          As a top Shopify Plus Solutions Partner, we eat this stuff alive. If
          you’re passionate and excited about realizing your brand’s true
          potential, we’re your spot.
        </IntroText>
      </Container>
    </div>
  );
};

export default ShopifyPlusExpertsPanel;
