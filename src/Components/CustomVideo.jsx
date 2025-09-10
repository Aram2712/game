
import './component.scss';
import { useRef, useState, useEffect, useCallback } from "react";
import playBtn from '../assets/play.svg';
import poster from '../assets/videobg.svg'

export default function CustomVideo({ src, width = "100%" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onLoaded = () => setIsLoaded(true);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("loadeddata", onLoaded);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  return (
    <div
      className="cv-wrapper"

      tabIndex={0}
      role="region"
      aria-label="Video player"
    >
      <video
        ref={videoRef}
        className="cv-video"
        src={src}
        preload="metadata"
        playsInline
        onClick={togglePlay}
        poster={poster}
      />
      <img src={playBtn}
        className={`cv-play-btn ${isPlaying ? "playing" : ""}`}
        aria-hidden="true"
        onClick={togglePlay}
      />
    </div>
  );
}
