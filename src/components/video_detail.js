import React from 'react';

const VideoDetail = ({video, onVideoSelect}) => {
  if (!video) {
    return <div>Loading...</div>;
  };


  const vidInfo = video.snippet;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{vidInfo.title}</div>
        <div>{vidInfo.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
