import React, { useRef } from "react";
import { Heading } from "./Heading"
import "./SongPlayer.css";

export function SongPlayer({showControls = false, song}) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
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

