import React, {Component} from 'react';


class VideoPlayer extends Component {
  
  
  render() {
    if(this.props.video) {
      const url = "https://www.youtube.com/embed/"+ this.props.video.id.videoId+ "?autoplay=1";
      return(
        <div  className="col-md-8">
          <iframe className="embed-responsive-item" src={url} ></iframe>
        </div>
      )
    }
    else {
      return(
        <div>Ingrese el nombre de un video</div>
      )
    }
    

  }
}

export default VideoPlayer;
