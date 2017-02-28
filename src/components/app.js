import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import Buscador from './buscador';
import VideoPlayer from './video_player';

const API_KEY = 'AIzaSyD7AeJ_fi01jWanRgPibiUCgWuSFb7nFkE';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }
  
  
  buscarVideoYoutube(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    return(
      <div>
        <Buscador buscarVideoYoutube={this.buscarVideoYoutube.bind(this)} />
        <VideoPlayer video={this.state.selectedVideo}/>
      </div>
    )
  }
}

export default App;
