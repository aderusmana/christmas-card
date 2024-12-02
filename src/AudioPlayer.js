import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log('Pemutaran otomatis gagal:', error);
        // Anda bisa menampilkan pesan atau tombol di sini
      }
    };

    playAudio();
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !audioRef.current.muted;
  };

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      <audio ref={audioRef} src="/assets/song.mp3" loop />
      <button onClick={toggleMute} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        {isMuted ? (
          <FaVolumeMute size={30} color="gold" style={{ textDecoration: 'line-through' }} />
        ) : (
          <FaVolumeUp size={30} color="gold" />
        )}
      </button>
    </div>
  );
}

export default AudioPlayer;