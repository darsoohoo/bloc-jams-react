 import React, { Component } from 'react';
 import albumData from './../data/albums';
 import { Link } from 'react-router-dom';



 class Album extends Component {
   constructor(props) {
     super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });


    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hovering: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
   this.audioElement.pause();
   this.setState({ isPlaying: false });
 }

 setSong(song) {
   this.audioElement.src = song.audioSrc;
   this.setState({ currentSong: song });
 }

 handleSongClick(song) {
   const isSameSong = this.state.currentSong === song;
   if (this.state.isPlaying && isSameSong) {
     this.pause();
   } else {
     if (!isSameSong) { this.setSong(song); }
     this.play();
   }
 }



 audioConfig(song, index) {
  const isSameSong = this.state.currentSong === song;
  // If it is hovering and is not playing and is not the same song
  if (this.state.hovering === index + 1 && !this.state.isPlaying && !isSameSong) {
    return <span> <i className="play" ></i> </span>;
  } else if (this.state.hovering === index + 1 && this.state.isPlaying){
    return <span> <i className="pause" ></i> </span>;
  } else if (isSameSong && this.state.isPlaying) {
    return <span> <i className="pause" ></i> </span>;
  } else if (isSameSong && !this.state.isPlaying) {
    return <span> <i className="play" ></i> </span>;
  } else {
    return index + 1;
  }
};







  render() {
    return (
      <section className='albums'>
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Duration</th>
            </tr>
              {
                this.state.album.songs.map( (song, index) =>
                  <tr 
                    className="song" 
                    key={index} 
                    onClick={() => this.handleSongClick(song)} 
                    onMouseEnter={() => this.setState({ hovering: index + 1})}
                    onMouseLeave={() => this.setState({ hovering: false})}
                  >
                  
                  <td>{this.audioConfig(song, index)} </td>
                  <td>{song.title}</td>
                  <td>{(song.duration)}</td>
                  </tr>
                )
              }
          </tbody>
        </table>
      </section>
    );
  }
}

export default Album;
