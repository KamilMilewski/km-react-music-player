import "./styles.css";

function Header() {
  return <h1>Hello CodeSandbox</h1>;
}

function SongPlayer() {
  return (
    <section>
      <Header />
      <audio controls src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"/>
    </section>
  )
}

export default function App() {
  return (
    <div className="App">
      <SongPlayer />
    </div>
  );
}
