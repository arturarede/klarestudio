"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  id: string;
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ id }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const src = `/audio/${id}.mp3`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setAvailable(true);
      setDuration(audio.duration);
    };
    const onError = () => setAvailable(false);
    const onTime = () => setCurrent(audio.currentTime);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("error", onError);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  if (available === false) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setCurrent(audio.currentTime);
  };

  return (
    <div className="audio-bar" data-no-pdf>
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        className="card-btn"
        onClick={toggle}
        aria-label={playing ? "Pausar" : "Ouvir oração"}
        title={playing ? "Pausar" : "Ouvir oração"}
      >
        {playing ? (
          <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <rect x="2" y="1" width="3.5" height="11" rx="1" />
            <rect x="7.5" y="1" width="3.5" height="11" rx="1" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M3 1.5l9 5-9 5V1.5z" />
          </svg>
        )}
        {playing ? "Pausar" : "Ouvir"}
      </button>

      {available && duration > 0 && (
        <>
          <input
            className="audio-scrubber"
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={current}
            onChange={seek}
            aria-label="Progresso do áudio"
          />
          <span className="audio-time">
            {fmt(current)} / {fmt(duration)}
          </span>
        </>
      )}
    </div>
  );
}
