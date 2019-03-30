import React from 'react';
import { withPrefix, Link } from 'gatsby';

import { CLIENTS } from 'constants';
import './ClientShowcase.scss';

const ClientShowcase = () => {
  const {
    clientName,
    projectDescription,
    projectUrl,
    builtOn,
    screenshot,
    productImg,
  } = CLIENTS.tepui;

  return (
    <div className="ClientShowcase">
      <div className="ClientShowcase__content">
        <h3 className="ClientShowcase__title">{clientName}</h3>
        <p className="ClientShowcase__description">{projectDescription}</p>
        <Link className="ClientShowcase__projectUrl" to={projectUrl}>
          View Project
        </Link>
        <div className="ClientShowcase__builtOn">{builtOn}</div>
        <div className="ClientShowcase__productImg">
          <img src={withPrefix(productImg)} alt={`${clientName} product`} />
        </div>
      </div>
      <div className="ClientShowcase__screenshot">
        <img
          src={withPrefix(screenshot)}
          alt={`${clientName} website screenshot`}
        />
      </div>
    </div>
  );
};

export default ClientShowcase;
