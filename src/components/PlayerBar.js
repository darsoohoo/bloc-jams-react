import React, { Component } from 'react';
import './PlayerBar.css';


class PlayerBar extends Component {

    render() {
        return (
            <section className="player-bar">
                <section id="buttons">
                    <button className="ion-skip-backward mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="previous" onClick={this.props.handlePrevClick}>
                        
                    </button>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="play-pause" onClick={this.props.handleSongClick}>
                      <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
                    </button>
 
                    <button className="ion-skip-forward mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="next" onClick={this.props.handleNextClick}>
                        
                    </button>
                    </section>
                    <section id="time-control">
                    <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                    
                    <input 
                        type="range" 
                        className="mdl-slider mdl-js-slider" 
                        value={(this.props.currentTime / this.props.duration) || 0} 
                        max="1" 
                        min="0" 
                        step="0.01" 
                        onChange={this.props.handleTimeChange}
                    />   
                   
                    <div className="total-time">{this.props.formatTime(this.props.duration)}</div> 
                    </section>
                    <section  id="volume-control">
   
                        <div className="icon ion-volume-low"></div>
                        <input 
                        type="range" 
                        className="mdl-slider mdl-js-slider" 
                        value={this.props.volume}
                        max="1"
                        min="0"
                        step="0.01"
                        onChange={this.props.handleVolumeChange}
                        />
                        <div className="icon ion-volume-high"></div>
                        
                </section>
            </section>
        );
    }
}


export default PlayerBar;