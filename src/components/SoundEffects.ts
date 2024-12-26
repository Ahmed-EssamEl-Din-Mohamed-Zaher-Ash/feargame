export const playSuccessSound = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/success-1-6297.wav');
  audio.volume = 0.5;
  audio.play().catch(error => console.log('Audio playback failed:', error));
};

export const playLevelCompleteSound = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/applause-8.wav');
  audio.volume = 0.5;
  audio.play().catch(error => console.log('Audio playback failed:', error));
};