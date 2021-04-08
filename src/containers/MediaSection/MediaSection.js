import React from 'react';
import MediaButton from '../../components/MediaButton/MediaButton.js';
import pauseIcon from '../../res/pause_icon.png';
import playIcon from '../../res/play_icon.png';
import resetIcon from '../../res/reset_icon.png';
import recordIcon from '../../res/record_icon.png';
import ChordLabel from '../../components/ChordLabel/ChordLabel.js';
import click from '../../res/click.wav';

const pauseClicked = () => {
}

const playClicked = () => {
}

const resetClicked = () => {
}

const recordClicked = (audio) => {
  audio.play();
}

const MediaSection = () => {
  const audio = new Audio(click);

  return (
    <div class='media-section'>
      <div class='media-section__button-container'>
        <MediaButton icon={pauseIcon} widthPercentage='35%' onClick={() => pauseClicked()}/> 
        <MediaButton icon={playIcon} widthPercentage='40%' onClick={() => playClicked()}/> 
        <MediaButton icon={resetIcon} widthPercentage='40%' onClick={() => resetClicked()}/> 
        <MediaButton icon={recordIcon} widthPercentage='45%' onClick={() => recordClicked(audio)}/> 
      </div>
      <div class='media-section__chord-label-container'>
        <ChordLabel/>
      </div>
    </div>
  )
}

export default MediaSection;
