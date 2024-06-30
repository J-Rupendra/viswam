import React from 'react'

const VideoPlayContainer = ({videoId}) => {
  return (
      <iframe
        width="770"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
  );
}

export default VideoPlayContainer
