import React, { useRef, useState, useEffect } from "react";
import { Heading } from "./Heading"
import { SongProgress } from "./SongProgress"
import "./SongPlayer.css";

export function SongPlayer({showControls = false, song}) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
  const [songProgress, setSongProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const timer = setInterval(tick, 1000);

    return function cleanup() {
      console.log("cleared timer");
      clearInterval(timer);
    }
  }, []);

  function tick() {
    setSongProgress(
      (audioRef.current.currentTime / audioRef.current.duration) * 100.0
    );
  }

  function playMusic() {
    audioRef.current.play();
    setIsPlaying(true);
  }

  function pauseMusic() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <section className="SongPlayer" >
      <Heading title="Music Player"/>
      <img width="250px" height="250px" src={coverUrl} alt="Song cover"/>
      <audio ref={audioRef} key={song.audioUrl} controls={ showControls } >
	<source src={ audioUrl } />
      </audio>
      <SongProgress progress={songProgress}/>
      <div>
	<button onClick={playMusic}>Play</button>
	<button onClick={pauseMusic}>Pause</button>
      </div>
    </section>
  )
}

