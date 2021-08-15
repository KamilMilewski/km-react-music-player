import "./styles.css";

function Heading({title}) {
  return <h1>{title}</h1>;
}

function SongPlayer({showControls = true, song}) {
  const { audioUrl, coverUrl } = song;
  return (
    <section>
      <Heading title="Music Player"/>
      <img width="250px" height="250px" src={coverUrl} alt="Song cover"/>
      <audio controls={ showControls } >
	<source src={ audioUrl } />
      </audio>
    </section>
  )
}

function SongListItem({song, isCurrent}) {
  const backgroundColor = isCurrent ? "darkslategrey" : "none"
  const style = { backgroundColor }

  return (
    <li key={song.audioUrl} style={style}>
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
  const currentSong = songs[1];

  return (
    <div className="App">
      <SongPlayer song={ currentSong } />
      <section>
	<Heading title="Songs" />
	<ul>
	  {songs.map( song => <SongListItem song={song} key={song.audioUrl} isCurrent={currentSong.audioUrl === song.audioUrl }/>)}
	</ul>
      </section>
    </div>
  );
}
