import React from 'react';

// assets
import menuIcon from 'images/menu-icon.png';
import './MobileNavToggle.scss';

const MobileNavToggle = () => {
  return (
    <div className="MobileNavToggle">
      <img src={menuIcon} alt="Toggle navigation" />
    </div>
  );
};

export default MobileNavToggle;
