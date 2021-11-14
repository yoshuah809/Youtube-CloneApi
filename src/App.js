import React from "react";
import "./App.css";
import Search from './Components/Search/Search'
import youtubeApi from "./Components/Api//Youtube"
import VideoList from "./Components/VideoList/VideoList"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"


export default class App extends React.Component {

  state = {
      videosMetaInfo: [],
      selectedVideoId: null
    };

    onVideoSelected = videoId => {
      this.setState({selectedVideoId: videoId})
    }

    onSearch = async keyword => {
      const response = await youtubeApi.get("/search", {
        params: {
          q: keyword
        }
        
      });
      //console.log(response)
      this.setState({
        videosMetaInfo: response.data.items,
        selectedVideoId: response.data.items[0].id.videoId
      });
      console.log(this.state);
    };
  
   render() {
      return (
        <div className="App">
          <Search onSearch={this.onSearch} />
          <VideoList onVideoSelected ={this.onVideoSelected} data={this.state.videosMetaInfo}/>
          <VideoPlayer videoId = {this.state.selectedVideoId}/>
        </div>
      );
    }
  }
  

