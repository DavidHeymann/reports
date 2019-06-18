import React from 'react';
import VideoItem from './VideoItem';

export default ({videos , onSelectedVideo}) => {
    const VideoItems = videos.map(video => <VideoItem 
        key={video.id.videoId} 
        onSelectedVideo={onSelectedVideo} 
        video={video}/>);
    return (     
        <div className="ui relaxed divided list">
            {VideoItems}
        </div>
    );
};