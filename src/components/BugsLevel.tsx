import React, { useState, useEffect, useCallback } from 'react';
import { Bug } from 'lucide-react';
import GameTimer from './GameTimer';
import GameOverModal from './GameOverModal';

interface BugsLevelProps {
  onComplete: () => void;
}

const GAME_DURATION = 60; // 60 seconds
const TARGET_SCORE = 10;

const BugsLevel: React.FC<BugsLevelProps> = ({ onComplete }) => {
  const [bugs, setBugs] = useState<{ id: number; x: number; y: number }[]>([]);
  const [score, setScore] = useState(0);
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameOver, setGameOver] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleShoot = useCallback(() => {
    setBugs(prevBugs => {
      const nearbyBug = prevBugs.find(bug => 
        Math.abs(bug.x - playerPosition.x) < 10 && 
        Math.abs(bug.y - playerPosition.y) < 10
      );

      if (nearbyBug) {
        setScore(prev => {
          const newScore = prev + 1;
          if (newScore >= TARGET_SCORE) {
            setSuccess(true);
            setGameOver(true);
            setTimeout(onComplete, 1500);
          }
          return newScore;
        });
        return prevBugs.filter(bug => bug.id !== nearbyBug.id);
      }
      return prevBugs;
    });
  }, [playerPosition, onComplete]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameOver) return;
    
    const step = 5;
    switch(e.key) {
      case 'ArrowUp':
        setPlayerPosition(prev => ({ ...prev, y: Math.max(0, prev.y - step) }));
        break;
      case 'ArrowDown':
        setPlayerPosition(prev => ({ ...prev, y: Math.min(90, prev.y + step) }));
        break;
      case 'ArrowLeft':
        setPlayerPosition(prev => ({ ...prev, x: Math.max(0, prev.x - step) }));
        break;
      case 'ArrowRight':
        setPlayerPosition(prev => ({ ...prev, x: Math.min(90, prev.x + step) }));
        break;
      case ' ':
        e.preventDefault();
        handleShoot();
        break;
    }
  }, [handleShoot, gameOver]);

  useEffect(() => {
    if (timeLeft <= 0 && !success) {
      setGameOver(true);
    }
  }, [timeLeft, success]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver && bugs.length < 5) {
        setBugs(prev => [...prev, {
          id: Date.now(),
          x: Math.random() * 80,
          y: Math.random() * 80
        }]);
      }
    }, 2000);

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [bugs.length, handleKeyDown, gameOver]);

  const handleRestart = () => {
    setScore(0);
    setBugs([]);
    setTimeLeft(GAME_DURATION);
    setGameOver(false);
    setSuccess(false);
    setPlayerPosition({ x: 50, y: 50 });
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <div className="absolute top-4 right-4 text-white text-xl">
        النقط: {score}/{TARGET_SCORE}
      </div>
      
      <GameTimer 
        duration={GAME_DURATION}
        onTick={setTimeLeft}
        isRunning={!gameOver}
      />
      
      {bugs.map(bug => (
        <div
          key={bug.id}
          className="absolute transition-all duration-1000"
          style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
        >
          <Bug className="w-8 h-8 text-red-500 animate-bounce" />
        </div>
      ))}

      <div
        className="absolute w-12 h-12 bg-blue-500 rounded-full transition-all duration-100"
        style={{ left: `${playerPosition.x}%`, top: `${playerPosition.y}%` }}
      />

      <div className="absolute bottom-4 left-4 text-white">
        <p>استخدم الأسهم للحركة و Space للضرب</p>
      </div>

      {gameOver && (
        <GameOverModal
          success={success}
          score={score}
          onRestart={handleRestart}
          message={success ? 
            "برافو عليك! نجحت في القضاء على كل الصراصير!" : 
            "للأسف خلص الوقت... حاول تاني!"
          }
        />
      )}
    </div>
  );
};

export default BugsLevel;