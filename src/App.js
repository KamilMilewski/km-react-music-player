import "./styles.css";

function Heading() {
  const showHello = 1 + 1 === 3 || 2 === 2
  return <h1>Hello CodeSandbox</h1>;
}

function SongPlayer() {
  const showControls = false || true;
  const audioUrl = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
  return (
    <section>
      <Heading />
      <audio controls={ showControls } src={ audioUrl }/>
    </section>
  )
}

function getStatusMessage(isLoading, hasErrors) {
  let message = null;
  if (isLoading) {
    message = "Loading...";
  }
  if (hasErrors) {
    message = "Error occured...";
  }
  return message;
}

export default function App() {
  const isLoading = false;
  const hasErrors = false;
  const showPlayer = !isLoading && !hasErrors;
  const statusMessage = getStatusMessage(isLoading, hasErrors);

  return (
    <div className="App">{showPlayer ? <SongPlayer /> : statusMessage}</div>
  );
}
