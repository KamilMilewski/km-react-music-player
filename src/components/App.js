import React, { useEffect, useState } from "react";
import { SongListItem } from "./SongListItem";
import { SongPlayer } from "./SongPlayer";
import { Songs } from "./Songs";
import { Heading } from "./Heading"
import "./App.css";

export function App() {
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
	  <Songs>
	    <Heading title="Songs" />
	    <ul>
	      {
		songs.map(
		song => <SongListItem song={song} key={song.audioUrl} isCurrent={currentSong.audioUrl === song.audioUrl} onSelect={handleSelectSong}/>
	      )
	    }
	    </ul>
	  </Songs>
      </>
      ) }
    </div>
  );
}
