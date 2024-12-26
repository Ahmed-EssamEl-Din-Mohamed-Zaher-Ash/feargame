import React, { useState } from 'react';
import { fears } from './data/gameData';
import GameLevel from './components/GameLevel';
import BugsLevel from './components/BugsLevel';
import SocialLevel from './components/SocialLevel';
import { Fear } from './types/game';

function App() {
  const [currentFear, setCurrentFear] = useState<Fear>(fears[0]);
  const [gameStarted, setGameStarted] = useState(false);
  const [completedLevels, setCompletedLevels] = useState<string[]>([]);

  const handleComplete = () => {
    setCompletedLevels(prev => [...prev, currentFear.id]);
    const nextFear = fears.find(fear => !completedLevels.includes(fear.id));
    if (nextFear) {
      setCurrentFear(nextFear);
      setGameStarted(false);
    }
  };

  const renderLevel = () => {
    if (!gameStarted) {
      return <GameLevel fear={currentFear} onComplete={() => setGameStarted(true)} />;
    }

    switch (currentFear.id) {
      case 'bugs':
        return <BugsLevel onComplete={handleComplete} />;
      case 'social':
        return <SocialLevel onComplete={handleComplete} />;
      default:
        return null;
    }
  };

  if (completedLevels.length === fears.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex items-center justify-center p-8">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">مبروك! 🎉</h1>
          <p className="text-xl text-gray-600 mb-8">
            إنت نجحت في مواجهة كل مخاوفك! دي خطوة جامدة جداً في رحلتك
          </p>
          <button
            onClick={() => {
              setCompletedLevels([]);
              setCurrentFear(fears[0]);
              setGameStarted(false);
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            العب تاني
          </button>
        </div>
      </div>
    );
  }

  return renderLevel();
}

export default App;