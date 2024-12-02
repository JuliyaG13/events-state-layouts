import React from 'react';
import './IconSwitch.css';

const IconSwitch = ({ icon, onSwitch }) => (
  <div className="icon-switch" onClick={onSwitch}>
    <i className="material-icons">{icon}</i>
  </div>
);

export default IconSwitch;