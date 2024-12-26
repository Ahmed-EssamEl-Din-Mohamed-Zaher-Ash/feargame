import React, { useEffect, useState } from 'react';

interface GameTimerProps {
  duration: number;
  onTick: (timeLeft: number) => void;
  isRunning: boolean;
}

const GameTimer: React.FC<GameTimerProps> = ({ duration, onTick, isRunning }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = Math.max(0, prev - 1);
        onTick(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onTick]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="absolute top-4 left-4 text-white text-xl font-mono">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
};

export default GameTimer;