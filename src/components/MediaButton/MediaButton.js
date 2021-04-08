import React from 'react';
import './MediaButton.scss';

const MediaButton = (props) => {
  return (
    <button className="media-button" onClick={() => props.onClick()}>
      <img src={props.icon} width={props.widthPercentage}/>
    </button>
  )
}

export default MediaButton;
