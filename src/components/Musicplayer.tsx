import { useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
        <audio ref={audioRef}
        src="/music/Metro Boomin, A AP Rocky, Roisee - Am I Dreaming (Visualizer).mp3"
        loop
        />
        
        <button onClick={toggleMusic}>
          {isPlaying ? "🔊 Music On" : "🔇 Music Off"}
        </button>
    </>
  );
}

export default MusicPlayer;