import React from 'react';
import PropTypes from 'prop-types';
// assets
import './SectionTitle.scss';

const SectionTitle = props => {
  const { text, children } = props;
  return <h2 className="SectionTitle">{children || text}</h2>;
};

SectionTitle.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

SectionTitle.defaultProps = {
  text: ``,
  children: null,
};

export default SectionTitle;
