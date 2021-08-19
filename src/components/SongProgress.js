import React, { useRef, useEffect } from "react";
import "./SongProgress.css";

export function SongProgress({progress}) {
  const progressBarRef = useRef();  
  const progressFormatted = Math.floor(progress);

  useEffect(() => {
    progressBarRef.current.addEventListener("mousedown", function(e) {
	// Get the target
	const target = e.target;

	// Get the bounding rectangle of target
	const rect = target.getBoundingClientRect();

	// Mouse position
	const x = e.clientX - rect.left;

	const width = rect.width
	const desiredSongProgress = (x/width) * 100

	console.log(desiredSongProgress)
    });
  },[]);

  return (
    <section className="SongProgress" >
      <div ref={ progressBarRef } id="ProgressBarContainer">
	<div id="ProgressBar" style={{ width: `${progressFormatted}%`}}></div>
      </div>
      {progressFormatted} %
    </section>
  ); 
}

