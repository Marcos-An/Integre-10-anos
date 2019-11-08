import React from 'react'
import ReactPlayer from 'react-player'
import "./Video.css"

const Video = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        url='https://vimeo.com/371970018'
        className='react-player'
        playing
        width='100%'
        height='100%'
      />
    </div>
  );
}

export default Video