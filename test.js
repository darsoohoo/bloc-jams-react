getAudio(song, index) {

  
    const icon = this.state.hovering === true? 'pause' : 'play'; 
    if (this.state.hovering === true) {
      return <i className={`${icon} icon`}></i>;
    } else {
      return <i className={`${icon} icon`}></i>;
    }
  };





getAudio(song, index) {
    const audioConfig = {
      play: { 
        text: "Play",
        icon: 'play' 
       },
    
       pause: {
         text: "Pause",
         icon: 'pause'
       }
    };
     if (this.state.hovering === true) {
       return audioConfig.pause.icon;
     } else {
       return audioConfig.play.iconName;
     }
  };