import React, { Component } from 'react';

class PlayPauseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  togglePlayPause = () => {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }));

    // Call the play/pause method of Wavesurfer.js based on the isPlaying state
    if (this.state.isPlaying) {
      this.props.wavesurfer.play();
    } else {
      this.props.wavesurfer.pause();
    }
  };

  render() {
    return (
      <button onClick={this.togglePlayPause}>
        {this.state.isPlaying ? 'Pause' : 'Play'}
      </button>
    );
  }
}

export default PlayPauseButton;