import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix, Link } from 'gatsby';

import Container from 'components/Container';
import ShopifyBadge from 'components/ShopifyBadge';
import './ClientShowcase.scss';

const ClientShowcase = props => {
  const {
    clientName,
    projectDescription,
    projectUrl,
    builtOn,
    screenshot,
    productImg,
    bgImage,
    align,
    productAlign,
    style,
  } = props;

  let alignClassName = `ClientShowcase--left`;
  if (align === `right`) {
    alignClassName = `ClientShowcase--right`;
  }

  let productAlignClassName = ``;
  if (productAlign === `top`) {
    productAlignClassName = `ClientShowcase--productAlignTop`;
  }

  let bgImageStyle = {};
  if (bgImage) bgImageStyle = { backgroundImage: `url(${bgImage})` };

  return (
    <div className="ClientShowcase__bgImage" style={bgImageStyle}>
      <Container>
        <div
          className={`ClientShowcase ${alignClassName} ${productAlignClassName}`}
          style={style}
        >
          <div className="ClientShowcase__content">
            <h3 className="ClientShowcase__title">{clientName}</h3>
            <p className="ClientShowcase__description">{projectDescription}</p>
            <div className="ClientShowcase__actions">
              <div className="ClientShowcase__projectUrl">
                <Link className="btn" to={projectUrl}>
                  View Project
                </Link>
              </div>
              <div className="ClientShowcase__builtOn">
                <ShopifyBadge type={builtOn} />
              </div>
            </div>
            {productImg ? (
              <div className="ClientShowcase__productImg">
                <img
                  src={withPrefix(productImg)}
                  alt={`${clientName} product`}
                />
              </div>
            ) : null}
          </div>
          <div className="ClientShowcase__screenshot">
            <img
              src={withPrefix(screenshot)}
              alt={`${clientName} website screenshot`}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

ClientShowcase.propTypes = {
  clientName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  builtOn: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  productImg: PropTypes.string,
  bgImage: PropTypes.string,
  align: PropTypes.string,
  productAlign: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line
};

ClientShowcase.defaultProps = {
  productImg: ``,
  bgImage: ``,
  align: `left`,
  productAlign: `bottom`,
  style: {},
};

export default ClientShowcase;
