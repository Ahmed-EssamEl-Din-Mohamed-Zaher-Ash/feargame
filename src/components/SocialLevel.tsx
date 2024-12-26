import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { socialLevels } from '../data/socialChallenges';
import { playSuccessSound } from './SoundEffects';
import GameOverModal from './GameOverModal';
import LevelComplete from './LevelComplete';

interface SocialLevelProps {
  onComplete: () => void;
}

const SocialLevel: React.FC<SocialLevelProps> = ({ onComplete }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', isPositive: true });
  const [gameOver, setGameOver] = useState(false);
  const [showLevelComplete, setShowLevelComplete] = useState(false);

  const handleChoice = (isPositive: boolean, feedback: string) => {
    if (isPositive) {
      setScore(prev => prev + 1);
      playSuccessSound();
    }
    
    setFeedback({
      message: feedback,
      isPositive: isPositive
    });
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < socialLevels[currentLevel].length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        if (currentLevel < socialLevels.length - 1) {
          setShowLevelComplete(true);
        } else {
          setGameOver(true);
          if (score >= Math.floor(socialLevels[currentLevel].length * 0.7)) {
            setTimeout(onComplete, 1500);
          }
        }
      }
    }, 2000);
  };

  const handleNextLevel = () => {
    setCurrentLevel(prev => prev + 1);
    setCurrentQuestion(0);
    setShowLevelComplete(false);
  };

  const handleRestart = () => {
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
    setShowFeedback(false);
  };

  const challenge = socialLevels[currentLevel][currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <Eye
            key={i}
            className="absolute text-gray-700 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${0.5 + Math.random()})`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="absolute top-4 right-4 text-xl font-bold">
          المستوى: {currentLevel + 1} | السؤال: {currentQuestion + 1}/{socialLevels[currentLevel].length}
        </div>

        {!gameOver && !showLevelComplete && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {challenge.situation}
            </h2>

            <div className="space-y-4">
              {challenge.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice.isPositive, choice.feedback)}
                  className={`w-full text-right p-4 rounded-lg transition duration-300 ${
                    showFeedback ? 'opacity-50 cursor-not-allowed' : 
                    'hover:bg-gray-100 hover:shadow-md'
                  }`}
                  disabled={showFeedback}
                >
                  {choice.text}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div className={`mt-6 p-4 rounded-lg text-center ${
                feedback.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {feedback.message}
              </div>
            )}
          </>
        )}

        {showLevelComplete && (
          <LevelComplete
            message="أحسنت! نجحت في إتمام هذا المستوى. مستعد للتحدي التالي؟"
            score={score}
            totalQuestions={socialLevels[currentLevel].length}
            onNext={handleNextLevel}
          />
        )}

        {gameOver && (
          <GameOverModal
            success={score >= Math.floor(socialLevels[currentLevel].length * 0.7)}
            score={score}
            onRestart={handleRestart}
            message={
              score >= Math.floor(socialLevels[currentLevel].length * 0.7)
                ? "برافو! نجحت في مواجهة نظرات الناس وأفكارهم السلبية!"
                : "حاول تاني وافتكر إن نظرات الناس مش هتأثر على قيمتك"
            }
          />
        )}
      </div>
    </div>
  );
};

export default SocialLevel;