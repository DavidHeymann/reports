import React from "react";
import SearchBar from "./SearchBarYT";
import youtube from "../apis/youtube";
import VideoList from "./videoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    videoSelected: null
  };

  componentDidMount() {
      this.onTermSubmit('אברהם פריד');
  }

  onTermSubmit = async term => {
    const videos = await youtube.get("search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: videos.data.items, videoSelected: videos.data.items[0] });    
  };

  onSelectedVideo = video => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelectedVideo={this.onSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
