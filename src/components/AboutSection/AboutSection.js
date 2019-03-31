import React from 'react';
// components
import Container from 'components/Container';
import IntroText from 'components/IntroText';
// assets
import iconBrand from 'images/icon-brand.png';
import iconCms from 'images/icon-cms.png';
import iconContent from 'images/icon-content.png';
import iconDesign from 'images/icon-design.png';
import iconShop from 'images/icon-shop.png';
import './AboutSection.scss';

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <Container>
        <IntroText>
          We’re an outdoor-loving, music-rocking, coffee-inhaling web design and
          branding agency based in Santa Cruz, California. We’re super serious
          about our work, but ourselves? Nahhhh… not so much.
        </IntroText>

        <h2 className="ScopedTitle">
          <span>Scope out the Goods</span>
        </h2>

        <div className="Scoped">
          <div className="grid grid--5-col">
            <div className="grid__item">
              <div className="ScopedGood">
                <div
                  className="ScopedGood__image"
                  style={{ backgroundImage: `url(${iconDesign})` }}
                />
                <h4 className="ScopedGood__title">
                  Website
                  <br />
                  Design
                </h4>
              </div>
            </div>
            <div className="grid__item">
              <div className="ScopedGood">
                <div
                  className="ScopedGood__image"
                  style={{ backgroundImage: `url(${iconShop})` }}
                />
                <h4 className="ScopedGood__title">
                  Shopify
                  <br />
                  Ecommerce
                </h4>
              </div>
            </div>
            <div className="grid__item">
              <div className="ScopedGood">
                <div
                  className="ScopedGood__image"
                  style={{ backgroundImage: `url(${iconCms})` }}
                />
                <h4 className="ScopedGood__title">Wordpress</h4>
              </div>
            </div>
            <div className="grid__item">
              <div className="ScopedGood">
                <div
                  className="ScopedGood__image"
                  style={{ backgroundImage: `url(${iconBrand})` }}
                />
                <h4 className="ScopedGood__title">Branding</h4>
              </div>
            </div>
            <div className="grid__item">
              <div className="ScopedGood">
                <div
                  className="ScopedGood__image"
                  style={{ backgroundImage: `url(${iconContent})` }}
                />
                <h4 className="ScopedGood__title">
                  Content
                  <br />
                  Creation
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
