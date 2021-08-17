import React, { useRef, useState, useEffect } from "react";
import { Heading } from "./Heading"
import "./SongPlayer.css";

export function SongPlayer({showControls = false, song}) {
  console.log("Rendered SongPlayer");
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;

  useEffect(() => {
    let timer = null; 
    timer = setInterval(() => tick(), 1000)
  }, []);

  function tick() {
    console.log((audioRef.current.currentTime / audioRef.current.duration) * 100);
  }

  function startTimer() {
    return(
      setInterval(() => tick(), 1000)
    )  
  }

  return (
    <section className="SongPlayer" >
      <Heading title="Music Player"/>
      <img width="250px" height="250px" src={coverUrl} alt="Song cover"/>
      <audio ref={audioRef} key={song.audioUrl} controls={ showControls } >
	<source src={ audioUrl } />
      </audio>
      <div>
	<button onClick={() => audioRef.current.play()}>Play</button>
	<button onClick={() => audioRef.current.pause()}>Pause</button>
      </div>
    </section>
  )
}

