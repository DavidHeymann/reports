import './VideoItem.css';
import React from 'react';

export default ({video, onSelectedVideo}) => {
    return (
        <div onClick={() =>{onSelectedVideo(video)}} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt='pic'/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>            
        </div>
    );
};