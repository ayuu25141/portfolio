import React, { useEffect, useRef, useState } from "react";
import Home from "./page/Home";
import "./App.css";
import music from "./assets/mysong/song.mp3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectshow from "./page/Projectshow"
import About from "./page/About"
function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.5;

    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Browser blocked autoplay
        setIsPlaying(false);
      });
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>

    <BrowserRouter>
     <audio ref={audioRef} src={music} />


    {/* SPA Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projectshow />} />
       
      </Routes>

      <button
        onClick={toggleMusic}
        className="
          fixed bottom-6 right-6 z-50
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/30
          bg-[#F7F3E9]
          text-[#4b3500]
          shadow-[0_0_25px_rgba(201,178,124,0.45)]
          backdrop-blur-xl
          transition-all duration-300
          hover:scale-110
        "
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
    
    </BrowserRouter>
 
    </>
  );
}

export default App;
