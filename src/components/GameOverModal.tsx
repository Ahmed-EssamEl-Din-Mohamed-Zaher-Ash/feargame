import React from 'react';

interface GameOverModalProps {
  success: boolean;
  score: number;
  message: string;
  onRestart: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({
  success,
  score,
  message,
  onRestart,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <h2 className={`text-2xl font-bold mb-4 ${success ? 'text-green-600' : 'text-red-600'}`}>
          {success ? '🎉 مبروك!' : '😔 حظ أوفر المرة الجاية'}
        </h2>
        <p className="text-gray-700 text-lg mb-4">{message}</p>
        <p className="text-gray-600 mb-6">النقط: {score}</p>
        <button
          onClick={onRestart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          العب تاني
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;