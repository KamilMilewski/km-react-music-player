import "./SongProgress.css";

export function SongProgress({progress}) {
  const progressFormatted = Math.floor(progress);

  return (
    <section className="SongProgress" >
      <div id="ProgressBarContainer">
	<div id="ProgressBar" style={{ width: `${progressFormatted}%`}}></div>
      </div>
      {progressFormatted} %
    </section>
  ); 
}

