export interface DisplayState {
  time: number;
  timeType: "Session" | "Break";
  timerRunning: boolean;
}

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? "0" + minutes.toString() : minutes}:${
    seconds < 10 ? "0" + seconds.toString() : seconds
  }`;
};
