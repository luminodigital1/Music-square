

import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import styled from 'styled-components'
import volumebtn from '../Images/volume.png'
import './AudioWave.css'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
  }
`

const AudioWave = ({ audio }) => {
    const [volume, setVolume] = useState(0.5); // Initial volume value

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  const containerRef = useRef()
  const waveSurferRef = useRef({
    isPlaying: () => false,
  })
  const [isPlaying, toggleIsPlaying] = useState(false)

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
        container: containerRef.current,
        responsive: true,
        cursorWidth: 0,
        barWidth: 2,
        waveColor: 'black',
        barHeight: 0.3,
        progressColor: '#fee500',
        barGap: 2
        
      })
      
      
    waveSurfer.load(audio)
    waveSurfer.on('ready', () => {
        waveSurferRef.current = waveSurfer
      })
      

    return () => {
      waveSurfer.destroy()
    }
  }, [audio])
  
  return (
    
    <>
    <div style={{backgroundColor: '#e8eaed'}}>
    <div className="d-flex" style={{backgroundColor: '#e8eaed'}}>
      <button style={{border: 0, backgroundColor: '#e8eaed', marginBottom: -20}}
        onClick={() => {
          waveSurferRef.current.playPause()
          toggleIsPlaying(waveSurferRef.current.isPlaying())
        }}
        type="button"
      >
        {
  isPlaying ? <FaPauseCircle size="3em"/> : <FaPlayCircle size="3em" />
}
      </button>
      <div style={{paddingLeft: 20, marginBottom: -20}} className="col-md-10" ref={containerRef} />
      </div>
      <div className="d-flex col-md-3 offset-md-9" style={{}}>
        <img src={volumebtn} alt="" width="30" height="50" style={{paddingBottom: 20}}/>
      <input className="volbar" style={{
        height: 3,
        width: 75,
        marginTop: 15, 
        accentColor: '#fee500',
        // WebkitAppearance: 'none', /* Override default CSS styles */
        // appearance: 'none',
        cursor: 'pointer',
        // paddingLeft: 50
        // marginLeft: -20
      }}
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      </div>
      </div>
    </>
  )
}

AudioWave.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default AudioWave