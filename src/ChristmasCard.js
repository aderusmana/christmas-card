import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./ChristmasCard.css";

const ChristmasCard = () => {
  const [isFlipped, setIsFlipped] = useState(false); // Amplop depan ke belakang
  const [isOpened, setIsOpened] = useState(false); // Membuka amplop

  // Animasi flip amplop depan ke belakang
  const flipAnimation = useSpring({
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
    config: { tension: 120, friction: 14 },
  });

  // Animasi pembukaan penutup amplop belakang
  const openAnimation = useSpring({
    transform: isOpened ? "translateY(-150px)" : "translateY(0px)",
    opacity: isOpened ? 0 : 1,
    config: { tension: 120, friction: 14 },
  });

  // Animasi foto: rotasi ke kanan dan scale
  const photoAnimation = useSpring({
    transform: isOpened ? "rotate(0deg) scale(0.5)" : "rotate(-90deg) scale(0.1)",
    config: { tension: 120, friction: 14 },
  });

  const handleFlip = () => setIsFlipped(true); // Flip amplop
  const handleOpen = () => setIsOpened(true); // Membuka amplop dan foto

  return (
    <div className="christmas-container">
      {/* Amplop */}
      <animated.div
        className="envelope"
        style={flipAnimation}
        onClick={isFlipped ? handleOpen : handleFlip}
      >
        {/* Tampilan Depan */}
        <div className="envelope-front">
          <img src="/assets/amplop-front.jpg" alt="Amplop Depan" />
        </div>

        {/* Tampilan Belakang */}
        <div className="envelope-back">
          <img src="/assets/amplop-back.png" alt="Amplop Belakang" />
          <img src="/assets/santa.png" alt="Salju" className="snow-image" />
          {isFlipped && (
            <animated.div className="back-cover" style={openAnimation}>
              <div className="snow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  fill="white"
                >
                  <circle cx="10" cy="10" r="2" />
                  <circle cx="30" cy="20" r="2" />
                  <circle cx="50" cy="5" r="2" />
                  <circle cx="70" cy="30" r="2" />
                  <circle cx="90" cy="15" r="2" />
                </svg>
              </div>
            </animated.div>
          )}
        </div>
      </animated.div>

      {/* Foto */}
      <animated.div
        className="photo"
        style={{
          ...photoAnimation,
          zIndex: isOpened ? 3 : 0, // Z-index lebih tinggi saat amplop terbuka
        }}
      >
        <img src="/assets/foto2.jpg" alt="Foto" />
      </animated.div>
    </div>
  );
};

export default ChristmasCard;
