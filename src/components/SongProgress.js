import React, { useRef, useEffect } from "react";
import "./SongProgress.css";

export function SongProgress({progress, audioRef}) {
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

      const progressBarTotalWidth = document.getElementById("ProgressBarContainer").offsetWidth;
      const desiredSongProgress = (x / progressBarTotalWidth) * 100

      console.log(desiredSongProgress)

      audioRef.current.currentTime = audioRef.current.duration * desiredSongProgress / 100.0;
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

