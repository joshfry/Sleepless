import React from 'react';

import Container from 'components/Container';
import iconBrand from 'images/icon-brand.png';
import iconCms from 'images/icon-cms.png';
import iconContent from 'images/icon-content.png';
import iconDesign from 'images/icon-design.png';
import iconShop from 'images/icon-shop.png';

const AboutSection = () => {
  return (
    <div className="section section--fullHeight section--padded">
      <Container>
        <p className="intro">
          We’re an outdoor-loving, music-rocking, coffee-inhaling web design and
          branding agency based in Santa Cruz, California. We’re super serious
          about our work, but ourselves? Nahhhh… not so much.
        </p>

        <h2 className="h2">
          <span>Scope out the Goods</span>
        </h2>

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
      </Container>
    </div>
  );
};

export default AboutSection;
