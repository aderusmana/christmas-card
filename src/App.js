import React from 'react';
import Snowfall from 'react-snowfall';
import './App.css';
import { useSpring, animated } from 'react-spring';
import ChristmasCard from './ChristmasCard';
import AudioPlayer from './AudioPlayer';

function App() {
  // Animasi untuk lonceng berayun dengan react-spring
  const swingProps = useSpring({
    loop: true, // Membuat animasi berulang
    to: [
      { transform: 'rotate(45deg)' }, // Arah positif
      { transform: 'rotate(-45deg)' }, // Arah negatif
    ],
    from: { transform: 'rotate(0deg)' }, // Dimulai dari 0 derajat
    config: { tension: 80, friction: 20 }, // Mengatur kecepatan dan kekuatan ayunan
  });

  return (
    <div className="App">
      <Snowfall snowflakeCount={100} radius={[2, 3.0]} />
      <header className="App-header">
      <AudioPlayer />

        <div className="bell-icon">
          {/* Menggunakan animated.img untuk aplikasi react-spring */}
          <animated.img 
            src="/assets/lonceng.png" 
            style={{ ...swingProps, width: '150px' }} 
            alt="Bell" 
          />
        </div>
      <ChristmasCard />
      </header>

    </div>
  );
}

export default App;
