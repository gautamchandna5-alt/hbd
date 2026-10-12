import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const SongsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const songs = [
    { title: "Darkhaast", file: "Darkhaast.mp3" },
    { title: "Be Intehaan", file: "BeIntehaan.mp3" },
    { title: "Raabta", file: "Raabta.mp3" },
    { title: "Chahun Mai Ya Naa", file: "ChahunMaiYaNaa.mp3" },
    { title: "Bin Tere", file: "BinTere.mp3" },
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        new URL(`../../assets/audio/${songs[currentSong].file}`, import.meta.url).href
      );
    } else {
      const newSrc = new URL(`../../assets/audio/${songs[currentSong].file}`, import.meta.url).href;
      if (!audioRef.current.src.includes(songs[currentSong].file)) {
        audioRef.current.src = newSrc;
        audioRef.current.currentTime = 0;
      }
    }

    const audio = audioRef.current;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      // Auto-advance to next song when finished
      setCurrentSong((prev) => (prev < songs.length - 1 ? prev + 1 : 0));
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    if (isPlaying) {
      audio.play().catch((err) => console.log("Audio play blocked:", err));
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSong, isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleSongSelect = (index: number) => {
    setCurrentSong(index);
    setIsPlaying(true);
  };

  // Format seconds into M:SS
  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle clicking on the progress bar to seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    if (audioRef.current && duration) {
      audioRef.current.currentTime = percentage * duration;
    }
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative w-full h-full flex flex-col justify-around items-center py-4 px-6 overflow-hidden">
      
      {/* 1. TOP HEADER */}
      <div className="text-center z-10">
        <h1 className="font-script text-[#8d2a1b] text-5xl -rotate-2">
          Birthday Playlist
        </h1>
        <p className="font-serif italic text-[#7a5c48] text-sm tracking-wider mt-1 leading-relaxed">
          Songs I've put together<br />
          trying to describe you
        </p>
      </div>

      {/* 2. MAIN PLAYER CARD */}
      <div className="relative w-full max-w-[320px] bg-white/30 backdrop-blur-xl rounded-3xl p-4 shadow-[0_8px_32px_0_rgba(78,54,41,0.1)] border border-white/50 z-10 flex flex-col items-center">
        
        {/* Rotating Vinyl Disc */}
        <motion.div 
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { repeat: Infinity, duration: 8, ease: "linear" } : { duration: 0 }}
          className="w-24 h-24 rounded-full bg-[#362319] shadow-inner flex items-center justify-center relative mb-2.5 border-4 border-[#4e3629]"
        >
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <div className="absolute inset-5 rounded-full border border-white/10" />
          
          <div className="w-9 h-9 rounded-full bg-[#c47b68] flex items-center justify-center border border-white/40 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#eedecc] border border-[#4e3629]" />
          </div>
        </motion.div>

        {/* Track Info */}
        <div className="text-center mb-2">
          <h3 className="font-serif italic text-[#4e3629] text-base font-bold truncate max-w-[260px]">
            {songs[currentSong].title}
          </h3>
          <span className="inline-block font-serif text-[10px] text-[#8d2a1b] italic mt-0.5">
            {isPlaying ? "♪ Now Playing" : "⏸ Paused"}
          </span>
        </div>

        {/* Dynamic Interactive Progress Bar */}
        <div className="w-full mb-2">
          <div 
            onClick={handleSeek}
            className="w-full h-2 bg-[#d9cdb0]/50 backdrop-blur-sm rounded-full overflow-hidden cursor-pointer relative"
          >
            <div 
              className="h-full bg-[#8d2a1b] rounded-full transition-all duration-100"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between font-serif text-[10px] text-[#7a5c48] mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5">
          <button 
            onClick={() => handleSongSelect(currentSong > 0 ? currentSong - 1 : songs.length - 1)}
            className="text-[#8d2a1b] hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-[#8d2a1b] text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>

          <button 
            onClick={() => handleSongSelect(currentSong < songs.length - 1 ? currentSong + 1 : 0)}
            className="text-[#8d2a1b] hover:scale-110 transition-transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
          </button>
        </div>
      </div>

      {/* 3. LOWER PLAYLIST TRACKLIST CARD */}
      <div className="w-full max-w-[320px] bg-white/30 backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_8px_32px_0_rgba(78,54,41,0.1)] border border-white/50 z-10">
        <div className="flex justify-between items-center px-1 mb-2">
          <span className="font-serif text-xs tracking-widest text-[#7a5c48] uppercase font-bold">
            Playlist - 5 Songs
          </span>
        </div>

        <div className="space-y-2">
          {songs.map((song, index) => (
            <div 
              key={index}
              onClick={() => handleSongSelect(index)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all ${
                currentSong === index 
                  ? 'bg-white/70 shadow-sm border border-white/80 scale-[1.01]' 
                  : 'hover:bg-white/20'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-[#c47b68]/40 backdrop-blur-sm flex items-center justify-center text-[#8d2a1b] text-sm shrink-0">
                ♪
              </div>
              <h4 className="font-serif text-sm text-[#4e3629] font-bold">
                {song.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};