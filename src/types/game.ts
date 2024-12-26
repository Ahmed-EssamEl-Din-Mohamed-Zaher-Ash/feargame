export type Fear = {
  id: string;
  name: string;
  description: string;
  level: number;
};

export type Choice = {
  text: string;
  isPositive: boolean;
  feedback: string;
};

export type Challenge = {
  situation: string;
  choices: Choice[];
};

export type GameState = {
  currentLevel: number;
  score: number;
  fears: Fear[];
  isGameOver: boolean;
};