import React from 'react'

export default function Video(props) {
  return (
    <iframe
      style={{ height: '100%', width: '100%' }}
      title={`${props.title}`}
      className="Youtube"
      src={`${props.url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    >
    </iframe>
  );
}