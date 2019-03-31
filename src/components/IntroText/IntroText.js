import React from 'react';
import PropTypes from 'prop-types';

import './IntroText.scss';

const IntroText = props => {
  const { children } = props;
  return <p className="IntroText">{children}</p>;
};

IntroText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntroText;
