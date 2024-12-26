import React from 'react';
import { Bug, Users, Moon } from 'lucide-react';
import { Fear } from '../types/game';

interface GameLevelProps {
  fear: Fear;
  onComplete: () => void;
}

const GameLevel: React.FC<GameLevelProps> = ({ fear, onComplete }) => {
  const getIcon = () => {
    switch (fear.id) {
      case 'bugs':
        return <Bug className="w-12 h-12 text-red-500" />;
      case 'social':
        return <Users className="w-12 h-12 text-blue-500" />;
      case 'dark':
        return <Moon className="w-12 h-12 text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          {getIcon()}
          <h2 className="text-3xl font-bold text-gray-800">{fear.name}</h2>
        </div>
        <p className="text-xl text-gray-600 mb-8">{fear.description}</p>
        
        <div className="space-y-4">
          <button
            onClick={onComplete}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            يلا نبدأ المواجهة!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameLevel;