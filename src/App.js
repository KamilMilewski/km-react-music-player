import "./styles.css";
import React, { useEffect, useState } from "react";

function Heading({title}) {
  return <h1>{title}</h1>;
}

function SongPlayer({showControls = true, song}) {
  const { audioUrl, coverUrl } = song;
  return (
    <section>
      <Heading title="Music Player"/>
      <img width="250px" height="250px" src={coverUrl} alt="Song cover"/>
      <audio key={song.audioUrl} controls={ showControls } >
	<source src={ audioUrl } />
      </audio>
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
    <li key={song.audioUrl} onClick={handleClick} style={style}>
      {song.title} by {song.artist}
    </li>
  );
}

export default function App() {
  const songs = [
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
      title: "Deadfro5h",
      artist: "starfrosh"
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/majesty.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/majesty.jpg",
      title: "Majesty (Original Mix)",
      artist: "Ryan Craig Martin"
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/runs.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/runs.jpg",
      title: "Runs",
      artist: "Wowa"
    }
  ];
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
      <SongPlayer song={ currentSong } />
      <section>
	<Heading title="Songs" />
	<ul>
	  {
	    songs.map(
	      song => <SongListItem song={song} key={song.audioUrl} isCurrent={currentSong.audioUrl === song.audioUrl} onSelect={handleSelectSong}/>
	    )
	  }
	</ul>
      </section>
    </div>
  );
}
