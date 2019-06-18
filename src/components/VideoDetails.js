import React from 'react';

export default ({video}) => {
    if (!video) {
        return (<div>Loading...</div>);
    }
    const videoSrc = 'https://www.youtube.com/embed/'
    return (
        <div>
            <div className="ui embed">
                <iframe src={`${videoSrc}${video.id.videoId}`}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>        
        </div>
    );
};