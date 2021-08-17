import "./SongListItem.css";

export function SongListItem({song, isCurrent, onSelect}) {
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

