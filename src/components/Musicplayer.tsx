import { useEffect, useRef, useState } from "react";
import { RiMusic2Line } from "react-icons/ri";

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playMusic = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch {
        //Browser blocked autoplay.
        setIsPlaying(false);
      }
    };

    playMusic();
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
        <audio ref={audioRef}
        src="/music/Metro Boomin, A AP Rocky, Roisee - Am I Dreaming (Visualizer).mp3"
        loop
        />
        
        <button onClick={toggleMusic} className="fixed right-6 top-6 z-50 rounded-full p-3 text-white">
          {isPlaying ? <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20"><RiMusic2Line size={14}/></div> : <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20"><RiMusic2Line size={14}/></div>}
        </button>
    </>
  );
}

export default MusicPlayer;