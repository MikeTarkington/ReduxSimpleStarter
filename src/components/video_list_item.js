import React from 'react';

const VideoListItem = ({video}) => {
  const vidInfo = video.snippet;
  const imageUrl = vidInfo.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{vidInfo.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
