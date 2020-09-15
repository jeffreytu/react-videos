import "./VideoItem.css";
import React from "react";
import { Html5Entities } from "html-entities";

const htmlEntities = new Html5Entities();

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{htmlEntities.decode(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
