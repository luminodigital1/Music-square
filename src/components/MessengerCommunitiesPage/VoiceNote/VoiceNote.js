import { useRef, useState, useEffect } from "react";
import { AiOutlinePause } from "react-icons/ai";
import {AudioVisualizer} from "react-audio-visualize";
import play from '../../../Images/play.png';

const VoiceNote = () => {
  const audioRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlay = () => {
    console.log("Audio Play Event Triggered");
    setIsPlaying(true);
  };

  const handlePause = () => {
    console.log("Audio Pause Event Triggered");
    setIsPlaying(false);
  };

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      console.log("Current Time:", audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    // Fetch the static audio file and set it as a blob
    fetch("/profile/sample.ogg")
      .then((response) => response.blob())
      .then((audioBlob) => {
        setBlob(audioBlob);
      });

    const audioElem = audioRef.current;
    if (audioElem) {
      // Add event listeners for the audio element
      audioElem.addEventListener("play", handlePlay);
      audioElem.addEventListener("pause", handlePause);
      audioElem.addEventListener("timeupdate", updateTime);

      // Cleanup the event listeners on component unmount
      return () => {
        audioElem.removeEventListener("play", handlePlay);
        audioElem.removeEventListener("pause", handlePause);
        audioElem.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  const handleVolumeClick = () => {
    const audioElem = audioRef.current;
    if (audioElem) {
      if (audioElem.paused || audioElem.ended) {
        audioElem.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioElem.pause();
      }
    }
  };

  return (
    <>
      <div className="mycollabvolume__container" style={{padding:5, marginTop: -2}}>
        <div className="volume__container">
          <div className="top__container">
            <div className="left__container" onClick={handleVolumeClick}>
              {isPlaying ? (
                <AiOutlinePause/>
              ) : (
                <img src={play} alt="logo"  />
              )}
            </div>
            <div className="right__container">
              {blob && (
                <AudioVisualizer
                  blob={blob}
                  width={500}
                  height={95}
                  barWidth={2}
                  gap={2}
                  barColor="black"
                  barPlayedColor="#FFE500"
                  currentTime={currentTime}
                />
              )}
            </div>
          </div>
          
        </div>
      </div>
      <audio ref={audioRef} src="/profile/sample.ogg" preload="auto" />
    </>
  );
};

export default VoiceNote;
