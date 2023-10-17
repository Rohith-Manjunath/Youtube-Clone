import React from "react";
import "../styles/Videos.css";
import Data from "../db/Data";

const Videos = () => {
  return (
    <div className="videos-container">
      {Data.videos.map((video) => (
        <div key={video.id} className="video-item">
          <div className="img-container">
            <img src={video.thumbnail} alt="" />
          </div>
          <div className="video-info-div">
            <div className="channel-img">
              <img src={video.channel_icon} alt="" />
            </div>
            <div className="video-info">
              <p className="video-description">{video.description}</p>
              <p className="owner">{video.owner}</p>
              <p className="views">
                {video.views} views &#183; {video.days_ago}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
