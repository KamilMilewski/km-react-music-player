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

export default function App() {
  const currentSong = {
    audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
    coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
    title: "Deadfro5h",
    artist: "starfrosh"
  }
  return (
    <div className="App">
      <SongPlayer song={ currentSong }
      />
    </div>
  );
}
