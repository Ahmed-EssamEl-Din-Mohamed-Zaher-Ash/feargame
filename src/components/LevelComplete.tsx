import React, { useEffect } from 'react';
import { playLevelCompleteSound } from './SoundEffects';

interface LevelCompleteProps {
  message: string;
  score: number;
  totalQuestions: number;
  onNext: () => void;
}

const LevelComplete: React.FC<LevelCompleteProps> = ({
  message,
  score,
  totalQuestions,
  onNext
}) => {
  useEffect(() => {
    playLevelCompleteSound();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-4 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">🎉 برافو عليك!</h2>
        <p className="text-xl text-gray-800 mb-4">{message}</p>
        <p className="text-lg text-gray-600 mb-6">
          أنت جاوبت صح على {score} من {totalQuestions} أسئلة
        </p>
        <div className="space-y-4">
          <button
            onClick={onNext}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            المستوى التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelComplete;