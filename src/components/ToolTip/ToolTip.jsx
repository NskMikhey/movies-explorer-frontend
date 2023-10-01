import React from 'react';
import './ToolTip.css';

const ToolTip = (props) => {
  return (
    <span className={`tooltip ${props.text ? 'tooltip_visible' : ''}`}>
      <span className='tooltip__text'>{props.text}</span>
      <span className='tooltip__cloud'>{props.text}</span>
    </span>
  );
};

export default ToolTip;
