import "./styles.css";

function Heading({title}) {
  return <h1>{title}</h1>;
}

function SongPlayer({showControls, audioUrl}) {
  return (
    <section>
      <Heading title="Music Player"/>
      <audio controls={ showControls } src={ audioUrl }/>
    </section>
  )
}

export default function App() {
  return (
    <div className="App"><SongPlayer showControls audioUrl={ "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" }/></div>
  );
}
