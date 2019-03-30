import React from 'react';
import PropTypes from 'prop-types';

import shopifyPlus from 'images/built-on-shopify-plus.png';
import shopify from 'images/built-on-shopify.png';

const ShopifyBadge = props => {
  const { type } = props;
  let img = shopify;
  let imgAlt = 'Built on Shopify';
  if (type === `shopify-plus`) {
    img = shopifyPlus;
    imgAlt = 'Built on Shopify Plus';
  }
  return <img src={img} alt={imgAlt} />;
};

ShopifyBadge.propTypes = {
  type: PropTypes.string,
};

ShopifyBadge.defaultProps = {
  type: `shopify`,
};

export default ShopifyBadge;
