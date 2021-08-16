import "./styles.css";
import React, { useEffect, useState, useRef } from "react";

function Heading({title}) {
  return <h1>{title}</h1>;
}

function SongPlayer({showControls = false, song}) {
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

function SongListItem({song, isCurrent, onSelect}) {
  const background= isCurrent ? "darkslategrey" : "none"
  const style = { background}
  function handleClick() {
    onSelect(song)
  };

  return (
    <li key={song.audioUrl} onClick={handleClick} style={style} className={`SongListItem ${isCurrent ? "selected" : ""}`}>
      {song.title} by {song.artist}
    </li>
  );
}

export default function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
	response.json().then(setSongs);
      }
    })
  }, [])
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  let currentSong = songs[currentSongIndex];
  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex( song => song.audioUrl === selectedSong.audioUrl )
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }

  return (
    <div className="App">
      { songs.length === 0 ? "Loading..." : (
	<>
	  <SongPlayer song={ currentSong } />
	  <section className="Songs">
	    <Heading title="Songs" />
	    <ul>
	      {
		songs.map(
		  song => <SongListItem song={song} key={song.audioUrl} isCurrent={currentSong.audioUrl === song.audioUrl} onSelect={handleSelectSong}/>
		)
	      }
	    </ul>
	  </section>
      </>
      ) }
    </div>
  );
}
