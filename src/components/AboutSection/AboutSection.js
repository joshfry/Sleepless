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
    <section id="about" className="AboutSection">
      <Container>
        <IntroText>
          We’re an outdoor-loving, music-rocking, coffee-inhaling web design and
          branding agency based in Santa Cruz, California. We’re super serious
          about our work, but ourselves? Nahhhh… not so much.
        </IntroText>

        <h2 className="AboutSection__title">
          <span>Scope out the Goods</span>
        </h2>

        <div className="AboutSection__services">
          <div className="AboutSection__services__item">
            <div className="Service">
              <div
                className="Service__image"
                style={{ backgroundImage: `url(${iconDesign})` }}
              />
              <h4 className="Service__title">
                Website
                <br />
                Design
              </h4>
            </div>
          </div>
          <div className="AboutSection__services__item">
            <div className="Service">
              <div
                className="Service__image"
                style={{ backgroundImage: `url(${iconShop})` }}
              />
              <h4 className="Service__title">
                Shopify
                <br />
                Ecommerce
              </h4>
            </div>
          </div>
          <div className="AboutSection__services__item">
            <div className="Service">
              <div
                className="Service__image"
                style={{ backgroundImage: `url(${iconCms})` }}
              />
              <h4 className="Service__title">Wordpress</h4>
            </div>
          </div>
          <div className="AboutSection__services__item">
            <div className="Service">
              <div
                className="Service__image"
                style={{ backgroundImage: `url(${iconBrand})` }}
              />
              <h4 className="Service__title">Branding</h4>
            </div>
          </div>
          <div className="AboutSection__services__item">
            <div className="Service">
              <div
                className="Service__image"
                style={{ backgroundImage: `url(${iconContent})` }}
              />
              <h4 className="Service__title">
                Content
                <br />
                Creation
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
